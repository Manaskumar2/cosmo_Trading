const accountDetail = require('../models/bankDetailsModel'); // Import your Mongoose model
const userModel = require('../models/userModel');
const validation = require("../validations/validation")

const createBankAccount = async (req, res) => {
  try {
    
    const {
      bankName,
      accountHolderName,
      bankAccountNo,
      confirmBankAccountNo,
      city,
      ifscCode,
      bankBranchAddress,
      } = req.body;
      const userId = req.decodedToken.userId

    if (!bankName || !accountHolderName || !bankAccountNo || !city || !ifscCode || !bankBranchAddress || !userId||!confirmBankAccountNo) {
      return res.status(400).json({ error: false, message: 'All fields are required' });
    }
    const userExists = await userModel.findById(userId);
    if (!userExists) {
      return res.status(404).json({ error: false, message: 'User not found' });
    }
    if (userExists.isPremiumUser) return res.status(400).send({ status:false,message:"Premium user cannot add bank account" });
    if (confirmBankAccountNo !== bankAccountNo) return res.status(404).json({
      error: false, message: "please enter correct bank account number"})

      const checkBankAccount = await accountDetail.findOne({ userId: userId })
      if (checkBankAccount) return res.status(404).json({ error: false, message: 'Bank account details is already present' });
      
    const newAccountDetail = new accountDetail({
      bankName,
      accountHolderName,
      bankAccountNo,
      city,
      ifscCode,
      bankBranchAddress,
      userId,
    });

    await newAccountDetail.save();

    res.status(201).json({ message: 'Bank account created successfully', accountDetail: newAccountDetail });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getBankAccountbyId = async (req, res) => {
    try {
        const userId = req.params.userId
        if (!userId) return res.status(400).send({ status: false, message: "please enter a userId" })
        
        const checkUser = await userModel.findOne({ userId: userId })
        if (!checkUser) return res.status(400).send({ status: false, message: "invalid userId" })
        
        const accountDetails = await accountDetail.findOne({ userId: userId })
        if (!accountDetails) return res.status(400).send({ status: false, message: "please add bank details  " })

        return res.status(200).send({ status:true,message :"success" ,data: accountDetails})


    } catch (error) {
        res.status(500).json({ error: false, message: 'Internal Server Error' });
  }
  
}

const updateBankAccountAnduserDetails = async (req, res) => {
  try {
    const {
      bankName,
      accountHolderName,
      bankAccountNo,
      confirmBankAccountNo,
      city,
      ifscCode,
      bankBranchAddress,
      bankId,
      name,
      phoneNumber,
      password,
      parentReferralCode,
      parentUserUid,
      walletAmount,
      rechargeAmount,
    } = req.body;
    const userId = req.params.userId
    

  
    if (!bankId) return res.status(404).send({ status: false, message: "please enter bankId " });

    if (!validation.isValidObjectId(bankId)) return res.status(404).send({ status: false, message: "invalid bankId" });


    const updateBankDetails = { };

     if (bankName) {
      if (!validation.isValidName(name)) return res.status(400).send({ status: false, message: "Invalid name" });
      updateBankDetails.bankName = bankName;
    }
     if (accountHolderName) {
      if (!validation.isValidName(accountHolderName)) return res.status(400).send({ status: false, message: "Invalid name" });
      updateBankDetails.accountHolderName = accountHolderName;
    }
    if (city) {
      updateBankDetails.city = city;
    }

    if (bankAccountNo) {
      updateBankDetails.bankAccountNo = bankAccountNo;
    }
    if (ifscCode) {
      updateBankDetails.ifscCode = ifscCode;
    }
    if (bankBranchAddress) {
      updateBankDetails.bankBranchAddress =bankBranchAddress;
    }
    if (confirmBankAccountNo) {
      if (confirmBankAccountNo !== bankAccountNo) {
        return res.status(400).json({ error: 'Bank account numbers do not match' });
      }
      updateBankDetails.confirmBankAccountNo = confirmBankAccountNo
    }

    const bankAccount = await accountDetail.findById(bankId);
    if (!bankAccount) return res.status(404).json({ error: false, message: 'Bank account not found' });
 
    if (bankAccount.userId != userId) return res.status(404).json({ error: false, message: "invalid userId" });
    
    const updatedBankAccount = await accountDetail.findByIdAndUpdate(
      bankId,
      updateBankDetails,
      { new: true }
    );


    const filteredUpdateData = {};
    if (name) {
      if (!validation.isValidName(name)) return res.status(400).send({ status: false, message: "Invalid name" });
      filteredUpdateData.name = name;
    }
    if (phoneNumber) {
      if (!validation.isValidPhone(phoneNumber)) return res.status(400).send({ status: false, message: "Invalid phone number" });
      filteredUpdateData.phoneNumber = phoneNumber;
    }
    if (password) {
      if (!validation.isValidPwd(password)) return res.status(400).send({ status: false, message: "Invalid password" });
      filteredUpdateData.password = password;
    }
    if (parentReferralCode) {
      filteredUpdateData.parentReferralCode = parentReferralCode;
    }
    if (parentUserUid) {
      filteredUpdateData.parentUserUid = parentUserUid;
    }
    if (walletAmount) {
      filteredUpdateData.walletAmount = parseInt(walletAmount);
    }
    if (rechargeAmount) {
      filteredUpdateData.rechargeAmount = parseInt(rechargeAmount);
    }

    // Update user details
    const updatedUser = await userModel.findByIdAndUpdate(userId, filteredUpdateData, { new: true });

    return res.status(200).json({ success: true, bankAccount: updatedBankAccount, user: updatedUser });

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};

const getUserDetailsWithBank = async (req, res) => {
  try {
    const userId = req.params.userId;

    
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    const bankDetails = await accountDetail.findOne({ userId });

    const userDetailsWithBank = {
      user,
      bankDetails,
    };

   return res.status(200).json(userDetailsWithBank);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = { createBankAccount ,getBankAccountbyId,updateBankAccountAnduserDetails,getUserDetailsWithBank}