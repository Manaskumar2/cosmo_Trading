const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const Game = require("../models/gameModel");
const cron = require("node-cron");
const moment = require("moment");
const {generateUniqueNumber} = require("../util/util")
require("moment-timezone");
const Wallet = require("../models/companywallet");
let walletId = "650daaa42b2122794a524f24";

let groupOptions = ["small", "big"];
let durationOptions = [1];
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
    game.winnerGroup = winnerGroup.toUpperCase()
    await game.save()

    if (winnerGroup == "small") {
      ;
      smallUsers.forEach(async (bet) => {
        let winAmount = roundDown(bet.amount * 1.94, 2);
        totalAmount = totalAmount - winAmount;
        await userModel.updateOne(
          { _id: bet.user._id },
          {
            walletAmount: bet.user.walletAmount + winAmount,
            winningAmount: bet.user.winningAmount + winAmount
          }
        );
      });
      
    } else if (winnerGroup == "big") {
      bigUsers.forEach(async (bet) => {
        let winAmount = roundDown(bet.amount * 1.94, 2);
        totalAmount = totalAmount - winAmount;
        await userModel.updateOne(
          { _id: bet.user._id },
          {
            walletAmount: bet.user.walletAmount + winAmount,
            winningAmount:bet.user.winningAmount+winAmount
          }
        );
      });
    }
    

    let distributedAmount = await distributeComissionToAll(game);
    let compnayFund = totalAmount - distributedAmount;
    const wallet = await Wallet.findOne({ _id: walletId });
    wallet.amount = wallet.amount + compnayFund;
    // wallet.actions.push({
    //   actions: "+",
    //   date: new Date(),
    //   amount: compnayFund,
    //   wonFrom: "betting",
    //   source: game._id,
    // });
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
    await game.save();

    if (winnerGroup == "small") {
  
      smallUsers.forEach(async (bet) => {
        let winAmount = roundDown(bet.amount * 1.94, 2);
        totalAmount = totalAmount - winAmount;
        await userModel.updateOne(
          { _id: bet.user._id },
          { walletAmount: bet.user.walletAmount + winAmount },
          {winningAmount: bet.user.winningAmount + winAmount}
        );
      });
      
    } else if (winnerGroup == "big") {
      bigUsers.forEach(async (bet) => {
        let winAmount = roundDown(bet.amount * 1.94, 2);
        totalAmount = totalAmount - winAmount;
        await userModel.updateOne(
          { _id: bet.user._id },
          { walletAmount: bet.user.walletAmount + winAmount },
          {winningAmount: bet.user.winningAmount + winAmount}

        );
      });
    
    }

    let distributedAmount = await distributeComissionToAll(game);
    let compnayFund = totalAmount - distributedAmount;
    const wallet = await Wallet.findOne({ _id: walletId });
    wallet.amount = wallet.amount + compnayFund;
    // wallet.actions.push({
    //   actions: "+",
    //   date: new Date(),
    //   amount: compnayFund,
    //   wonFrom: "betting",
    //   source: game._id,
    // });
    await wallet.save();
    // console.log("remaining money is ", totalAmount - distributedAmount);
  } else if (bigAmount == 0 || smallAmount == 0) {
    let winnerGroup = "small";
    if (bigAmount > 0) {
      winnerGroup = "big";
    }
    else if (smallAmount > 0) { 
      winnerGroup = "small";
    }
  let totalAmount = smallAmount + bigAmount;
  for (const bet of game.bets) {
    let winAmount = roundDown(bet.amount * 0.70, 2);
    totalAmount -= winAmount;
    await userModel.updateOne(
      { _id: bet.user._id },
       { walletAmount: bet.user.walletAmount + winAmount },
       {winningAmount: bet.user.winningAmount + winAmount}
    );
    }
    
  let distributedAmount = await distributeComissionToAll(game);
    let compnayFund = totalAmount - distributedAmount;
    const totalBettingAmount = bigAmount + smallAmount;
    const wallet = await Wallet.findOne({ _id: walletId });
   
    wallet.amount += compnayFund;
    wallet.totalBettingAmount += totalBettingAmount;

  // wallet.actions.push({
  //   actions: "+",
  //   date: new Date(),
  //   amount: compnayFund,
  //   wonFrom: "betting",
  //   source: game._id,
  // });
    
    const today = new Date();
  if (!moment(wallet.lastUpdatedDate).isSame(today, 'day')) {
  
    wallet.everydayBettingAmount = 0;
    
    wallet.lastUpdatedDate = today;
  }

  wallet.everydayBettingAmount += totalBettingAmount;

    await wallet.save();
    game.winnerGroup = winnerGroup.toUpperCase();
    await game.save();
    
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

// async function distributeComission(user, amount) {
//   let currentUser = user;
//   let distributedAmount = 0;
//   for (let i = 0; i < 10; i++) {
//     if (currentUser.parentReferralCode != null) {
//       let parentUser = await userModel.findOne({
//         referralCode: currentUser.parentReferralCode,
//       });
//       if (!parentUser) {
//         return distributedAmount;
//       }

//       let dAmount = roundDown(amount * 0.97 * (downloadResult[i] / 100), 2);
//       let newWalletAmount = parentUser.walletAmount + dAmount;
//       let newCommisiionAmount = parentUser.commissionAmount+ dAmount;
//       distributedAmount += dAmount;
//       await userModel.updateOne(
//         { _id: parentUser._id },
//         { walletAmount: newWalletAmount },
//         {
//           commissionAmount: newCommisiionAmount
//         }
//       );
//       currentUser = parentUser;
//       if (i == 9) {
//         return distributedAmount;
//       }
//     } else {
//       return distributedAmount;
//     }
//   }
//   return distributedAmount;
// }


async function distributeCommission(user, amount) {
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

calculatResult("64c32e7a488a94ffca2bdd2c");

// const startAndCheckGame = async (duration) => {
//   const currentDate = moment(new Date()).tz("Asia/Kolkata");
//   const game = await Game.findOne({ isCompleted: false, duration: duration });

//   if (game) {
//     if (game.endTime.unix() - currentDate.unix() <= 0) {
//       game.isCompleted = true;
//       calculatResult(game._id);
//       await game.save({
//             duration: duration,
//         startTime: moment(new Date()).tz("Asia/Kolkata"),
//         endTime: moment(new Date()).tz("Asia/Kolkata").add(duration, "m"),
//         gameUID: await generateUniqueNumber()
//       }
//       );
//       await Game.create({
//         duration: duration,
//         startTime: moment(new Date()).tz("Asia/Kolkata"),
//         endTime: moment(new Date()).tz("Asia/Kolkata").add(duration, "m"),
//         gameUID: await generateUniqueNumber()
//       });
//       setTimeout(() => {
//           startAndCheckGame(duration)
//       }, duration * 60 * 1000)
//     } else {
//       let currentDate = moment(new Date()).tz("Asia/Kolkata");
//         setTimeout(() => {
//           startAndCheckGame(duration);
//         }, (game.endTime.unix() - currentDate.unix()) * 1000);
//     }
//   } else {
//     await Game.create({
//       duration: duration,
//       startTime: moment(new Date()).tz("Asia/Kolkata"),
//       endTime: moment(new Date()).tz("Asia/Kolkata").add(duration, "m"),
//       gameUID: await generateUniqueNumber()
//     });
//     setTimeout(() => {
//       startAndCheckGame(duration);
//     }, duration * 60 * 1000);
//   }
// };
const  startAndCheckGame = async (duration) => {
  const currentDate = moment(new Date()).tz("Asia/Kolkata");
  const game = await Game.findOne({ isCompleted: false, duration: duration });

  if (game) {
    if (game.endTime.unix() - currentDate.unix() <= 0) {
      game.isCompleted = true;
      calculatResult(game._id);
      await game.save({
        duration: duration,
        startTime: currentDate, 
        endTime: currentDate.clone().add(duration, "m"), 
        gameUID: await generateUniqueNumber(),

      });
      await Game.create({
        duration: duration,
        startTime: currentDate, 
        endTime: currentDate.clone().add(duration, "m"),
        gameUID: await generateUniqueNumber()
      });
      setTimeout(() => {
        startAndCheckGame(duration)
      }, duration * 60 * 1000)
    } else {
      setTimeout(() => {
        startAndCheckGame(duration);
      }, (game.endTime.unix() - currentDate.unix()) * 1000);
    }
  } else {
    await Game.create({
      duration: duration,
      startTime: currentDate,
      endTime: currentDate.clone().add(duration, "m"), 
      gameUID: await generateUniqueNumber()
    });
    setTimeout(() => {
      startAndCheckGame(duration);
    }, duration * 60 * 1000);
  }
};

durationOptions.forEach((value) => {
    startAndCheckGame(value)
})

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

    //     const hasBet = game.bets.some(bet => bet.user.toString() === user._id.toString());

    // if (hasBet) {
    //   return res.status(400).json({ status: false, message: "User already placed a bet in this game" });
    // }

   
    game.bets.push({ user: user._id, amount, group });
 

     await game.save();

     let walletAmount = user.walletAmount - amount;
    let bettingAmount = user.bettingAmount + amount;
    let rechargeAmount = user.rechargeAmount-amount;
    await userModel.updateOne(
      { _id: user._id },
      {
        walletAmount: walletAmount,
        bettingAmount: bettingAmount,
        rechargeAmount:rechargeAmount
      }
    );

    res.status(201).json({ status: true, message: "Bet placed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while placing the bet" });
  }
};


// const growUpUserBettingHistroy = async (req, res) => {
//    try {
//      const userId = req.params.userId;
//       const page = parseInt(req.query.page) || 1;
//      const limit = parseInt(req.query.limit) || 10;
     


//      const games = await Game.find({ 'bets.user': userId })
//        .sort({ createdAt: -1 })
//        .skip((page - 1) * limit)
//       .limit(limit)
//       .exec();

//     const history = games.map(game => {
//       const userBet = game.bets.find(bet => bet.user.toString() === userId);

//       if (!userBet) {
//         return res.status(404).send({status:false,message:"you are not  beeting the game yet"})
//       }

//       const startTime = moment(game.startTime);
//       const endTime = moment(game.endTime);
//       const duration = moment.duration(endTime.diff(startTime)).asMinutes();

//       return {
//         gameId: game._id,
//         startTime: startTime.format(),
//         endTime: endTime.format(),
//         duration: duration,
//         amount: userBet.amount,
//         group: userBet.group
//       };
//     }).filter(entry => entry !== null);
//     const count =await Game.countDocuments({ 'bets.user': userId })

//      res.status(200).json({
//       currentPage: page,
//       totalPages: Math.ceil(count / limit),
//       // totalGames: gamesCount,
//       history: history
//     });
//   } catch (error) {
//     console.error('Error fetching user gameplay history:', error);
//     res.status(500).json({ error: 'An error occurred while fetching user gameplay history' });
//   }

// }
const growUpUserBettingHistory = async (req, res) => {
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

    const history = [];


    for (const game of games) {
      const userBet = game.bets.find((bet) => bet.user.toString() === userId);
       console.log(userBet)

      if (!userBet) {
        // User did not bet on this game, skip it.
        continue;
      }

      const startTime = moment(game.startTime);
      const endTime = moment(game.endTime);
      const duration = moment.duration(endTime.diff(startTime)).asMinutes();

      // Check if the user's bet was on the "small" group and the "small" group won.
      if (userBet.group === 'small' && game.winnerGroup === 'SMALL') {
        history.push({
          gameId: game.gameUID,
          startTime: startTime.format(),
          endTime: endTime.format(),
          duration: duration,
          amount: userBet.amount,
          group: userBet.group,
          result: 'win',
        });
      }

    
      if (userBet.group === 'big' && game.winnerGroup === 'BIG') {
        history.push({
          gameId: game.gameUID,
          startTime: startTime.format(),
          endTime: endTime.format(),
          duration: duration,
          amount: userBet.amount,
          group: userBet.group,
          result: 'win',
        });
      }

      // Check if the user's bet did not win.
      if (userBet.group === 'small' && game.winnerGroup === 'BIG') {
        history.push({
          gameId: game.gameUID,
          startTime: startTime.format(),
          endTime: endTime.format(),
          duration: duration,
          amount: userBet.amount,
          group: userBet.group,
          result: 'lose', 
        });
      }

      // Check if the user's bet did not win.
      if (userBet.group === 'big' && game.winnerGroup === 'SMALL') {
        history.push({
          gameId: game.gameUID,
          startTime: startTime.format(),
          endTime: endTime.format(),
          duration: duration,
          amount: userBet.amount,
          group: userBet.group,
          result: 'lose', 
        });
      }
    }

    const count = await Game.countDocuments({ 'bets.user': userId });

    res.status(200).json({
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      history: history,
    });
  } catch (error) {
    console.error('Error fetching user gameplay history:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while fetching user gameplay history' });
  }
};


const getGame = async (req, res) => { 
  try {
    const currentDate = moment(new Date()).tz("Asia/Kolkata");
    const duration = parseInt(req.params.duration)
    console.log(duration)
    if (!duration) return res.status(400).send({status: false, meessage:"please provide time duration for game"})


    const game = await Game.findOne({ duration: duration, isCompleted: false }).select({ isCompleted: 1, endTime: 1, startTime: 1 ,gameUID:1})
    if (!game) return res.status(404).send({ status: false, message: "Game was ended" })
    
  
  
    return res.status(200).send({status:true,meessage:"success",data:game,currentTime:currentDate})
     

  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching  gameplay' });
  }
}

const getGameHistory = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const duration = parseInt(req.params.duration);

    
    const skip = (page - 1) * limit;

    const gamesWithSuccessfulBets = await Game.find({ duration: duration,isCompleted:true })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    return res.status(200).send({ status: true, message: "Success", data: gamesWithSuccessfulBets });
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
  betController,
  // growUpUserBettingHistroy,
  growUpUserBettingHistory ,
  getGame,
  getGameHistory,
  deleteGames,
  growUpBetamount

};