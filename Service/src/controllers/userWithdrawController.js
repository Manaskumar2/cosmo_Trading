const userModel = require('../models/userModel');
const withdrawlModel = require('../models/withdrawlModel');
const withdrawModel = require('../models/withdrawlModel');
const accountModel =  require("../models/bankDetailsModel")

const withdrawrequest = async (req, res) => {
  try {
    const { withdrawAmount } = req.body;
    const wAmount = parseInt(withdrawAmount);
    const userId = req.decodedToken.userId;
  

    if (!userId) return res.status(403).send({ status: false, message: "Please login" });
    if (!wAmount) return res.status(400).send({ status: false, message: "Please enter amount" });
    if (wAmount < 500) return res.status(400).send({ status: false, message: "Cannot withdraw below 500rs" });

    const user = await userModel.findById({ _id: userId });
    if (user.isPremiumUser) return res.status(400).send({ status: false, message: "You cannot withdraw money! You are a Premium User" });
    const totalWithdraw = user.walletAmount;
    if (totalWithdraw < wAmount) return res.status(400).send({ status: false, message: "Insufficient funds" });
    const checkAccountDetails = await accountModel.findOne({ userId: userId })
    if(!checkAccountDetails) return res.status(401).send({status:false,message:"Please add Bank Account details for withdraw"})

    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const withdrawalCount = await withdrawlModel.countDocuments({ userId: userId, createdAt: { $gte: today } });
    
    if (withdrawalCount >= 3) {
      return res.status(400).send({ status: false, message: "You have already reached the daily withdrawal limit of 3 times" });
    }

    if (user.rechargeAmount !== 0) return res.status(400).send({ status: false, message: "You need to bet " + user.rechargeAmount + " for withdrawal" });

    if (user.walletAmount >= wAmount) {
      user.walletAmount -= wAmount;
      user.save();
    }
    
    await withdrawlModel.create({ withdrawAmount: wAmount, userId: userId, status: "pending" });
    return res.status(200).send({ status: false, message: "Waiting for payment confirmation" });
  } catch (error) {
     console.log(error)
    return res.status(500).send({ status: false, message: error.message });
  }
}


const getWithdrawRequest = async (req, res) => {
  try {
      const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const status = req.query.status

    
    const skip = (page - 1) * limit;
     
        const pendingWithdrawRequests = await withdrawModel.find({ status:status }) .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
        return res.status(200).send({ status: true, data: pendingWithdrawRequests });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const confirmRequest = async (req, res) => {
    try {
        const requestId = req.params.requestId;
        const { newStatus,approvedBy } = req.body;

        if (!newStatus || !["confirmed", "cancelled"].includes(newStatus)) {
            return res.status(400).send({ status: false, message: "Invalid status provided" });
      }
      if (!approvedBy) return res.status(400).send({ status: false, message: "please enter your name to approved" })

        const request = await withdrawModel.findById(requestId);
        if (!request) {
            return res.status(404).json({ error: false, message: 'Bank account not found' })
        }
        if (request.status !== "pending") {
            return res.status(400).json({ status: false, message: "No Pending request remaining ! Wait for Pending Request!" })
        }

        const user = await userModel.findOne({ _id: request.userId });

        if (newStatus === "confirmed") {

          request.status = newStatus;
          request.approvedBy = approvedBy;
            await request.save();

            return res.status(200).send({ status: true, message: "Withdraw request marked as success" });
        } else if (newStatus === "cancelled") {
            user.winningAmount += request.withdrawAmount;
            user.walletAmount += request.withdrawAmount;

            await user.save();
          request.status = newStatus;
          request.approvedBy = approvedBy;
            await request.save();

            return res.status(200).send({ status: true, message: "Withdraw request marked as cancelled, amount refunded" });
        }
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

function getTodayDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const withdrawalHistory = async (req, res) => { 
  try {
      const userId = req.params.userId;
      
      
     const totalWithdraw = await withdrawModel.find({
  userId: userId,
  status: 'confirmed'
     });
      
  let totalWithdrawAmount = 0;

for (const withdrawal of totalWithdraw) {
  totalWithdrawAmount += withdrawal.withdrawAmount;
}
const todayDate = getTodayDate();

const todayConfirmedWithdrawals = await withdrawModel.find({
  userId: userId,
  status: 'confirmed',
  createdAt: {
    $gte: new Date(todayDate + 'T00:00:00Z'),
    $lte: new Date(todayDate + 'T23:59:59Z')
  }
});

let todayTotalWithdrawAmount = 0;

for (const withdrawal of todayConfirmedWithdrawals) {
  todayTotalWithdrawAmount += withdrawal.withdrawAmount;
}


    const withdrawalHistory = await withdrawModel.find({
      userId: userId,
    });


    res.json({
      totalWithdrawAmount,
    todayTotalWithdrawAmount,
      withdrawalHistory
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { withdrawrequest, getWithdrawRequest, confirmRequest,withdrawalHistory }