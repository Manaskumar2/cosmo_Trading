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
      return res.status(400).json({ error: 'All fields are required' });
    }
    const userExists = await userModel.findById(userId);
    if (!userExists) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (confirmBankAccountNo !== bankAccountNo) return res.status(404).json({
      error: false, message: "please enter correct bank account number"})

      const checkBankAccount = await accountDetail.findOne({ userId: userId })
      if (checkBankAccount) return res.status(404).json({ error: 'Bank account details is already present' });
      
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
        res.status(500).json({ error: 'Internal Server Error' });
  }
  
}

const updateBankAccount = async (req, res) => {
  try {
    const {
      bankName,
      accountHolderName,
      bankAccountNo,
      confirmBankAccountNo,
      city,
      ifscCode,
      bankBranchAddress,
      userId,
    } = req.body;

    const bankId = req.params.bankId;
    if (!bankId) return res.status(404).send({ status: false, message: "please enter bankId in the params" });

    if (!validation.isValidObjectId(bankId)) return res.status(404).send({ status: false, message: "invalid bankId" });

  
    if (!bankName || !accountHolderName || !bankAccountNo || !city || !ifscCode || !bankBranchAddress || !userId || !confirmBankAccountNo) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    
    const userExists = await userModel.findById(userId);
    if (!userExists) {
      return res.status(404).json({ error: 'User not found' });
    }

    
    if (confirmBankAccountNo !== bankAccountNo) {
      return res.status(400).json({ error: 'Bank account numbers do not match' });
    }
    const bankAccount = await accountDetail.findById(bankId)
    if (!bankAccount) return res.status(404).json({ error: false, message: 'Bank account not found' });
    if (bankAccount.userId != userId) return res.status(404).json({ error: false, message: "invalid userId" });
    
    const updatedBankAccount = await accountDetail.findByIdAndUpdate(
      bankId,
      {
        bankName,
        accountHolderName,
        bankAccountNo,
        city,
        ifscCode,
        bankBranchAddress,
      },
      { new: true }
    );
    return res.status(200).json({ success: true, bankAccount: updatedBankAccount });

  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};

module.exports = { createBankAccount ,getBankAccountbyId,updateBankAccount}