const rechargeModel = require('../models/rechargeModel')
const validation = require("../validations/validation")
const userModel = require('../models/userModel')

const createRecharge = async (req, res) => {
  try {

    const { upiId, upiReferenceNo, amount, qrCode } = req.body;
    const userId = req.decodedToken.userId
    const rechargeAmount = parseInt(amount)

    if (!upiReferenceNo) return res.status(404).send({ status: false, messsage: "please enter your sucessfull payment reference No" })
    if(!validation.isTransactionId(upiReferenceNo)) return res.status(404).send({ status: false,message:"please enter valid transaction number" })

    const checkPayment = await rechargeModel.findOne({ upiReferenceNo: upiReferenceNo })
    if (checkPayment) return res.status(400).send({ status: true, message: "reapted transaction Number" })


    const paymentRequest = await rechargeModel.create({
      userId: userId,
      upiReferenceNo: upiReferenceNo,
      amount: rechargeAmount,
      qrCode: qrCode,
      upiId: upiId,
    });

    res.status(201).send({status:true,message:"your request was sent please wait for payment confirmation"});
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
}

const getPaymentRequest = async (req, res) => {
  try {
    const paymentId = req.query.paymentId;
    const status = req.query.status;
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;


    
    const skip = (page - 1) * limit;


    if (paymentId) {
      const getPayentDetails = await rechargeModel.findById(paymentId)
      return res.status(200).json(getPayentDetails)
    }
    else {
      const paymentsRequest = await rechargeModel.find({ status:status }) .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

      
      res.status(200).json( paymentsRequest);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const updatePaymentRequest = async (req, res) => {
  try {
    const paymentId  = req.params.paymentId;
    console.log(paymentId)
    const { status } = req.body;

    const manualPayment = await rechargeModel.findById(paymentId);

    if (!manualPayment) {
      return res.status(404).json({ error: 'Manual payment request not found' });
    }
    if(manualPayment.status==='confirmed') return res.status(200).send({status:false,message:"payment is already confirmed"})

    if (status === 'confirm') {
      manualPayment.status = 'confirmed';


      const user = await userModel.findById(manualPayment.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      user.walletAmount += manualPayment.amount;
      user.rechargeAmount+= manualPayment.amount;
      await user.save();
    } else if (status === 'cancel') {
      manualPayment.status = 'cancelled';
    } else {
      return res.status(400).json({ error: 'Invalid status' });
    }
    await manualPayment.save();

    res.status(200).json({ message: `Manual payment ${manualPayment.status}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getRechargeHistory = async (req, res) => { 

  try {
    const userId = req.decodedToken.userId;
    if(!userId) return res.status(400).send({status:false,message:"please login to get charge history"})
    const payments = await rechargeModel.find({ userId }).exec();
    if (!payments.length) return res.status(400).send({ status: false, message: "no recharge doing  yet" })

    return res.status(200).send({ status: true, message: "charge history", data: payments })
  
  } catch (error) {
    
    console.error('Error fetching payments by userId:', error);
    throw error;
  }
}

module.exports = { createRecharge, updatePaymentRequest, getPaymentRequest,getRechargeHistory }