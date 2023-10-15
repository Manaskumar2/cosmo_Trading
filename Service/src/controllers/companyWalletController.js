const companywallet = require("../models/companywallet")
const rechargeModel = require('../models/rechargeModel'); 
const withdrawlModel = require('../models/withdrawlModel');

const getCompanyDetails = async (req, res) => {
    try {
        const companyDetails = await companywallet.find()

        if (!companyDetails) return res.status(404).send({ status: false, message: "CompanyDetails not found" })
        
        return res.status(200).send({ status: true, message: "success", data: companyDetails })
        
    } catch (error) {
      console.error(error)
        res.status(500).send({status:false,message:"Error getting company details"})
    }
}

 
const companyRechargeAndWithdraw = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayTotalRechargePromise = rechargeModel.aggregate([
      {
        $match: {
          createdAt: { $gte: today },
          status: 'confirmed'
        }
      },
      {
        $group: {
          _id: null,
          todayTotalRecharge: { $sum: '$amount' }
        }
      }
    ]).exec();

    const overallTotalRechargePromise = rechargeModel.aggregate([
      {
        $match: {
          status: 'confirmed'
        }
      },
      {
        $group: {
          _id: null,
          overallTotalRecharge: { $sum: '$amount' }
        }
      }
    ]).exec();

    const todayTotalWithdrawPromise = withdrawlModel.aggregate([
      {
        $match: {
          createdAt: { $gte: today },
          status: 'confirmed'
        }
      },
      {
        $group: {
          _id: null,
          todayTotalWithdraw: { $sum: '$withdrawAmount' }
        }
      }
    ]).exec();

    const overallTotalWithdrawPromise = withdrawlModel.aggregate([
      {
        $match: {
          status: 'confirmed'
        }
      },
      {
        $group: {
          _id: null,
          overallTotalWithdraw: { $sum: '$withdrawAmount' }
        }
      }
    ]).exec();

    // Wait for all promises to resolve
    const [
      todayTotalRechargeResult,
      overallTotalRechargeResult,
      todayTotalWithdrawResult,
      overallTotalWithdrawResult,
    ] = await Promise.all([
      todayTotalRechargePromise,
      overallTotalRechargePromise,
      todayTotalWithdrawPromise,
      overallTotalWithdrawPromise,
    ]);

    const todayTotalRecharge = todayTotalRechargeResult.length > 0 ? todayTotalRechargeResult[0].todayTotalRecharge : 0;
    const overallTotalRecharge = overallTotalRechargeResult.length > 0 ? overallTotalRechargeResult[0].overallTotalRecharge : 0;
    const todayTotalWithdraw = todayTotalWithdrawResult.length > 0 ? todayTotalWithdrawResult[0].todayTotalWithdraw : 0;
    const overallTotalWithdraw = overallTotalWithdrawResult.length > 0 ? overallTotalWithdrawResult[0].overallTotalWithdraw : 0;

    const response = {
      todayTotalRecharge,
      overallTotalRecharge,
      todayTotalWithdraw,
      overallTotalWithdraw,
    };

    return res.status(200).json({ status: true, message: "successfully", data: response });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = { getCompanyDetails,companyRechargeAndWithdraw}