const userModel = require("../models/userModel");
const Game = require("../models/gameModel");
const moment = require("moment");
const commissionModel = require("../models/commissionModel")
const {generateUniqueNumber, updateUserWallet} = require("../util/util")
require("moment-timezone");
const Wallet = require("../models/companywallet");
const companyProfitModel = require("../models/companyModel")
const { updateGrowUp, createGrowUp } = require("../socket/sockets");
let walletId = "650daaa42b2122794a524f24";
const BettingHistoryModel = require("../models/battingHistoryModel")
const growUpModel = require("../models/growUpBetModel")

let groupOptions = ["small", "big"];

// let durationOptions = [1];

let downloadResult = [0.7, 0.5, 0.3, 0.2, 0.15, 0.1, 0.08, 0.06, 0.05, 0.04];

async function calculateResult(gameId) {
  const game = await Game.findOne({ _id: gameId }).populate({
    path: "bets.user",
    populate: { path: "downline" },
  });
  if (!game) {
    return; 
  }
  const bigUsers = game.bets.filter((bet) => {
    return bet.group == "big";
  });
  const smallUsers = game.bets.filter((bet) => {
    return bet.group == "small";
  });
  const bigAmount = bigUsers.reduce((acc, res) => {
    return acc + res.amount;
  }, 0);
  const smallAmount = smallUsers.reduce((acc, res) => {
    return acc + res.amount;
  }, 0);

  if (bigAmount > 0 && smallAmount > 0 && bigAmount != smallAmount) {
    let winnerGroup = "big";
    let totalAmount = bigAmount + smallAmount;
    if (bigAmount - smallAmount > 0) {
      winnerGroup = "small";
      
      
    }
    game.winnerGroup = winnerGroup.toUpperCase()
    

    if (winnerGroup == "small") {
  for (const bet of smallUsers) {
        const winAmount = roundDown(bet.amount * 1.94, 2);
        totalAmount -= winAmount;
        await updateUserWallet({ userId: bet.user._id, walletAmount: winAmount, winningAmount: winAmount, betId: bet._id });
        bet.winningAmount = winAmount;
      }
      
    } else if (winnerGroup == "big") {
for (const bet of bigUsers) {
        const winAmount = roundDown(bet.amount * 1.94, 2);
        totalAmount -= winAmount;
        await updateUserWallet({ userId: bet.user._id, walletAmount: winAmount, winningAmount: winAmount, betId: bet._id});
        bet.winningAmount = winAmount;
      }
    }
    
    await game.save();

    updateGrowUp(game);
    let distributedAmount = await distributeComissionToAll(game);
    let compnayFund = totalAmount - distributedAmount;
    await companyProfitModel.create({
      companyId: walletId,
      profitAmount: compnayFund,
      profitFrom:'GROWUP'
      
    })
    const wallet = await Wallet.findOne({ _id: walletId });
    wallet.amount = wallet.amount + compnayFund;
    await wallet.save();
    
  } else if (bigAmount > 0 && smallAmount > 0 && bigAmount == smallAmount) {
    let winnerGroup = "small";
    let totalAmount = bigAmount + smallAmount;
    if (bigUsers.length - smallUsers.length > 0) {
      winnerGroup = "big";
      
    } else if (bigUsers.length == smallUsers.length) {
      winnerGroup = parseInt(Math.random() * 10000) % 2 == 0 ? "small" : "big";
     
    }

    game.winnerGroup = winnerGroup.toUpperCase();
   

    if (winnerGroup == "small") {
  
     for (const bet of smallUsers) {
        const winAmount = roundDown(bet.amount * 1.94, 2);
        totalAmount -= winAmount;
        await updateUserWallet({ userId: bet.user._id, walletAmount: winAmount, winningAmount: winAmount, betId: bet._id});
       bet.winningAmount = winAmount;
       await growUpModel.findOneAndUpdate(bet.user, { winningAmount: winAmount }, { new: true });
      }
      
    } else if (winnerGroup == "big") {
    for (const bet of bigUsers) {
        const winAmount = roundDown(bet.amount * 1.94, 2);
        totalAmount -= winAmount;
        await updateUserWallet({ userId: bet.user._id, walletAmount: winAmount, winningAmount: winAmount, betId: bet._id});
      bet.winningAmount = winAmount;
      await growUpModel.findOneAndUpdate(bet.user, { winningAmount: winAmount }, { new: true });
      }
    
    }
     await game.save();
    updateGrowUp(game);

    let distributedAmount = await distributeComissionToAll(game);
    let compnayFund = totalAmount - distributedAmount;
    await companyProfitModel.create({
      companyId: walletId,
      profitAmount: compnayFund,
      profitFrom:'GROWUP'
      
    })
    const wallet = await Wallet.findOne({ _id: walletId });
    wallet.amount = wallet.amount + compnayFund;
    
    await wallet.save();
  } else if ((bigAmount == 0 && smallAmount!=0) ||( smallAmount == 0 && bigAmount !==0)) {
    let winnerGroup = "small";
    if (bigAmount > 0) {
      winnerGroup = "small";
    }
    else if (smallAmount > 0) { 
      winnerGroup = "big";
    }
    
  let totalAmount = smallAmount + bigAmount;
  for (const bet of game.bets) {
    let winAmount = roundDown(bet.amount * 0.70, 2);
    totalAmount -= winAmount;
    await updateUserWallet({userId: bet.user._id, walletAmount: winAmount, winningAmount: winAmount, betId: bet._id});
    bet.winningAmount = winAmount;
     await game.save();
    }
    
  let distributedAmount = await distributeComissionToAll(game);
    let compnayFund = totalAmount - distributedAmount;
    const totalBettingAmount = bigAmount + smallAmount;

    await companyProfitModel.create({
      companyId: walletId,
      profitAmount: compnayFund,
      profitFrom:'GROWUP'
      
    })
    const wallet = await Wallet.findOne({ _id: walletId });
   
    wallet.amount += compnayFund;
    wallet.totalBettingAmount += totalBettingAmount;

    
    const today = new Date();
  if (!moment(wallet.lastUpdatedDate).isSame(today, 'day')) {
  
    wallet.everydayBettingAmount = 0;
    
    wallet.lastUpdatedDate = today;
  }

  wallet.everydayBettingAmount += totalBettingAmount;

    await wallet.save();
    game.winnerGroup = winnerGroup.toUpperCase();
    await game.save();

    updateGrowUp(game);
    
  } else if(bigAmount === 0 && smallAmount === 0){
    game.winnerGroup = null;
    await game.save();
    updateGrowUp(game);
  }
}

async function distributeComissionToAll(game) {
  return new Promise(async function (resolve, reject) {
    let distributedAmount = 0;
    for (let i = 0; i < game.bets.length; i++) {
      let bet = game.bets[i];
      let dAmount = await distributeCommission(bet.user, bet.amount);
      distributedAmount += dAmount;
    }
    resolve(distributedAmount);
  });
}

async function distributeCommission(user, amount) {
  const betUser =user
  let currentUser = user;
  let distributedAmount = 0;

  for (let i = 0; i < 10; i++) {
    if (currentUser.parentReferralCode != null) {
      let parentUser = await userModel.findOne({
        referralCode: currentUser.parentReferralCode,
      });

      if (!parentUser) {
        return distributedAmount;
      }

      let dAmount = roundDown(amount * (downloadResult[i] / 100), 2);
      
      try {
           if (dAmount>0) {
          let dailyCommission = await commissionModel.create({
            date: new Date(),
            amount: dAmount,
            userId: parentUser._id,
            commissionType: "AGENT",
            senderUID:betUser.UID
          });
        }

        let newWalletAmount = parentUser.walletAmount + dAmount;
        let newCommissionAmount = parentUser.commissionAmount + dAmount;
        distributedAmount += dAmount;

        await Promise.all([
          updateUserWallet({userId: parentUser._id, walletAmount: dAmount, commissionAmount: dAmount})
        ]);

        currentUser = parentUser;

        if (i == 9) {
          return distributedAmount;
        }
      } catch (error) {
        console.error("Error creating commission:", error);
        return distributedAmount;
      }
    } else { 
      return distributedAmount;
    }
  }

  return distributedAmount;
}

function roundDown(num, decimalPlaces = 2) {
  const factor = 10 ** decimalPlaces;
  return Math.floor(num * factor) / factor;
}


const createGame = async (duration) => {
  try {
    const newGame = await Game.create({
      duration: duration,
      startTime: moment(new Date()).tz("Asia/Kolkata"),
      endTime: moment(new Date()).tz("Asia/Kolkata").add(duration, "m"),
      gameUID: await generateUniqueNumber(),
      isCompleted: false,
    });

    createGrowUp({
      isCompleted: newGame.isCompleted,
      gameUID: newGame.gameUID,
      endTime: newGame.endTime,
      duration: newGame.duration
    })

    await new Promise((resolve) => setTimeout(resolve, 60 * 1000));
 
    newGame.isCompleted = true;
    await newGame.save();
    await calculateResult(newGame._id);

  } catch (error) {
    console.log(error)
  }
};

const startGameLoop = async (duration) => {
  createGame(duration);
  setInterval(() => { createGame(duration) }, 60 * 1000);
};

const durationOptions = [1];

durationOptions.forEach((value) => {
  startGameLoop(value);
});


const betController = async (req, res) => {
  try {
    const { amount, group, duration } = req.body;

    if (
      !group ||
      !duration 
  

    ) {
      return res
        .status(400)
        .json({ status: false, message: "Missing parameters" });
    }
    if (!amount) return res.status(400).send({ status: false, message: "you cannot bet without bet amount" })
    
    const user = await userModel.findById(req.decodedToken.userId);
    const game = await Game.findOne({ duration, isCompleted: false }).sort({createdAt: -1});
    

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    if (!game) {
      return res.status(404).json({ status: false, message: "Game not found" });
    }


    if (user.walletAmount < amount) {
      return res
        .status(400)
        .json({ status: false, message: "Insufficient funds" });
    }



    let walletAmount = user.walletAmount - amount;
    let bettingAmount = user.bettingAmount + amount;
    let dailyTotalBettingAmount=user.dailyTotalBettingAmount +amount;
    let rechargeAmount = user.rechargeAmount
      if (rechargeAmount > 0) {
      if (amount <= rechargeAmount) {
        rechargeAmount -= amount;
      } else if (rechargeAmount <= amount) {
        const remainingAmount = amount - rechargeAmount
        const deductAmount =amount - remainingAmount
        rechargeAmount -=deductAmount;
      }
    }
   const updateData = await userModel.updateOne(
      { _id: user._id },
      {
        walletAmount: walletAmount,
        rechargeAmount: rechargeAmount,
        bettingAmount: bettingAmount,
        dailyTotalBettingAmount:dailyTotalBettingAmount
      }
    );
if(!updateData) return res.status(400).send({status:false,message:"technical issue. unabel to bet"})
    game.bets.push({ user: user._id, amount, group });
 

     await game.save();
     const latestUserBet = game.bets[game.bets.length - 1];
    const currentDate = new Date();
    const bettingHistory = await BettingHistoryModel.create({
      user: user._id,
      date: currentDate,
      amount: amount,
      bettingFrom:"GrowUp"
    });
    // await growUpModel.create({
    //   amount: amount,
    //   group: group,
    //   gameId: game.id,
    //   user:user._id

    // })
 
    res.status(201).json({ status: true, message: "Bet placed successfully", game: {
      amount,
      duration,
      endTime : game.endTime,
      gameUID : game.gameUID,
      group,
      isCompleted: game.isCompleted,
      startTime: game.startTime, 
      _id: game._id,
      orderTime: Date.now(),
      betId: latestUserBet._id
    } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while placing the bet" });
  }
};

const growUpUserBettingHistory = async (req, res) => {
  try {
    const userId = req.params.userId;
    const page = parseInt(req.query.page) || 1;
    console.log(page)
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    if (!userId) return res.status(400).send({ status: false, message: "please provide userId" });
    
    const user = await userModel.findOne({ _id: userId })
    if (!user) return res.status(400).send({ status: false, message: "user not found" });

    const games = await Game.find({ 'bets.user': userId })
       .sort({ createdAt: -1 })
      //  .skip(skip)
      // .limit(limit);
    

    const count = await Game.countDocuments({ 'bets.user': userId });

    const response = {
      // currentPage: page,
      // totalPages: Math.ceil(count / limit),
      history: [],
    }; 

    for (const game of games) {
      const userBets = game.bets.filter((bet) => bet.user.toString() === userId);
      if (userBets.length > 0) {
        for (const userBet of userBets) {
          const gameDetails = {
            _id: game._id,
            duration: game.duration,
            isCompleted: game.isCompleted,
            startTime: game.startTime,
            endTime: game.endTime,
            gameUID: game.gameUID,
            winnerGroup: game.winnerGroup,
            amount: userBet.amount, 
            group: userBet.group,
            winningAmount: userBet.winningAmount,
            orderTime: userBet.createdAt,
            betId: userBet._id
          };
          response.history.push(gameDetails);
        }
      }
    }
    res.status(200).json(response);
  } catch (error) {
    console.error('Error fetching user gameplay history:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching user gameplay history' });
  }
};

const getGame = async (req, res) => { 
  try {
    const currentDate = moment(new Date()).tz("Asia/Kolkata")
    const duration = parseInt(req.params.duration)
   
    if (!duration) return res.status(400).send({status: false, meessage:"please provide time duration for game"})


    const game = await Game.findOne({ duration: duration, isCompleted: false }).sort({createdAt:-1}).select({ isCompleted: 1, endTime: 1, startTime: 1 ,gameUID:1})
    if (!game) return res.status(404).send({ status: false })
    
  
  
    return res.status(200).send({status:true,meessage:"success",data:game,currentTime:currentDate})
     

  } catch (error) {
      console.error(error); 
    res.status(500).json({ error: 'An error occurred while fetching  gameplay' });
  }
}

const getGameHistory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const duration = parseInt(req.params.duration);

    
    const skip = (page - 1) * limit;
     const count = await Game.countDocuments({ duration: duration,isCompleted:true })


    const gamesWithSuccessfulBets = await Game.find({ duration: duration,isCompleted:true })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    
          const response = {
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      gamesWithSuccessfulBets
    };

    return res.status(200).send({ status: true, message: "Success", data:response });
  } catch (error) {
    console.error('Error fetching games with successful bets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const growUpBetamount = async (req, res) => {
  try {
    const today = new Date();
    today.setUTCHours(0, 0, 0, 0);

    
    const result = await Game.aggregate([
      {
        $match: { isCompleted: false }
      },
      {
        $unwind: "$bets"
      },
      {
        $group: {
          _id: "$bets.group",
          totalBetAmount: { $sum: "$bets.amount" }
        }
      }
    ]);

    let totalBetAmounts = {
      small: 0,
      big: 0
    };

    result.forEach((group) => {
      if (group._id === "small") {
        totalBetAmounts.small = group.totalBetAmount;
      } else if (group._id === "big") {
        totalBetAmounts.big = group.totalBetAmount;
      }
    });

    
    const todayResult = await Game.aggregate([
      {
        $match: {
          isCompleted: true,
          startTime: { $gte: today }
        }
      },
      {
        $unwind: "$bets"
      },
      {
        $group: {
          _id: "$bets.group",
          todayBetAmount: { $sum: "$bets.amount" }
        }
      }
    ]);

    let todayBetAmounts = {
      small: 0,
      big: 0
    };

    todayResult.forEach((group) => {
      if (group._id === "small") {
        todayBetAmounts.small = group.todayBetAmount;
      } else if (group._id === "big") {
        todayBetAmounts.big = group.todayBetAmount;
      }
    });

    return res.status(200).send({
      status: true,
      message: "Success",
      data: {
        totalBetAmounts,
        todayBetAmounts
      }
    });
  } catch (error) {
    console.error('Error calculating total bet amounts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteGames = async (req, res) => {
  try {
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 1);

    const deletedGames = await Game.deleteMany({ createdAt: { $lt: twoDaysAgo } });

    if (deletedGames.deletedCount > 0) {
      return res.status(200).json({
        status: true,
        message: `${deletedGames.deletedCount} games older than 2 days deleted successfully.`,
      });
    } else {
      return res.status(404).json({
        status: false,
        message: 'No games older than 2 days found to delete.',
      });
    }
  } catch (error) {
    console.error('Error deleting games:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

let counter = 1
const updateGameUid = async (req, res) => {
 try {
    
    const { gameUID } = req.body;


    const parsedGameUID = parseInt(gameUID);

    if (isNaN(parsedGameUID)) {
      return res.status(400).json({ message: 'Invalid gameUID' });
    }

   
    const game = await Game.findOne({ isCompleted: false });

    if (!game) {
      return res.status(404).json({ message: 'No incomplete games found' });
    }

    const newGameUID = `${parsedGameUID}${counter.toString().padStart(5, '0')}`;

    counter++;

  
    game.gameUID = newGameUID;

    
    await game.save();

    return res.status(200).json({ message: 'GameUID updated successfully', newGameUID });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  betController,
  // growUpUserBettingHistroy,
  growUpUserBettingHistory ,
  getGame,
  getGameHistory,
  deleteGames,
  growUpBetamount,
  updateGameUid

};