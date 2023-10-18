const userModel = require("../models/userModel");
const commissionModel = require("../models/commissionModel");
const moment = require("moment-timezone")


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
const commissonAmount = async (req, res) => {
  try {
    const userId = req.params.userId;

   
    const rechargeCommission = await commissionModel
      .find({ userId: userId, commissionType: "RECHARGE" })
      .select("amount");

    const premiumCommission = await commissionModel
      .find({ userId: userId, commissionType: "PREMIUM" })
      .select("amount");

    const agentCommission = await commissionModel
      .find({ userId: userId, commissionType: "AGENT" })
      .select("amount");

    // Calculate today's start and end date
    const istNow = moment().tz("Asia/Kolkata");
    istNow.startOf("day");
    const todayStart = istNow.toDate();
    istNow.endOf("day");
    const todayEnd = istNow.toDate();

    // Find documents for today
    const todayTotalCommission = await commissionModel
      .find({
        userId: userId,
        date: { $gte: todayStart, $lte: todayEnd },
      })
      .select("amount");

    // Calculate total amounts
    const calculateTotal = (commissions) => {
      return commissions.reduce((total, commission) => total + commission.amount, 0);
    };

    res.status(200).send({
      status: true,
      totalRechargeCommission: calculateTotal(rechargeCommission),
      totalPremiumCommission: calculateTotal(premiumCommission),
      totalAgentCommission: calculateTotal(agentCommission),
      todayTotalCommission: calculateTotal(todayTotalCommission),
    });
  } catch (error) {
    console.error("Error fetching commission information:", error);
    res.status(500).json({ error: "An error occurred while fetching commission information" });
  }
};

module.exports = { franchiseCommissions ,getCommissionDetails,commissonAmount};
