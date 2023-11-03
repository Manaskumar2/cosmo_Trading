const bankNameModel = require("../models/bankNameModel")


const addBank = async (req, res) => {
    try {
        const { bankName } = req.body
        if (!bankName) return res.status(404).send({ status: false, message: "please enter a bank name" })
        const newBank = bankName.toUpperCase()
        const checkBankName = await bankNameModel.findOne({ bankName: newBank })
        if(checkBankName) return res.status(404).send({ status:false,message: "bank name already exists" })
        
        const createBankname = await bankNameModel.create({ bankName: newBank })
        return res.status(200).send({ status: true, message: "create a new bank name",data: createBankname })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({ status: false, message: error.message })
    }
}
const getBankName = async (req, res) => {
  try {
    const bankName = req.query.bankName;

    if (bankName) {
      
      const searchRegex = new RegExp(bankName, "i");

      
      query = {
        bankName: { $regex: searchRegex },
      };
    } else {
      query = {};
    }

    const banks = await bankNameModel.find(query);

    if (banks.length === 0) {
      return res.status(400).send({ status: false, message: "Invalid bank name" });
    }

    return res.status(200).send({ status: true, message: 'Success', data: banks });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: false, message: error.message });
  }
};


module.exports ={addBank,getBankName}