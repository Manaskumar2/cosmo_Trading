const userModel = require("../models/userModel");
const commissionModel = require("../models/commissionModel");

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
        commissionType: "FRANCHISE",
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

module.exports = { franchiseCommissions };
