const commissionModel = require("../models/commissionModel");
const giftCodeModel = require("../models/giftCodeModel");
const userModel = require("../models/userModel");


const createGiftCode = async (req, res) => {
      try {
    const { code, maxClaims, amount } = req.body;

          if (!code) return res.status(400).json({ status: false, message: "Please Enter Code" })
          if (!maxClaims) return res.status(400).json({ status: false, message: "Please enter max claims" })
          if (!amount) return res.status(400).json({ status: false, message: "Please enter amount" })
          
    const existingCode = await giftCodeModel.findOne({ code });
    if (existingCode) {
      return res.status(400).json({ status: false, message: "Gift card already exist" });
          }
          const claimAmount = parseInt(amount)
          const maxClaim = parseInt(maxClaims)
          const createCode = await giftCodeModel.create({
              code: code,
              maxClaims: maxClaim,
              amount:claimAmount
          })
          return res.status(200).json({status:true,message:"success",data:createCode})
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error. Failed to create the gift code.' });
  }
}
const claimGiftcode = async (req, res) => { 
     try {
         const { code } = req.body;
         const userId = req.decodedToken.userId

    if(!code) return res.status(400).send({ status: false, message: "Invalid code" })
         
    const giftCode = await giftCodeModel.findOne({ code:code ,isDeleted:false});

    if (!giftCode) {
      return res.status(404).json({ error: 'Gift code not found' });
         }
         const user = await userModel.findById({ _id: userId });
         if (!user) return res.status(404).send({status:false,message:"User not found"})

    
    if (giftCode.claims >= giftCode.maxClaims) {
      return res.status(400).json({ error: 'Maximum claims for this gift code have been reached.' });
         }
      if (giftCode.claimedBy.includes(userId)) {
      return res.status(400).json({ error: 'You have already claimed this gift code.' });
         }
         giftCode.claims += 1;
       user.walletAmount += giftCode.amount
       giftCode.claimedBy.push(userId)
         await giftCode.save();
       await user.save();
       await commissionModel.create({
        userId: user._id,
        amount: giftCode.amount,
        date: Date.now(),
        commissionType: "GIFTCODE",
       })

    res.status(200).json({ message: 'Gift code claimed successfully.',data:giftCode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error. Failed to claim the gift code.' });
  }
}
const getGiftCode = async (req, res) => {
  try {
        const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;


    const giftCodes = await giftCodeModel.find({})
      .populate({
        path: 'claimedBy',
        select: 'UID name',
      })
        .sort({ createdAt: -1 })
       .skip(skip)
        .limit(limit);
    
    if (giftCodes.length < 0) return res.status(404).json({ status: false, message: "gift code not yet created" })

    const formattedGiftCodes = giftCodes.map((giftCode) => {
      return {
        maxClaim:giftCode.maxClaims,
        code: giftCode.code,
        claimedByUsers: giftCode.claimedBy.map((user) => {
          return {
            UID: user.UID,
            name: user.name,
          };
        }),
      };
    });

    res.status(200).json(formattedGiftCodes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error. Failed to retrieve gift codes.' });
  }
};
// const getGiftcodesAmount = async (req, res) => { 
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 20;
//     const skip = (page - 1) * limit;

//      const giftCodes = await giftCodeModel.find({isDeleted:false})
//         .sort({ createdAt: -1 })
//        .skip(skip)
//       .limit(limit);
//     const count  =  await giftCodeModel.countDocuments({isDeleted:false})
    
//       const response = {
//       currentPage: page,
//         totalPages: Math.ceil(count / limit),
//       giftCodes
//     };
//     res.status(200).json({status:true,message:"Success",data:response});
//   } catch (error) {
//       console.error('Error:', error);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
// }
const getGiftcodesAmount = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const giftCodes = await giftCodeModel.find({ isDeleted: false })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const count = await giftCodeModel.countDocuments({ isDeleted: false });

    // Calculate total claimed amount across all gift codes
    const totalClaimedAmount = await giftCodeModel.aggregate([
      {
        $match: { isDeleted: false }
      },
      {
        $group: {
          _id: null,
          total: { $sum: { $multiply: ["$claims", "$amount"] } }
        }
      }
    ]);

    const response = {
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      overallClaimedAmount: totalClaimedAmount.length > 0 ? totalClaimedAmount[0].total : 0,
      giftCodes: giftCodes.map((giftCode) => ({
        ...giftCode.toObject(),
        totalClaimedAmount: giftCode.claims * giftCode.amount,
      })),
    };

    res.status(200).json({ status: true, message: "Success", data: response });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {createGiftCode,claimGiftcode,getGiftCode,getGiftcodesAmount}