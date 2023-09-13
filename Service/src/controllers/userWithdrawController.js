const userModel = require('../models/userModel');
const withdrawlModel = require('../models/withdrawlModel');
const withdrawModel = require('../models/withdrawlModel')




const withdrawrequest = async (req, res) => {

    try {
        const { withdrawAmount } = req.body;
        const userId = req.decodedToken.userId


        if (!userId) return res.status(403).send({ status: false, message: "please login" })
        if (!withdrawAmount) return res.status(400).send({ status: false, message: "please enter amount" })
        if (withdrawAmount < 100) return res.status(400).send({ status: false, message: "can not withdrawbellow 100rs" })


        const user = await userModel.findOne({ userId: userId })
        if (user.winningAmount < withdrawAmount) return res.status(400).send({ status: false, message: "insufficient funds" })

        user.winningAmount -= withdrawAmount
        user.walletAmount -= withdrawAmount
        user.save()
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
module.exports = { withdrawrequest, getWithdrawRequest, confirmRequest }