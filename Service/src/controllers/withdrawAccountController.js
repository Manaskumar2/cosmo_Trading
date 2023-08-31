const accountDetail = require('../models/bankDetailsModel'); // Import your Mongoose model
const userModel = require('../models/userModel');

const createBankAccount = async (req, res) => {
  try {
    
    const {
      bankName,
      accountHolderName,
      bankAccountNo,
      city,
      ifscCode,
      email,
      bankBranchAddress,
      } = req.body;
      console.log(req.body)
      const userId = req.decodedToken.userId

    if (!bankName || !accountHolderName || !bankAccountNo || !city || !ifscCode || !email || !bankBranchAddress || !userId) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const userExists = await userModel.findById(userId);
    if (!userExists) {
      return res.status(404).json({ error: 'User not found' });
    }

      const checkBankAccount = await accountDetail.findOne({ userId: userId })
      if (checkBankAccount) return res.status(404).json({ error: 'Bank account details is already present' });
      
    const newAccountDetail = new accountDetail({
      bankName,
      accountHolderName,
      bankAccountNo,
      city,
      ifscCode,
      email,
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

module.exports = { createBankAccount ,getBankAccountbyId}