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
        
        user.winningAmount - withdrawAmount
        user.walletAmount - withdrawAmount
        user.save()
        await withdrawlModel.create({withdrawAmount: withdrawAmount,userId:userId,status:"pending"})
        return res.status(200).send({ status: false, message: "waiting for payment confirmation" })
    } catch (error) {
        return res.status(500).send({status:false, message:error.message})
    }
}

const getWithdrawRequest = (req, res) => {
    try {
        
    } catch (error) {
       return res.status(500).send({status:false, message:error.message}) 
    }
}
module.exports ={withdrawrequest,getWithdrawRequest}