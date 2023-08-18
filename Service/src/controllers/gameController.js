const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const Game = require("../models/gameModel");
const cron = require("node-cron");
const moment = require("moment");
const {generateUniqueNumber} = require("../util/util")
require("moment-timezone");
const Wallet = require("../models/companywallet");
let walletId = "64c4e1fefff409e9859e8216";

let groupOptions = ["small", "big"];
let durationOptions = [1,3, 5,10];
// let durationOptions = [1];

let downloadResult = [0.7, 0.5, 0.3, 0.2, 0.15, 0.1, 0.08, 0.06, 0.05, 0.04];

async function calculatResult(gameId) {
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

    if (winnerGroup == "small") {
      smallUsers.forEach(async (bet) => {
        let winAmount = roundDown(bet.amount * 1.94, 2);
        totalAmount = totalAmount - winAmount;
        await userModel.updateOne(
          { _id: bet.user._id },
          { walletAmount: bet.user.walletAmount + winAmount }
        );
      });
    } else if (winnerGroup == "big") {
      bigUsers.forEach(async (bet) => {
        let winAmount = roundDown(bet.amount * 1.94, 2);
        totalAmount = totalAmount - winAmount;
        await userModel.updateOne(
          { _id: bet.user._id },
          { walletAmount: bet.user.walletAmount + winAmount }
        );
      });
    }
    game.winner = winnerGroup.toUpperCase()
    await game.save();

    let distributedAmount = await distributeComissionToAll(game);
    let compnayFund = totalAmount - distributedAmount;
    const wallet = await Wallet.findOne({ _id: walletId });
    wallet.amount = wallet.amount + compnayFund;
    wallet.actions.push({
      actions: "+",
      date: new Date(),
      amount: compnayFund,
      wonFrom: "betting",
      source: game._id,
    });
    await wallet.save();
    console.log("remaining money is ", totalAmount - distributedAmount);
  } else if (bigAmount > 0 && smallAmount > 0 && bigAmount == smallAmount) {
    let winnerGroup = "small";
    let totalAmount = bigAmount + smallAmount;
    if (bigUsers.length - smallUsers.length > 0) {
      winnerGroup = "big";
    } else if (bigUsers.length == smallUsers.length) {
      winnerGroup = parseInt(Math.random() * 10000) % 2 == 0 ? "small" : "big";
    }

    if (winnerGroup == "small") {
      smallUsers.forEach(async (bet) => {
        let winAmount = roundDown(bet.amount * 1.94, 2);
        totalAmount = totalAmount - winAmount;
        await userModel.updateOne(
          { _id: bet.user._id },
          { walletAmount: bet.user.walletAmount + winAmount }
        );
      });
    } else if (winnerGroup == "big") {
      bigUsers.forEach(async (bet) => {
        let winAmount = roundDown(bet.amount * 1.94, 2);
        totalAmount = totalAmount - winAmount;
        await userModel.updateOne(
          { _id: bet.user._id },
          { walletAmount: bet.user.walletAmount + winAmount }
        );
      });
    }

    let distributedAmount = await distributeComissionToAll(game);
    let compnayFund = totalAmount - distributedAmount;
    const wallet = await Wallet.findOne({ _id: walletId });
    wallet.amount = wallet.amount + compnayFund;
    wallet.actions.push({
      actions: "+",
      date: new Date(),
      amount: compnayFund,
      wonFrom: "betting",
      source: game._id,
    });
    await wallet.save();
    console.log("remaining money is ", totalAmount - distributedAmount);
  }  else if (bigAmount == 0 || smallAmount == 0) {
  let totalAmount = smallAmount + bigAmount;
  for (const bet of game.bets) {
    let winAmount = roundDown(bet.amount * 0.70, 2);
    totalAmount -= winAmount;
    await userModel.updateOne(
      { _id: bet.user._id },
      { $inc: { walletAmount: winAmount } }
    );
  }
  let distributedAmount = await distributeComissionToAll(game);
  let compnayFund = totalAmount - distributedAmount;
  const wallet = await Wallet.findOne({ _id: walletId });
  wallet.amount += compnayFund;
  wallet.actions.push({
    actions: "+",
    date: new Date(),
    amount: compnayFund,
    wonFrom: "betting",
    source: game._id,
  });
  await wallet.save();
  console.log("remaining money is ", totalAmount - distributedAmount);
}
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

      let dAmount = roundDown(amount * 0.97 * (downloadResult[i] / 100), 2);
      let newWalletAmount = parentUser.walletAmount + dAmount;
      distributedAmount += dAmount;
      await userModel.updateOne(
        { _id: parentUser._id },
        { walletAmount: newWalletAmount }
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

calculatResult("64c32e7a488a94ffca2bdd2c");

const startAndCheckGame = async (duration) => {
  const currentDate = moment(new Date()).tz("Asia/Kolkata");
  const game = await Game.findOne({ isCompleted: false, duration: duration });

  if (game) {
    if (game.endTime.unix() - currentDate.unix() <= 0) {
      game.isCompleted = true;
      calculatResult(game._id);
      await game.save();
      await Game.create({
        duration: duration,
        startTime: moment(new Date()).tz("Asia/Kolkata"),
        endTime: moment(new Date()).tz("Asia/Kolkata").add(duration, "m"),
        gameUID: await generateUniqueNumber()
      });
      // setTimeout(() => {
      //     startAndCheckGame(duration)
      // }, duration * 60 * 1000)
    } else {
      let currentDate = moment(new Date()).tz("Asia/Kolkata");
      //   setTimeout(() => {
      //     startAndCheckGame(duration);
      //   }, (game.endTime.unix() - currentDate.unix()) * 1000);
    }
  } else {
    await Game.create({
      duration: duration,
      startTime: moment(new Date()).tz("Asia/Kolkata"),
      endTime: moment(new Date()).tz("Asia/Kolkata").add(duration, "m"),
      gameUID: await generateUniqueNumber()
    });
    // setTimeout(() => {
    //   startAndCheckGame(duration);
    // }, duration * 60 * 1000);
  }
};

// durationOptions.forEach((value) => {
//     startAndCheckGame(value)
// })

const betController = async (req, res) => {
  try {
    const { amount, group, duration } = req.body;

    if (
      !amount ||
      !group ||
      !duration ||
      isNaN(duration) ||
      isNaN(amount) ||
      !groupOptions.includes(group) ||
      !durationOptions.includes(duration)
    ) {
      return res
        .status(400)
        .json({ status: false, message: "Missing parameters" });
    }

    const user = await userModel.findById(req.decodedToken.userId);
    const game = await Game.findOne({ duration, isCompleted: false });

    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    if (!game) {
      return res.status(404).json({ status: false, message: "Game not found" });
    }

    const currentDate = moment(new Date()).tz("Asia/Kolkata");

    if (game.endTime.unix() - currentDate.unix() < 15) {
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
    game.bets.push({ user: user._id, amount, group });

    await game.save();
    await userModel.updateOne(
      { _id: user._id },
      { walletAmount: walletAmount }
    );

    res.status(201).json({ status: true, message: "Bet placed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while placing the bet" });
  }
};


const growUpUserBettingHistroy = async (req, res) => {
   try {
     const userId = req.params.userId;
      const page = parseInt(req.query.page) || 1;
     const limit = parseInt(req.query.limit) || 10;
     


     const games = await Game.find({ 'bets.user': userId })
       .sort({ createdAt: -1 })
       .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    const history = games.map(game => {
      const userBet = game.bets.find(bet => bet.user.toString() === userId);

      if (!userBet) {
        return res.status(404).send({status:false,message:"you are not  beeting the game yet"})
      }

      const startTime = moment(game.startTime);
      const endTime = moment(game.endTime);
      const duration = moment.duration(endTime.diff(startTime)).asMinutes();

      return {
        gameId: game._id,
        startTime: startTime.format(),
        endTime: endTime.format(),
        duration: duration,
        amount: userBet.amount,
        group: userBet.group
      };
    }).filter(entry => entry !== null);
    const count =await Game.countDocuments({ 'bets.user': userId })

     res.status(200).json({
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      // totalGames: gamesCount,
      history: history
    });
  } catch (error) {
    console.error('Error fetching user gameplay history:', error);
    res.status(500).json({ error: 'An error occurred while fetching user gameplay history' });
  }

}

const getGame = async (req, res) => { 
  try {
    const duration = parseInt(req.params.duration)
    console.log(duration)
    if (!duration) return res.status(400).send({status: false, meessage:"please provide time duration for game"})


    const game = await Game.findOne({ duration: duration, isCompleted: false }).select({ isCompleted: 1, endTime: 1, startTime: 1 ,gameUID:1})
    if(!game) return res.status(404).send({status:false,message:"Game was ended"})
  
    return res.status(200).send({status:true,meessage:"success",data:game})
     

  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching  gameplay' });
  }
}

const getGameHistory = async (req, res) => { 
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const gamesWithSuccessfulBets = await Game.aggregate([
      {
        $match: {
          'bets.amount': { $gt: 0 },
        },
      },
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $skip: skip,
      },
      {
        $limit: limit,
      },
      {
        $project: {
          _id: 0,
          gameUID: 1,
          winner: 1,
        },
      },
    ]);

   return res.status(200).send({status:true, message:"Success",data:gamesWithSuccessfulBets});
  } catch (error) {
    console.error('Error fetching games with successful bets:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {
  betController,
  growUpUserBettingHistroy,
  getGame,
  getGameHistory

};

