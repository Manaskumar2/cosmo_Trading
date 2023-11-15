const growUp = require("../models/gameModel");
const riseUp = require("../models/secondGameModel");
const BettingHistory = require("../models/battingHistoryModel");
const moment = require("moment-timezone");

const getBetAmounts = async (req, res) => {
  try {
    

  moment.tz.setDefault("Asia/Kolkata");

  const today = moment().startOf("day");


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



const getGameHistoryDateWise = async (req, res) => {
  try {
    const { date, gameType, page = 1, pageSize = 20 } = req.query;

    let startDate, endDate;

    if (date) {
      const specificDate = new Date(date);
      startDate = new Date(specificDate.getFullYear(), specificDate.getMonth(), 1);
      endDate = new Date(specificDate.getFullYear(), specificDate.getMonth() + 1, 0);
    } else {
      const currentDate = new Date();
      startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 5, 1);
      endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    }

    const matchStage = {
      date: {
        $gte: startDate,
        $lte: endDate,
      },
    };

    if (gameType) {
      matchStage.bettingFrom = gameType
    }

    const totalCount = await BettingHistory.countDocuments(matchStage);

    const results = await BettingHistory.aggregate([
      {
        $match: matchStage,
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$date", timezone: "Asia/Kolkata" },
          },
          totalBettingAmount: { $sum: "$amount" },
        },
      },
      {
        $sort: { _id: -1 },
      },
      {
        $skip: (page - 1) * pageSize,
      },
      {
        $limit: parseInt(pageSize),
      },
    ]);

    const totalPages = Math.ceil(totalCount / pageSize);

    return res.status(200).json({ status: true, data: results, totalPages: totalPages });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: error.message });
  }
};



module.exports = { getBetAmounts ,getGameHistoryDateWise};

