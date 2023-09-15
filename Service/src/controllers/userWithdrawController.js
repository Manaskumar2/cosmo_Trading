const userModel = require('../models/userModel');
const withdrawlModel = require('../models/withdrawlModel');
const withdrawModel = require('../models/withdrawlModel')
const rechargeModel = require('../models/rechargeModel');

const mongoose = require('mongoose');




const withdrawrequest = async (req, res) => {

    try {
        const { withdrawAmount } = req.body;
        const userId = req.decodedToken.userId
       

        if (!userId) return res.status(403).send({ status: false, message: "please login" })
        if (!withdrawAmount) return res.status(400).send({ status: false, message: "please enter amount" })
      if (withdrawAmount < 500) return res.status(400).send({ status: false, message: "can not withdraw bellow 500rs" })
      
      const user = await userModel.findOne({ userId: userId })
      const totalwithdraw= user.winningAmount+user.commissionAmount
      if (totalwithdraw< withdrawAmount) return res.status(400).send({ status: false, message: "insufficient funds" })
      if (user.rechargeAmount != 0) return res.status(400).send({ status: false, message: "you  need to be bet " + user.rechargeAmount + " for withdraw " })
      
      if (user.winningAmount > withdrawModel) {
        user.winningAmount -= withdrawAmount
        user.walletAmount -= withdrawAmount
        user.save()
      }
      else if (user.winningAmount < withdrawAmount) {
        const remainingAmount = withdrawModel - user.winningAmount
        user.commissionAmount -= remainingAmount
        user.walletAmount -= withdrawAmount
        user.save()
      }
        await withdrawlModel.create({ withdrawAmount: withdrawAmount, userId: userId, status: "pending" })
        return res.status(200).send({ status: false, message: "waiting for payment confirmation" })
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

const getWithdrawRequest = async (req, res) => {
    try {
        const pendingWithdrawRequests = await withdrawModel.find({ status: "pending" });
        return res.status(200).send({ status: true, data: pendingWithdrawRequests });
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message });
    }
}

const confirmRequest = async (req, res) => {
    try {
        const requestId = req.params.requestId;
        const { newStatus } = req.body;

        if (!newStatus || !["confirmed", "cancelled"].includes(newStatus)) {
            return res.status(400).send({ status: false, message: "Invalid status provided" });
        }

        const request = await withdrawModel.findById(requestId);
        if (!request) {
            return res.status(404).send({ status: false, message: "Withdraw request not found" });
        }
        if (request.status !== "pending") {
            return res.status(400).send({ status: false, message: "Withdraw request is not pending" });
        }

        const user = await userModel.findOne({ _id: request.userId });

        if (newStatus === "confirmed") {

            request.status = newStatus;
            await request.save();

            return res.status(200).send({ status: true, message: "Withdraw request marked as success" });
        } else if (newStatus === "cancelled") {
            user.winningAmount += request.withdrawAmount;
            user.walletAmount += request.withdrawAmount;

            await user.save();
            request.status = newStatus;
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
      console.log(userId);
      
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