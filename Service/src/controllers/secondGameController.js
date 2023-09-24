const moment = require("moment");
require("moment-timezone");
const mongoose = require("mongoose");

const userModel = require("../models/userModel");
const Game = require("../models/secondGameModel");
const Wallet = require("../models/companywallet");
const { generateUniqueNumber2 } = require("../util/util");

let walletId = "650daaa42b2122794a524f24";

let downloadResult = [0.7, 0.5, 0.3, 0.2, 0.15, 0.1, 0.08, 0.06, 0.05, 0.04];

async function calculateResult(gameId) {
  const game =  await Game.findOne({ _id: gameId }).populate({
    path: "bets.user",
    populate: { path: "downline" },
  });

  if (!game) {
    return;
  }

  const groups = {
    "A": { users: [], totalAmount: 0 },
    "B": { users: [], totalAmount: 0 },
    "C": { users: [], totalAmount: 0 },
  };


  game.bets.forEach((bet) => {
    const group = bet.group;
    groups[group].users.push(bet.user);
    groups[group].totalAmount += bet.amount;
  });
  let winnerGroup = null;
  let runnerUpGroup = null;
  let loserGroup = null;
  if (groups["A"].users.length === 0 && groups["B"].users.length === 0 && groups["C"].users.length !== 0) {
    loserGroup = "C"
  } else if (groups["A"].users.length !== 0 && groups["B"].users.length === 0 && groups["C"].users.length !== 0) {
    loserGroup = "A"
  

  } else if (groups["A"].users.length === 0 && groups["B"].users.length !== 0 && groups["C"].users.length == 0) {
    loserGroup = "B"


  }
  
  if (groups["A"].users.length === 0 && groups["B"].users.length !=0 && groups["C"].users.length!==0) {
    // If group A has no users, select a random winner and loser from groups B and C
    const randomIndex = Math.floor(Math.random() * 2); // 0 or 1
    if (randomIndex === 0) {
      winnerGroup = "B";
      loserGroup = "C";
     
    } else {
      winnerGroup = "C";
      loserGroup = "B";
    
    }
  } else if (groups["B"].users.length === 0 && groups["C"].users.length !== 0 && groups["A"].users.length !== 0) {
    // If group B has no users, select a random winner and loser from groups A and C
    const randomIndex = Math.floor(Math.random() * 2); // 0 or 1
    if (randomIndex === 0) {
      winnerGroup = "A";
      loserGroup = "C";
  
    } else {
      winnerGroup = "C";
      loserGroup = "A";

    }
  } else if (groups["C"].users.length === 0 && groups["A"].users.length !== 0 && groups["B"].users.length!==0) {
    // If group C has no users, select a random winner and loser from groups A and B
    const randomIndex = Math.floor(Math.random() * 2); // 0 or 1
    if (randomIndex === 0) {
      winnerGroup = "A";
      loserGroup = "B";
    } else {
      winnerGroup = "B";
      loserGroup = "A";
    }
  } else if (
    groups["A"].totalAmount !== 0 &&
    groups["B"].totalAmount !== 0 &&
    groups["C"].totalAmount !== 0 &&
    groups["A"].totalAmount === groups["B"].totalAmount &&
    groups["A"].totalAmount === groups["C"].totalAmount &&
    groups["A"].users.length !== 0 &&
    groups["B"].users.length !== 0 &&
    groups["C"].users.length !== 0 &&
    groups["A"].users.length === groups["B"].users.length &&
    groups["A"].users.length === groups["C"].users.length ) {
    // Randomly select a winner, runner-up, and loser
    const randomIndex = Math.floor(Math.random() * 3); // 0, 1, or 2

    switch (randomIndex) {
      case 0:
        winnerGroup = "A";
        break;
      case 1:
        winnerGroup = "B";
        break;
      case 2:
        winnerGroup = "C";
        break;
    }

    const remainingGroups = ["A", "B", "C"].filter((group) => group !== winnerGroup);
    const randomIndex2 = Math.floor(Math.random() * 2); // 0 or 1

    runnerUpGroup = remainingGroups[randomIndex2];
    loserGroup = remainingGroups[1 - randomIndex2];
  } else {
    // If all groups have users, determine the winner based on your conditions
    // (follows the previous logic)
    if (groups["A"].totalAmount === groups["B"].totalAmount &&
      groups["A"].totalAmount === groups["C"].totalAmount &&
      groups["A"].totalAmount !== 0) {
      // If amounts are equal, prioritize the group with more users
      if (groups["A"].users.length > groups["B"].users.length && groups["A"].users.length > groups["C"].users.length) {
        winnerGroup = "A";
        if (groups["B"].users.length > groups["C"].users.length) {
          runnerUpGroup = "B";
          loserGroup = "C";
        } else {
          runnerUpGroup = "C";
          loserGroup = "B";
        }
      } else if (groups["B"].users.length > groups["A"].users.length && groups["B"].users.length > groups["C"].users.length) {
        winnerGroup = "B";
        if (groups["A"].users.length > groups["C"].users.length) {
          runnerUpGroup = "A";
          loserGroup = "C";
        } else {
          runnerUpGroup = "C";
          loserGroup = "A";
        }
      } else {
        winnerGroup = "C";
        if (groups["A"].users.length >= groups["B"].users.length) {
          runnerUpGroup = "A";
          loserGroup = "B";
        } else {
          runnerUpGroup = "B";
          loserGroup = "A";
        }
      }
    } else {
      // If amounts are not equal, follow your previous logic
      // (group with the least total amount is the winner, second least is the runner-up, and the remaining is the loser)
      if (groups["A"].totalAmount < groups["B"].totalAmount && groups["A"].totalAmount < groups["C"].totalAmount) {
        winnerGroup = "A";
        if (groups["B"].totalAmount < groups["C"].totalAmount) {
          runnerUpGroup = "B";
          loserGroup = "C";
        } else {
          runnerUpGroup = "C";
          loserGroup = "B";
        }
      } else if (groups["B"].totalAmount < groups["A"].totalAmount && groups["B"].totalAmount < groups["C"].totalAmount) {
        winnerGroup = "B";
        if (groups["A"].totalAmount < groups["C"].totalAmount) {
          runnerUpGroup = "A";
          loserGroup = "C";
        } else {
          runnerUpGroup = "C";
          loserGroup = "A";
        }
      } else if (groups["C"].totalAmount < groups["A"].totalAmount && groups["C"].totalAmount < groups["B"].totalAmount) {
        winnerGroup = "C";
        if (groups["A"].totalAmount < groups["B"].totalAmount) {
          runnerUpGroup = "A";
          loserGroup = "B";
        } else {
          runnerUpGroup = "B";
          loserGroup = "A";
        }
      }
    }
  }
  if (groups["A"].users.length !== 0 && groups["B"].users.length !== 0 && groups["C"].users.length !== 0) {
    const winner = groups[winnerGroup];
    const runnerUp = groups[runnerUpGroup];
    const losers = groups[loserGroup];
    await distributeComissionToThreeUsers(winner, runnerUp, losers, game);
  }
  else if (runnerUpGroup == null && loserGroup !==null && winnerGroup !==null) {
    const winner = groups[winnerGroup];
    const losers = groups[loserGroup];
    await distributeComissionToTwoUsers(winner, losers, game);
  } else if (winnerGroup == null && runnerUpGroup == null && loserGroup !== null) {
    const loser =  groups[loserGroup];
    await distributeComissionToOneUser(loser, game)
  }

  game.winnerGroup = winnerGroup;
  game.runnerUpGroup = runnerUpGroup;
  game.losersGroup = loserGroup;

  await game.save();
}

async function distributeComissionToThreeUsers(winner, runnerUp, losers, game) {
  let totalAmount = winner.totalAmount + runnerUp.totalAmount + losers.totalAmount;
  let directCompanyProfit = (totalAmount * 0.97) * 0.05;
  let remainingLosersAmount = (losers.totalAmount * 0.97) - directCompanyProfit;
  totalAmount = totalAmount - directCompanyProfit;
  let winnerRatio = (remainingLosersAmount * 0.70) / (winner.totalAmount * 0.97);
  let runnerUpRatio = (remainingLosersAmount * 0.30) / (runnerUp.totalAmount * 0.97);

  for (let i = 0; i < winner.users.length; i++) {
    let winAmount = roundDown(winner.totalAmount * 0.97 + (winner.users[i].walletAmount * 0.97 * winnerRatio), 2);
    totalAmount = totalAmount - winAmount;
    await userModel.updateOne(
      { _id: winner.users[i]._id },
      { $inc: { walletAmount: winAmount, winningAmount: winAmount } }
    );
  }

  for (let i = 0; i < runnerUp.users.length; i++) {
    let winAmount = roundDown(runnerUp.users[i].walletAmount * 0.97 + (runnerUp.users[i].walletAmount * 0.97 * runnerUpRatio), 2);
    totalAmount = totalAmount - winAmount;
    await userModel.updateOne(
      { _id: runnerUp.users[i]._id },
      { $inc: { walletAmount: winAmount, winningAmount: winAmount } }
    );
  }

   let distributedAmount = await distributeComissionToAll(game);
  
  const wallet = await Wallet.findOne({ _id: walletId });
  if (!wallet) {
    console.error('Wallet not found');
    return;
  }

  let compnayFund = totalAmount - distributedAmount;
  wallet.amount = wallet.amount + compnayFund;

   const today = new Date();
  if (!moment(wallet.lastUpdatedDate).isSame(today, 'day')) {
  
    wallet.everydayBettingAmount = 0;
    
    wallet.lastUpdatedDate = today;
  }

  wallet.everydayBettingAmount += totalAmount; 
  await wallet.save();
}

async function distributeComissionToTwoUsers(winner, losers, game) {
  let totalAmount = winner.totalAmount + losers.totalAmount;
  let distributableAmount = losers.totalAmount * 0.70;
  let winnerRatio = distributableAmount / winner.totalAmount;

  for (let i = 0; i < winner.users.length; i++) {
    let winAmount = roundDown(winner.totalAmount * 0.97 + (winner.users[i].walletAmount * 0.97 * winnerRatio), 2);
    totalAmount = totalAmount - winAmount;
    await userModel.updateOne(
      { _id: winner.users[i]._id },
      { $inc: { walletAmount: winAmount, winningAmount: winAmount } }
    );
  }

    let distributedAmount = await distributeComissionToAll(game);
  
  // Load the wallet from the database
  const wallet = await Wallet.findOne({ _id: walletId });
  if (!wallet) {
    // Handle the case where the wallet is not found
    console.error('Wallet not found');
    return;
  }

  let compnayFund = totalAmount - distributedAmount;
  wallet.amount = wallet.amount + compnayFund;

   const today = new Date();
  if (!moment(wallet.lastUpdatedDate).isSame(today, 'day')) {
  
    wallet.everydayBettingAmount = 0;
    
    wallet.lastUpdatedDate = today;
  }

  wallet.everydayBettingAmount += totalAmount;
  await wallet.save();
}

async function distributeComissionToOneUser(loser, game) {
  let totalAmount = loser.totalAmount;

  for (let i = 0; i < loser.users.length; i++) {
    let winAmount = roundDown(loser.totalAmount * 0.70, 2);
    totalAmount = totalAmount - winAmount;
    await userModel.updateOne(
      { _id: loser.users[i]._id },
      { $inc: { walletAmount: winAmount, winningAmount: winAmount } }
    );
  }

  let distributedAmount = await distributeComissionToAll(game);
  
  // Load the wallet from the database
  const wallet = await Wallet.findOne({ _id: walletId });
  if (!wallet) {
    // Handle the case where the wallet is not found
    console.error('Wallet not found');
    return;
  }

  let compnayFund = totalAmount - distributedAmount;
  wallet.amount = wallet.amount + compnayFund;

   const today = new Date();
  if (!moment(wallet.lastUpdatedDate).isSame(today, 'day')) {
  
    wallet.everydayBettingAmount = 0;
    
    wallet.lastUpdatedDate = today;
  }

  wallet.everydayBettingAmount += totalAmount;
  await wallet.save();
}

async function distributeComissionToAll(game) {
  return new Promise(async function (resolve, reject) {
    let distributedAmount = 0;
    for (let i = 0; i < game.bets.length; i++) {
      let bet = game.bets[i];
      let dAmount = await distributeComission(bet.user, bet.amount);
      distributedAmount += dAmount;
    }
    resolve(distributedAmount);
  });
}

async function distributeComission(user, amount) {
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
      
      let dailyCommission = {
        date: new Date(),
        amount: dAmount,
      };

      parentUser.commissions.push(dailyCommission);

      let newWalletAmount = parentUser.walletAmount + dAmount;
      let newCommissionAmount = parentUser.commissionAmount + dAmount;
      distributedAmount += dAmount;

      await userModel.updateOne(
        { _id: parentUser._id },
        {
          walletAmount: newWalletAmount,
          commissionAmount: newCommissionAmount,
          $push: { commissions: dailyCommission }, 
        }
      );

      currentUser = parentUser;

      if (i == 9) {
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

async function calculateTotalBettingAmountForTheDay() {
  try {
    const today = moment().tz("Asia/Kolkata");
    const startOfDay = today.startOf('day').toDate();
    const endOfDay = today.endOf('day').toDate();

    const games = await Game.find({
      startTime: {
        $gte: startOfDay,
        $lte: endOfDay,
      },
    });
    let totalBettingAmountForTheDay = 0;

    for (const game of games) {
      for (const bet of game.bets) {
        totalBettingAmountForTheDay += bet.amount;
      }
    }

    return totalBettingAmountForTheDay;
  } catch (error) {
    console.error('Error calculating total betting amount for the day:', error);
    return 0;
  }
}

const startAndCheckGame = async (duration) => {
  const currentDate = moment(new Date()).tz("Asia/Kolkata");
  const game = await Game.findOne({ isCompleted: false, duration: duration });

  if (game) {
    if (game.endTime.unix() - currentDate.unix() <= 0) {
      game.isCompleted = true;
      calculateResult(game._id);
      await game.save();
      await Game.create({
        duration: duration,
        startTime: moment(new Date()).tz("Asia/Kolkata"),
        endTime: moment(new Date()).tz("Asia/Kolkata").add(duration, "m"),
        gameUID: await generateUniqueNumber2()
      });
      setTimeout(() => {
        startAndCheckGame(duration);
      }, duration * 60 * 1000);
    } else {
      let currentDate = moment(new Date()).tz("Asia/Kolkata");
      setTimeout(() => {
        startAndCheckGame(duration);
      }, (game.endTime.unix() - currentDate.unix()) * 1000);
    }
  } else {
    await Game.create({
      duration: duration,
      startTime: moment(new Date()).tz("Asia/Kolkata"),
      endTime: moment(new Date()).tz("Asia/Kolkata").add(duration, "m"),
      gameUID: await generateUniqueNumber2()
    });
    setTimeout(() => {
      startAndCheckGame(duration);
    }, duration * 60 * 1000);
  }
};

const durationOptions = [1]; // You can add more duration options if needed.

durationOptions.forEach((value) => {
  startAndCheckGame(value);
});


const bet2ndController = async (req, res) => {
    try {
        const { amount, group, duration } = req.body;

        if (
            !amount ||
            !group ||
            !duration ||
            isNaN(duration) ||
            isNaN(amount) ||
            // !groupOptions.includes(group) ||
            !durationOptions.includes(duration)
        ) {
            return res
                .status(400)
                .json({ status: false, message: "Missing parameters" });
        }
        if(duration !=1) return res.status(400).send({status:false,message:"duration must be 1min"})

        const user = await userModel.findById(req.decodedToken.userId);
        const game = await Game.findOne({ duration, isCompleted: false });

        if (!user) {
            return res.status(404).json({ status: false, message: "User not found" });
        }

        if (!game) {
            return res.status(404).json({ status: false, message: "Game not found" });
        }

        const currentDate = moment(new Date()).tz("Asia/Kolkata");
        console.log(` bet controller${currentDate}`)

        if (game.endTime.unix() - currentDate.unix() < 0) {
            return res
                .status(400)
                .json({ status: false, message: "Wait for Next Game" });
        }

        if (user.walletAmount <= amount) {
            return res
                .status(400)
                .json({ status: false, message: "Insufficient funds" });
        }

    let walletAmount = user.walletAmount - amount;
    let bettingAmount = user.bettingAmount + amount;
    let rechargeAmount = user.rechargeAmount-amount;
    game.bets.push({ user: user._id, amount, group });


    await game.save(
      
    );
    await userModel.updateOne(
      { _id: user._id },
      {
        walletAmount: walletAmount,
        bettingAmount: bettingAmount,
        rechargeAmount:rechargeAmount
      }
    );

        res.status(201).json({ status: true, message: "Bet placed successfully" });
        console.log("bet Placed ")
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while placing the bet" });
    }
};

const riseUpUserBettingHistory = async (req, res) => {
  try {
    const userId = req.params.userId;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    if (!userId) return res.status(400).send({ status: false, message: "please provide userId" });
    
    const user = await userModel.findOne({ _id: userId })
    if (!user) return res.status(400).send({ status: false, message: "user not found" });

    const games = await Game.find({ 'bets.user': userId })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const count = await Game.countDocuments({ 'bets.user': userId });

    const response = {
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      history: [],
    };

    for (const game of games) {
      const userBet = game.bets.find((bet) => bet.user.toString() === userId);
      if (userBet) {
        const gameDetails = {
          _id: game._id,
          duration: game.duration,
          isCompleted: game.isCompleted,
          startTime: game.startTime,
          endTime: game.endTime,
          gameUID: game.gameUID,
          winnerGroup: game.winnerGroup,
          runnerUpGroup: game.runnerUpGroup,
          losersGroup: game.losersGroup,
          amount: userBet.amount, 
          group: userBet.group,   
        };
        response.history.push(gameDetails);
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




const get2ndGame = async (req, res) => { 
  try {
    const currentDate = moment(new Date()).tz("Asia/Kolkata");
    console.log(`get game ${currentDate}`)
    const duration = parseInt(req.params.duration)
    if (!duration) return res.status(400).send({status: false, meessage:"please provide time duration for game"})


    const game = await Game.findOne({ duration: duration, isCompleted: false }).select({ isCompleted: 1, endTime: 1, startTime: 1 ,gameUID:1})
    if (!game) return res.status(404).send({ status: false, message: "Game was ended" })
    
  
  
    return res.status(200).send({status:true,meessage:"success",data:game,currentTime:currentDate})
     

  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching  gameplay' });
  }
}

const get2ndGameHistory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const duration = parseInt(req.params.duration);

    
    const skip = (page - 1) * limit;

    const gamesWithSuccessfulBets = await Game.find({ duration: duration })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return res.status(200).send({ status: true, message: "Success", data: gamesWithSuccessfulBets });
  } catch (error) {
    console.error('Error fetching games with successful bets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const delete2ndGames = async (req, res) => {
  try {
    const deletedGames = await Game.deleteMany({ 'bets': { $size: 0 } });

    if (deletedGames.deletedCount > 0) {
      return res.status(200).json({
        status: true,
        message: `${deletedGames.deletedCount} games with empty bets array deleted successfully.`,
      });
    } else {
      return res.status(404).json({
        status: false,
        message: 'No games with empty bets array found.',
      });
    }
  } catch (error) {
    console.error('Error deleting games:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
    bet2ndController,
    get2ndGame,
    get2ndGameHistory,
    delete2ndGames,
    riseUpUserBettingHistory

}