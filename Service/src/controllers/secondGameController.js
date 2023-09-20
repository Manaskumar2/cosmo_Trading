const userModel = require("../models/userModel");
const Game = require("../models/secondGameModel");
const moment = require("moment");
require("moment-timezone");
const Wallet = require("../models/companywallet");
let walletId = "64c4e1fefff409e9859e8216";
const {generateUniqueNumber2} = require("../util/util")



let groupOptions = ["A", "B", "C"];
// let durationOptions = [2, 0.3, 0.5, 0.7];
let durationOptions = [1];

let downloadResult = [0.7, 0.5, 0.3, 0.2, 0.15, 0.1, 0.08, 0.06, 0.05, 0.04];


async function calculatResult(gameId) {
    const game = await Game.findOne({ _id: gameId }).populate({
        path: "bets.user",
        populate: { path: "downline" },
    });
    if (!game) {
        return;
    }

    const ABets = game.bets.filter((bet) => bet.group == "A");
    const BBets = game.bets.filter((bet) => bet.group == "B");
    const CBets = game.bets.filter((bet) => bet.group == "C");

    const AAmount = ABets.reduce((acc, bet) => acc + bet.amount, 0);
    const BAmount = BBets.reduce((acc, bet) => acc + bet.amount, 0);
    const CAmount = CBets.reduce((acc, bet) => acc + bet.amount, 0);

    let winnerGroup = null;
    let runnerUpGroup = null;
    let losersGroup = null;

    // Determine the winner and runner-up groups based on total bet amounts
    if (AAmount > BAmount && AAmount > CAmount) {
        winnerGroup = "A";
        if (BAmount > CAmount) {
            runnerUpGroup = "B";
            losersGroup = "C";
        } else {
            runnerUpGroup = "C";
            losersGroup = "B";
        }
    } else if (BAmount > AAmount && BAmount > CAmount) {
        winnerGroup = "B";
        if (AAmount > CAmount) {
            runnerUpGroup = "A";
            losersGroup = "C";
        } else {
            runnerUpGroup = "C";
            losersGroup = "A";
        }
    } else if (CAmount > AAmount && CAmount > BAmount) {
        winnerGroup = "C";
        if (AAmount > BAmount) {
            runnerUpGroup = "A";
            losersGroup = "B";
        } else {
            runnerUpGroup = "B";
            losersGroup = "A";
        }
    }

   
    game.winnerGroup = winnerGroup;
    game.runnerUpGroup = runnerUpGroup;
    game.losersGroup = losersGroup;

    await game.save();


    let runners = [
        {

            amount: AAmount,
            bets: ABets
        },
        {

            amount: BAmount,
            bets: BBets
        },
        {

            amount: CAmount,
            bets: CBets
        }
    ]
    runners = runners.sort((a, b) => {
        return b.amount - a.amount 
    })

    if (AAmount != BAmount && BAmount != CAmount && CAmount != 0) {

        let winner = runners[2]
        let runnerUp = runners[1]
        let losers = runners[0]

    } else if (isOnlyTwoEqualAndNotZero(runners)) {

        let { winner, runnerUp, losers } = findResultOfTwoEqualUsers(runners)


    } else if (AAmount == BAmount && BAmount == CAmount && AAmount != 0) {
        runners = runners.sort((a, b) => {
            return b.user.length - a.user.length
        })
        let { winner, runnerUp, losers } = findResultOfThreeEqualUsers(runners)

    } else if (runners[2].amount == 0 && runners[1].amount != 0) {
        let { winner, losers } = findResultOfOneZeroUsers(runners)

    } else if (runners[2].amount == 0 && runners[1].amount == 0 && runners[0].amount != 0) {

        let winner = runners[0].amount
    }

    // } else if (runners[2].amount == 0 && runners[1].amount == 0 && runners[0].amount == 0) {

    // }
     let winner = runners[2]
        let runnerUp = runners[1]
    let losers = runners[0]
    
        if (winner && runnerUp && losers) {
        if (game.bets.length === 3) {
            
            await distributeComissionToThreeUsers(winner, runnerUp, losers, game);
        } else if (game.bets.length === 2) {
            
            await distributeComissionToTWoUsers(winner, losers, game);
        } else if (game.bets.length === 1) {
            await distributeComissionToOneUser(winner, game);
        }
    }
 
}

async function distributeComissionToThreeUsers(winner, runnerUp, losers, game) {

    let totalAmount = winner.amount + runnerUp.amount + losers.amount

    let directCompanyProfit = (totalAmount * 0.97) * 0.05;
    let remainingLosersAmount = (losers.amount * 0.97) - directCompanyProfit

    totalAmount = totalAmount - directCompanyProfit

    let winnerRatio = (remainingLosersAmount * 0.70) / (winner.amount * 0.97)
    let runnerUpRatio = (remainingLosersAmount * 0.30) / (runnerUp.amount * 0.97)

    for (let i = 0; i < winner.bets.length; i++) {
        let winAmount = roundDown(winner.bets[i].amount * 0.97 + (winner.bets[i].amount * 0.97 * winnerRatio), 2)
        totalAmount = totalAmount - winAmount
        await userModel.updateOne(
            { _id: winner.bets[i].user._id },
            { walletAmount: winner.bets[i].user.walletAmount + winAmount },
            {winningAmount: bet.user.winningAmount + winAmount}
        );
    }

    for (let i = 0; i < runnerUp.bets.length; i++) {
        let winAmount = roundDown(runnerUp.bets[i].amount * 0.97 + (runnerUp.bets[i].amount * 0.97 * runnerUpRatio), 2)
        totalAmount = totalAmount - winAmount
        await userModel.updateOne(
            { _id: runnerUp.bets[i].user._id },
            { walletAmount: runnerUp.bets[i].user.walletAmount + winAmount },
            {winningAmount: bet.user.winningAmount + winAmount}
        );
    }

    //distributing premium users their money
    // for (let i = 0; i < game.bets.length; i++) {
    //     if (game.bets[i].user.isPremiumUser) {
    //         let winAmount = roundDown((game.bets[i].amount * 0.5), 2)
    //         totalAmount = totalAmount - winAmount
    //         await userModel.updateOne(
    //             { _id: game.bets[i].user._id },
    //             { walletAmount: game.bets[i].user.walletAmount + winAmount },
    //             {winningAmount: bet.user.winningAmount + winAmount}
    //         );
    //     }
    // }

    let distributedAmount = await distributeComissionToAll(game);
    totalAmount = totalAmount - distributedAmount
    const wallet = await Wallet.findOne({ _id: walletId });
    wallet.amount = wallet.amount + totalAmount;
    wallet.actions.push({
        actions: "+",
        date: new Date(),
        amount: totalAmount,
        wonFrom: "betting",
        source: game._id,
    });
    await wallet.save();


}

async function distributeComissionToTWoUsers(winner, losers, game) {

    let totalAmount = winner.amount + losers.amount;
    let distributableAmount = losers.amount * 0.70

    let winnerRatio = distributableAmount / winner.amount


    for (let i = 0; i < winner.bets.length; i++) {
        let winAmount = roundDown(winner.bets[i].amount * 0.97 + (winner.bets[i].amount * 0.97 * winnerRatio), 2)
        totalAmount = totalAmount - winAmount
        await userModel.updateOne(
            { _id: winner.bets[i].user._id },
            { walletAmount: winner.bets[i].user.walletAmount + winAmount },
            {winningAmount: bet.user.winningAmount + winAmount}
        );
    }

    // let subscriptionRatio = (losers.amount * 0.03) / (winner.amount + losers.amount)
    // //distributing premium users their money
    // for (let i = 0; i < game.bets.length; i++) {
    //     if (game.bets[i].user.isPremiumUser) {
    //         let winAmount = roundDown((game.bets[i].amount * subscriptionRatio), 2)
    //         totalAmount = totalAmount - winAmount
    //         await userModel.updateOne(
    //             { _id: game.bets[i].user._id },
    //             { walletAmount: game.bets[i].user.walletAmount + winAmount },
    //             {winningAmount: bet.user.winningAmount + winAmount}
    //         );
    //     }
    // }

    let distributedAmount = await distributeComissionToAll(game);
    totalAmount = totalAmount - distributedAmount
    const wallet = await Wallet.findOne({ _id: walletId });
    wallet.amount = wallet.amount + totalAmount;
    wallet.actions.push({
        actions: "+",
        date: new Date(),
        amount: totalAmount,
        wonFrom: "betting",
        source: game._id,
    });
    await wallet.save();

}

async function distributeComissionToOneUser(winner, game) {

    let totalAmount = winner.amount

    for (let i = 0; i < winner.bets.length; i++) {
        let winAmount = roundDown(winner.bets[i].amount * 0.70, 2)
        totalAmount = totalAmount - winAmount
        await userModel.updateOne(
            { _id: winner.bets[i].user._id },
            { walletAmount: winner.bets[i].user.walletAmount + winAmount },
            {winningAmount: bet.user.winningAmount + winAmount}
        );
    }


     //distributing premium users their money
    //  for (let i = 0; i < game.bets.length; i++) {
    //     if (game.bets[i].user.isPremiumUser) {
    //         let winAmount = roundDown((game.bets[i].amount * 0.5), 2)
    //         totalAmount = totalAmount - winAmount
    //         await userModel.updateOne(
    //             { _id: game.bets[i].user._id },
    //             { walletAmount: game.bets[i].user.walletAmount + winAmount },
    //             {winningAmount: bet.user.winningAmount + winAmount}
    //         );
    //     }
    // }

    let distributedAmount = await distributeComissionToAll(game);
    totalAmount = totalAmount - distributedAmount
    const wallet = await Wallet.findOne({ _id: walletId });
    wallet.amount = wallet.amount + totalAmount;
    wallet.actions.push({
        actions: "+",
        date: new Date(),
        amount: totalAmount,
        wonFrom: "betting",
        source: game._id,
    });
    await wallet.save();
}

function isOnlyTwoEqualAndNotZero(runners) {
    let a = runners[0].amount == runners[1].amount && runners[1].amount != runners[2].amount && runners[2].amount != 0 && runners[0].amount != 0
    let b = runners[1].amount == runners[2].amount && runners[1].amount != runners[0].amount && runners[0].amount != 0 && runners[1].amount != 0
    return a && b
}

function findResultOfOneZeroUsers(runners) {
    let winner, losers;
    if (runners[1].amount != runners[0].amount) {
        winner = runners[1].amount < runners[0].amount ? runners[1] : runners[0]
        losers = runners[1].amount > runners[0].amount ? runners[1] : runners[0]
    } else if (runners[1].user.length != runners[0].user.length) {
        winner = runners[1].user.length > runners[0].user.length ? runners[1] : runners[0]
        losers = runners[1].user.length < runners[0].user.length ? runners[1] : runners[0]
    } else {
        let random = parseInt(Math.random() * 100000)
        winner = random % 2 == 0 ? runners[1] : runners[0]
        losers = random % 2 != 0 ? runners[1] : runners[0]
    }
    return {
        winner,
        losers
    }
}

function findResultOfThreeEqualUsers(runners) {
    let winner, runnerUp, losers;

    if (runners[1].user.length != runners[2].user.length && runners[0].user.length != runners[1].user.length) {
        winner = runners[0]
        runnerUp = runners[1]
        losers = runners[2]
    } else if (runners[0].user.length == runners[1].user.length && runners[1].user.length != runners[2].user.length) {
        let random = parseInt(Math.random() * 10000)
        winner = random % 2 == 0 ? runners[0] : runners[1]
        runnerUp = random % 2 != 0 ? runners[0] : runners[1]
        losers = runners[2]
    } else if (runners[1].user.length == runners[2].user.length && runners[0].user.length != runners[1].user.length) {
        winner = runners[0]
        let random = parseInt(Math.random() * 10000)
        runnerUp = random % 2 == 0 ? runners[1] : runners[2]
        losers = random % 2 != 0 ? runners[1] : runners[2]
    } else {
        let newRunners = shuffleArray(runners)
        winner = newRunners[0]
        runnerUp = newRunners[1]
        losers = newRunners[2]
    }
    return {
        winner, runnerUp, losers
    }
}

//need to understand
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap the elements
    }
    return array;
}

function  findResultOfTwoEqualUsers(runners) {

    let winner = {
        user: [],
        bets: []
    }

    let runnerUp = {
        user: [],
        bets: []
    }
    let losers = {
        user: [],
        bets: []
    }

    if (runners[0].amount == runners[1].amount) {
        winner = runners[2]
        if (runners[0].user.length != runners[1].user.length) {
            runnerUp = runners[0].user.length > runners[1].user.length ? runners[0] : runners[1]
            losers = runners[0].user.length < runners[1].user.length ? runners[0] : runners[1]
        } else {
            let random = parseInt(Math.random() * 100000)
            runnerUp = random % 2 == 0 ? runners[0] : runners[1]
            losers = random % 2 != 0 ? runners[0] : runners[1]
        }
    } else if (runners[1].amount == runners[2].amount) {
        if (runners[1].user.length != runners[2].user.length) {
            winner = runners[1].user.length > runners[2].user.length ? runners[1] : runners[2]
            runnerUp = runners[1].user.length < runners[2].user.length ? runners[1] : runners[2]
        } else {
            let random = parseInt(Math.random() * 100000)
            winner = random % 2 == 0 ? runners[1] : runners[2]
            runnerUp = random % 2 != 0 ? runners[1] : runners[2]
        }
    }
    return {
        winner, runnerUp, losers
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

            let dAmount = roundDown(amount * (downloadResult[i] / 100), 2);
            let newWalletAmount = parentUser.walletAmount + dAmount;
            distributedAmount += dAmount;
            await userModel.updateOne(
                { _id: parentUser._id },
                {
                    walletAmount: newWalletAmount,
                    commissionAmount:newWalletAmount
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
            calculatResult(game._id);
            await game.save();
            await Game.create({
                duration: duration,
                startTime: moment(new Date()).tz("Asia/Kolkata"),
                endTime: moment(new Date()).tz("Asia/Kolkata").add(duration, "m"),
                gameUID: await generateUniqueNumber2()
                
            });
            setTimeout(() => {
                startAndCheckGame(duration)
            }, duration * 60 * 1000)
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

durationOptions.forEach((value) => {
    startAndCheckGame(value)
})

const bet2ndController = async (req, res) => {
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

    const history = [];


    for (const game of games) {
      const userBet = game.bets.find((bet) => bet.user.toString() === userId);

      if (!userBet) {
        
        continue;
      }

      const startTime = moment(game.startTime);
      const endTime = moment(game.endTime);
      const duration = moment.duration(endTime.diff(startTime)).asMinutes();

     
      if (userBet.group === 'A' && game.winnerGroup === 'A') {
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

    
      if (userBet.group === 'B' && game.winnerGroup === 'B') {
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
        if (userBet.group === 'C' && game.winnerGroup === 'C') {
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

     
      if (userBet.group === 'A' && game.winnerGroup === 'B') {
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

    
      if (userBet.group === 'B' && game.winnerGroup === 'A') {
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