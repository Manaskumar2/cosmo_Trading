const growUp = require("../models/gameModel");
const riseUp = require("../models/secondGameModel");
const moment = require("moment-timezone");

const getBetAmounts = async (req, res) => {
  try {
    

  moment.tz.setDefault("Asia/Kolkata");

  const today = moment().startOf("day");

  // Get the total bet amounts for each game
  const growUpResult = await growUp.aggregate([
    {
      $match: { isCompleted: false },
    },
    {
      $unwind: "$bets",
    },
    {
      $group: {
        _id: "$bets.group",
        totalBetAmount: { $sum: "$bets.amount" },
      },
    },
  ]);

  const riseUpResult = await riseUp.aggregate([
    {
      $match: { isCompleted: false },
    },
    {
      $unwind: "$bets",
    },
    {
      $group: {
        _id: "$bets.group",
        totalBetAmount: { $sum: "$bets.amount" },
      },
    },
  ]);

  // Get today's bet amounts for each game
  const growUpTodayResult = await growUp.aggregate([
    {
      $match: {
        isCompleted: true,
        startTime: { $gte: today.toDate() },
      },
    },
    {
      $unwind: "$bets",
    },
    {
      $group: {
        _id: "$bets.group",
        todayBetAmount: { $sum: "$bets.amount" },
      },
    },
  ]);

  const riseUpTodayResult = await riseUp.aggregate([
    {
      $match: {
        isCompleted: true,
        startTime: { $gte: today.toDate() },
      },
    },
    {
      $unwind: "$bets",
    },
    {
      $group: {
        _id: "$bets.group",
        todayBetAmount: { $sum: "$bets.amount" },
      },
    },
  ]);

  // Convert the results to objects
  const growUpTotalBetAmounts = {};
  growUpResult.forEach((group) => {
    growUpTotalBetAmounts[group._id] = group.totalBetAmount;
  });

  const growUpTodayBetAmounts = {};
  growUpTodayResult.forEach((group) => {
    growUpTodayBetAmounts[group._id] = group.todayBetAmount || 0;
  });

  const riseUpTotalBetAmounts = {};
  riseUpResult.forEach((group) => {
    riseUpTotalBetAmounts[group._id] = group.totalBetAmount;
  });

  const riseUpTodayBetAmounts = {};
  riseUpTodayResult.forEach((group) => {
    riseUpTodayBetAmounts[group._id] = group.todayBetAmount || 0;
  });

 

let totalGrowUp = 0;

for (const key in growUpTodayBetAmounts) {
  if (growUpTodayBetAmounts.hasOwnProperty(key)) {
    totalGrowUp += growUpTodayBetAmounts[key];
  }
    }


    let totalRiseUp = 0;

for (const key in riseUpTodayBetAmounts) {
  if (riseUpTodayBetAmounts.hasOwnProperty(key)) {
    totalRiseUp += riseUpTodayBetAmounts[key];
  }
    }
const overralBetAmounts =totalGrowUp+totalRiseUp
    
  return res.status(200).send({
    status: true,
    message: "Success",
    data: {
      growUp: {
        totalBetAmounts: growUpTotalBetAmounts,
        todayBetAmounts: growUpTodayBetAmounts,
      },
      riseUp: {
        totalBetAmounts: riseUpTotalBetAmounts,
        todayBetAmounts: riseUpTodayBetAmounts,
      
        },
      overralBetAmounts
      
    },
  });
      } catch (error) {
    console.log(error);
  }
};

module.exports = { getBetAmounts };

