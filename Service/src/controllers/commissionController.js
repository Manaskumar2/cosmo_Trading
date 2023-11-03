const userModel = require("../models/userModel");
const commissionModel = require("../models/commissionModel");
const moment = require("moment-timezone")
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const franchiseCommissions = async (req, res) => {
  try {
    const { amount } = req.body;
    const premiumUsers = await userModel.find({ isPremiumUser: true });

    if (premiumUsers.length === 0) {
      return res.status(400).json({ message: "No premium users found" });
    }
    const commissionPerUser = amount / premiumUsers.length;
    const commissionRecords = [];

    for (const user of premiumUsers) {
      user.walletAmount += commissionPerUser;
      user.commissionAmount += commissionPerUser;
      const commissionRecord = new commissionModel({
        date: new Date(),
        amount: commissionPerUser,
        userId: user._id,
        commissionType: "PREMIUM",
      });
      commissionRecords.push(commissionRecord);
    }
    const updatePromises = premiumUsers.map((user) => user.save());
    await Promise.all([
      ...updatePromises,
      ...commissionRecords.map((record) => record.save()),
    ]);
    res.status(200).json({ message: "Commission distributed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getCommissionDetails = async (req, res) => {
  try {
    const userId =  req.decodedToken.userId
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
   
  const skip = (page - 1) * limit;
     const count = await commissionModel.countDocuments({ userId:userId })
    const commissionDetails = await commissionModel.find({ userId:userId })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    
          const response = {
      currentPage: page,
      totalPages: Math.ceil(count / limit),
     commissionDetails
    };

    return res.status(200).send({status:true,message:"success",data:response});

  } catch (error) {
      console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

const commissionAmount = async (req, res) => {
  try {
    const userId = req.params.userId;
    const limit = parseInt(req.query.limit) || 20
    const page = parseInt(req.query.page) || 1
    const skip = (page - 1) * limit


    const todayStart = moment().tz("Asia/Kolkata").startOf("day").toDate();
    const todayEnd = moment().tz("Asia/Kolkata").endOf("day").toDate();

    const commissionDetails = await commissionModel
      .find({ userId })
      .select("amount commissionType date")
      .limit(limit)
      .skip(skip)
      .exec();
    const count = await commissionModel.countDocuments({ userId: userId })
  const commissions = await commissionModel
  .find({ userId })
  .select("amount commissionType date")
    const totalCommissions = {
      totalTodayCommission: 0,
    };

    commissions.reduce((commissions, commission) => {
      commissions[commission.commissionType] = commissions[commission.commissionType] || 0;
      commissions[commission.commissionType] += commission.amount;

      if (commission.date >= todayStart && commission.date <= todayEnd) {
        commissions.totalTodayCommission += commission.amount;
      }

      return commissions;
    }, totalCommissions);

    const overallTotalCommission = totalCommissions.totalTodayCommission + Object.values(totalCommissions).reduce((total, commission) => total + commission, 0);

    res.status(200).send({
      status: true,
      totalTodayCommission: totalCommissions.totalTodayCommission,
      overallTotalCommission,
      totalCommissions,
      commissionDetails,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
    });
  } catch (error) {
    console.error("Error fetching commission information:", error);
    res.status(500).json({ error: "An error occurred while fetching commission information" });
  }
};





const getCommission = async (req, res) => {
  try {
    const userId = req.decodedToken.userId;
    const date = req.query.date;
    const timezone = 'Asia/Kolkata';

    if (date) {
      const formattedDate = moment.tz(date, timezone);

      const startOfDay = formattedDate.startOf('day');
      const endOfDay = formattedDate.endOf('day');

      const totalAmount = await commissionModel.aggregate([
        {
          $match: {
            userId: new ObjectId(userId),
            date: {
              $gte: startOfDay.toDate(),
              $lte: endOfDay.toDate(),
            },
          },
        },
        {
          $group: {
            _id: null,
            totalCommission: { $sum: "$amount" },
          },
        },
      ]);

      return res.status(200).json({ status: true, message: "Successful", totalCommission: totalAmount[0] ? totalAmount[0].totalCommission : 0 });
    } else {
      const endDate = moment.tz(timezone);
      const startDate = moment.tz(timezone).subtract(30, 'days');

      const datewiseTotal = await commissionModel.aggregate([
        {
          $match: {
            userId: new ObjectId(userId),
            createdAt: {
              $gte: startDate.toDate(),
              $lte: endDate.toDate(),
            },
          },
        },
        {
          $group: {
            _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt", timezone } },
            totalAmount: { $sum: "$amount" },
          },
        },
        {
          $match: {
            totalAmount: { $gt: 0 },
          },
        },
        {
          $sort: { _id: -1 },
        },
      ]);

      const datewiseTotalMap = {};
      datewiseTotal.forEach((item) => {
        datewiseTotalMap[item._id] = item.totalAmount;
      });

      return res.status(200).json({ status: true, message: "Successful", datewiseTotal: datewiseTotalMap });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching commissions" });
  }
};





module.exports = { franchiseCommissions ,getCommissionDetails,commissionAmount,getCommission};
