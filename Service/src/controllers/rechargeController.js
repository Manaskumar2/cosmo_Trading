const rechargeModel = require('../models/rechargeModel')
const validation = require("../validations/validation")
const userModel = require('../models/userModel')
const commissionModel = require("../models/commissionModel")

const createRecharge = async (req, res) => {
  try {

    const { upiId, upiReferenceNo, amount, qrCode } = req.body;
    const userId = req.decodedToken.userId
    const rechargeAmount = parseInt(amount)
    if(rechargeAmount<500) return res.status(403).send({status:false,message:"minimum amount Rs/-500 to recharge"})

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
     console.error(error);
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
     
      const paymentsRequest = await rechargeModel.find({ status:status }) .sort({updatedAt: -1 })
      .skip(skip)
        .limit(limit);
      
       const count  =  await rechargeModel.countDocuments({status:status})
        const response = {
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      paymentsRequest
    };

      
      res.status(200).json({status:true,message:"Success",data:response});
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const updatePaymentRequest = async (req, res) => {
  try {
    const paymentId  = req.params.paymentId;
  
    const { status, approvedBy } = req.body;
    if (!approvedBy) return res.status(400).send({ status: false, message: "please enter your name to approved" })
    if (!validation.isValidName(approvedBy)) return res.status(400).send({ status: false, message:"Please enter valid name" })

    const manualPayment = await rechargeModel.findById(paymentId);

    if (!manualPayment) {
      return res.status(404).json({ error: 'Manual payment request not found' });
    }
    if(manualPayment.status==='confirmed') return res.status(200).send({status:false,message:"payment is already confirmed"})

    if (status === 'confirm') {
      manualPayment.status = 'confirmed';
      manualPayment.approvedBy = approvedBy;


      const user = await userModel.findById(manualPayment.userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      if (user.isPremiumUser) {
        const commission = (manualPayment.amount*0.01)
        user.walletAmount += manualPayment.amount;
        user.commissionAmount+=commission
        user.walletAmount += commission
        user.lastRechargeAmount += manualPayment.amount;
       await commissionModel.create({
        userId: user._id,
        amount: commission,
        date: Date.now(),
        commissionType: "RECHARGE",
       })
        await user.save();
        await manualPayment.save()
       return res.status(200).json({ message: `Manual payment ${manualPayment.status}` }); 
      }

      user.walletAmount += manualPayment.amount;
      user.rechargeAmount += manualPayment.amount;
      user.lastRechargeAmount +=manualPayment.amount;
      await user.save();
    } else if (status === 'cancel') {
      manualPayment.status = 'cancelled';
      manualPayment.approvedBy = approvedBy;
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
    const payments = await rechargeModel.find({ userId }).sort({createdAt:-1})
    if (!payments.length) return res.status(400).send({ status: false, message: "no recharge doing  yet" })

    return res.status(200).send({ status: true, message: "charge history", data: payments })
  
  } catch (error) {
    
    console.error('Error fetching payments by userId:', error);
    throw error;
  }
}



const dateWiseRecharge = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const specificDate = req.query.specificDate;
   const currentDate = new Date();
    const twoMonthsAgo = new Date(currentDate);
    twoMonthsAgo.setMonth(currentDate.getMonth() - 2);
    let matchCondition = {
      status: 'confirmed',
      createdAt: {
        $gte: twoMonthsAgo,
        $lt: currentDate,
      },
    };

    if (specificDate) {
      matchCondition = {
        status: 'confirmed',
        createdAt: {
          $gte: new Date(specificDate),
          $lt: new Date(specificDate + 'T23:59:59.999Z'), // End of the day
        },
      };
    }

const pipeline = [
  {
    $match: matchCondition,
  },
  {
    $addFields: {
      convertedCreatedAt: {
        $cond: {
          if: { $eq: [{ $type: '$createdAt' }, 'string'] },
          then: {
            $dateFromString: {
              dateString: '$createdAt',
              timezone: 'Asia/Kolkata',
            },
          },
          else: '$createdAt',
        },
      },
    },
  },
  {
    $addFields: {
      convertedCreatedAt: {
        $dateToString: {
          format: '%Y-%m-%d',
          date: '$convertedCreatedAt',
          timezone: 'Asia/Kolkata',
        },
      },
    },
  },
  {
    $group: {
      _id: '$convertedCreatedAt',
      totalAmount: { $sum: '$amount' },
    },
  },

];


    const result = await rechargeModel.aggregate(pipeline);

    return res.json(result);
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = { createRecharge, updatePaymentRequest, getPaymentRequest,getRechargeHistory,dateWiseRecharge }