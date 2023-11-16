const premiumModel = require("../models/premiumUserModel")
const validation = require("../validations/validation")
const userModel = require("../models/userModel")



const applyPremiumUser = async (req, res) => {
    try {
        const { amount} = req.body
       
        const userId = req.decodedToken.userId
         
        checkPremium = await premiumModel.find()
        if (checkPremium.length < 50) {
            const requireAmount = 10000
            if(amount!== requireAmount) return res.status(400).send({status:false,message:"amount must be 10000 for first 50 users"})
        }
        else if (checkPremium.length > 50 && checkPremium.length <= 100) {
            const requireAmount = 20000
             if(amount!== requireAmount) return res.status(400).send({status:false,message:"amount must be 20000 for  50 to 100 users"})
        }
        else if (checkPremium.length > 100 && checkPremium.length <= 150) {
            const requireAmount = 30000
             if(amount!== requireAmount) return res.status(400).send({status:false,message:"amount must be 30000 for 100 to 150 users"})
      }
     const checkAmount = await userModel.findById({ _id: userId })
      if (!checkAmount) return res.status(400).send({ status: false, message: "please logIn again" })
      if (checkAmount.isPremiumUser == true) return res.status(400).send({ status: false, message: "you  are already a premium user" })
      const premiumDetails = await premiumModel.findOne({ userId: userId,status:"pending" });
    if (premiumDetails) {
      return res.status(401).send({ status: false, message: "You are already applied please wait conformation" });
        }
        const curreentBalance = checkAmount.walletAmount
      if (curreentBalance< amount) return res.status(400).send({ status: false, message: "insufficient funds" })
      checkAmount.walletAmount -= amount
      checkAmount.save()
      
      const applyingPremium = await premiumModel.create({ amount: amount, userId: userId })
        
         return res.status(201).json({ message: 'Premium application submitted successfully.' });

    } catch (error) {
           console.error('Error applying for premium status:', error);
    return res.status(500).json({ message: 'Internal server error.' });
    }
}

const getpremiumRequest = async (req, res) => { 

  try {
    const status = req.query.status
     const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;


    const count = await userModel.countDocuments({status: status })
    const skip = (page - 1) * limit;
    const premiumApplyRequest = await premiumModel.find({ status: status }).sort({ createdAt: -1 }).skip(skip)
      .limit(limit);
    
    
    if (premiumApplyRequest.length < 0) return res.status(404).send({ status: false, message: "no premium request found." });
    
    const response = {
          premiumApplyRequest ,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
          totalCount: count,
          totalpremiumUsers:count
        };
        return res.status(200).send({ status: true, message: "success",response})
      
    } catch (error) {
        console.error('Error applying for premium status:', error);
    return res.status(500).json({ message: 'Internal server error.' });
    }
}

const updatePremiumUser = async (req, res) => { 
    try {
      const userId = req.params.userId
      const premiumId = req.body.premiumId
        if (!userId) return res.status(400).send({ status: false, message: "please provide userId in the params" });
      if (!validation.isValidObjectId(userId)) return res.status(400).send({ status: false, message: "invalid userId in the params" });
      if (!validation.isValidObjectId(premiumId)) return res.status(400).send({ status: false, message: "invalid premiumId in the params" })
        
        const user = await userModel.findById({ _id: userId })
      if (user.isPremiumUser == true) return res.status(400).send({ status: false, message: "user already have a premium user" })
      const premiumDetails = await premiumModel.findById({ _id: premiumId })
    if (!premiumDetails) {
      return res.status(400).send({ status: false, message: "No premium application found " });
      }
      
      if (premiumDetails.userId != userId) return res.status(400).send({ status: false, message: "invalid userId" })

    if (!req.body.adminStatus) {
      return res.status(400).send({ status: false, message: "Please provide an adminStatus (approved or rejected) in the request body" });
    }
    if (req.body.adminStatus === "approved") {
      const premiumAmount = premiumDetails.amount;
      const addToWallet = premiumAmount * 0.5; 
      user.walletAmount += addToWallet;

  
      user.isPremiumUser = true;
      user.rechargeAmount = 0

      premiumDetails.status = "approved";
       await user.save();
      await premiumDetails.save();
       return res.status(200).send({status:true ,message:"sucessfully update premium status"})

    } else if (req.body.adminStatus === "rejected") {
      user.walletAmount+=premiumDetails.amount
      premiumDetails.status = "rejected";
      await user.save();
      await premiumDetails.save();
       return res.status(200).send({status:true ,message:"sucessfully update premium status"})

    } else {
      return res.status(400).send({ status: false, message: "Invalid adminStatus. Use 'approved' or 'rejected'" });
    }

  
    } catch (error) {
           console.error('Error applying for premium status:', error);
    return res.status(500).json({ message: 'Internal server error.' });
    }
}
const getPremiumRequestById = async (req, res) => { 
    try {
      const  userId = req.params.userId;


         if (!userId) return res.status(400).send({ status: false, message: "please provide userId in the params" });
        if (!validation.isValidObjectId(userId)) return res.status(400).send({ status: false, message: "invalid userId in the params" });
        
        const user = await userModel.findById({ _id: userId })
        if (user.isPremiumUser == true) return res.status(400).send({ status: false, message: "user already have a premium user" })


          const premiumDetails = await premiumModel.findOne({ userId: userId });
    if (!premiumDetails) {
      return res.status(400).send({ status: false, message: "No premium application found for this user" });
        }

        return res.status(200).send({ status: true, message: "sucessfully", data: premiumDetails })

    } catch (error) {
          console.error('Error applying for premium status:', error);
    return res.status(500).json({ message: 'Internal server error.' });
    }
}
const getPremiumDetails = async (req, res) => {
  try {
       const page = parseInt(req.query.page) || 1;
       const limit = parseInt(req.query.limit) || 20;
       const skip = (page - 1) * limit;

       const count = await userModel.countDocuments({isPremiumUser:true});

        getUsers = await userModel.find({isPremiumUser:true}) .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

        if (getUsers.length < 1) {
          return res
            .status(400)
            .send({ status: false, message: "No user found" });
        }

        const response = {
          getUsers,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
          totalCount: count,
          totalpremiumUsers:count
        };

        return res.status(200).send({ status: true, message: "Successful", response });

  } catch (error) {
     console.error('Error applying for premium status:', error);
    return res.status(500).json({status:false,message:error.message});
  }
 }

module.exports ={applyPremiumUser,getpremiumRequest,updatePremiumUser,getPremiumRequestById,getPremiumDetails}