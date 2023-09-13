const premiumModel = require("../models/premiumUserModel")
const validation = require("../validations/validation")
const userModel = require("../models/userModel")



const applyPremiumUser = async (req, res) => {
    try {
        const { amount, transactionId } = req.body
        console.log(amount);
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
        if (!transactionId) return res.status(403).send({ status: false, message: "please provide  transaction Id" })
        const applyingPremium = await premiumModel.create({ amount: amount, transactionId: transactionId, userId: userId })
        
         return res.status(201).json({ message: 'Premium application submitted successfully.' });

    } catch (error) {
           console.error('Error applying for premium status:', error);
    return res.status(500).json({ message: 'Internal server error.' });
    }
}

const getpremiumRequest = async (req, res) => { 

    try {
        const premiumApplyRequest = await premiumModel.find().sort({ createdAt: -1 })
        if (premiumApplyRequest.length < 0) return res.status(404).send({ status: false, message: "no premium request found." });
        return res.status(200).send({ status: true, message: "success", data: premiumApplyRequest })
         
    } catch (error) {
        console.error('Error applying for premium status:', error);
    return res.status(500).json({ message: 'Internal server error.' });
    }
}

const updatePremiumUser = async (req, res) => { 
    try {
        const userId = req.params.userId
        if (!userId) return res.status(400).send({ status: false, message: "please provide userId in the params" });
        if (!validation.isValidObjectId(userId)) return res.status(400).send({ status: false, message: "invalid userId in the params" });
        
        const user = await userModel.findOne({ _id: userId })
        if (user.isPremiumUser == true) return res.status(400).send({ status: false, message: "user already have a premium user" })


          const premiumDetails = await premiumModel.findOne({ userId: userId });
    if (!premiumDetails) {
      return res.status(400).send({ status: false, message: "No premium application found for this user" });
        }
    if (premiumDetails.transactionId !== req.body.transactionId) {
      premiumDetails.status = "rejected";
      await premiumDetails.save();
      return res.status(400).send({ status: false, message: "TransactionId does not match. Application rejected." });
    }

    if (!req.body.adminStatus) {
      return res.status(400).send({ status: false, message: "Please provide an adminStatus (approved or rejected) in the request body" });
    }
    if (req.body.adminStatus === "approved") {
      const premiumAmount = premiumDetails.amount;
      const addToWallet = premiumAmount * 0.5; 
      user.walletAmount += addToWallet;

  
      user.isPremiumUser = true;

      premiumDetails.status = "approved";
    } else if (req.body.adminStatus === "rejected") {
     
      premiumDetails.status = "rejected";
    } else {
      return res.status(400).send({ status: false, message: "Invalid adminStatus. Use 'approved' or 'rejected'" });
    }

    
    await user.save();
    await premiumDetails.save();

    } catch (error) {
           console.error('Error applying for premium status:', error);
    return res.status(500).json({ message: 'Internal server error.' });
    }
}
const getPremiumRequestById = async (req, res) => { 
    try {
        userId = req.params.userId;


         if (!userId) return res.status(400).send({ status: false, message: "please provide userId in the params" });
        if (!validation.isValidObjectId(userId)) return res.status(400).send({ status: false, message: "invalid userId in the params" });
        
        const user = await userModel.findOne({ _id: userId })
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


module.exports ={applyPremiumUser,getpremiumRequest,updatePremiumUser,getPremiumRequestById}