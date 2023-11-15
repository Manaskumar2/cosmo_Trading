const adminBankModel = require("../models/adminBankModel")
const validation = require("../validations/validation")


const createBankAccount = async (req, res) => {
    try {
        const { bankName, IfscCode, accountHolderName, accountNumber } = req.body;
console.log(req.body)
        const createData = {}
        
        if (validation.isValidBody(req.body)) return res.send({ status: false, message: "invalid body" });
        if (!bankName) return res.send({ status: false, message: "missing bank name" });
        if (!validation.isValidName(bankName)) return res.send({ status: false, message: "invalid bank name" }); 
        createData.bankName = bankName;
        
        if (!IfscCode) return res.send({ status: false, message: "missing ifsc code" });
        if (!validation.isValid(IfscCode)) return res.send({ status: false, message: "invalid ifsc code" });
        createData.IfscCode = IfscCode;

        if (!accountHolderName) return res.send({ status: false, message: "missing account holder name" });
        if (!validation.isValidName(accountHolderName)) return res.send({ status: false, message: "invalid account holder name" });
        createData.accountHolderName = accountHolderName

        if (!accountNumber) return res.send({ status: false, message: "missing account number" })
        createData.accountNumber = accountNumber
        const createBankAccount = await adminBankModel.create(createData)

        return res.status(201).send({ status:false,message: "success" , data: createBankAccount})    
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

const getBankAccount = async (req, res) => { 
    try {
        const bankDetails = await adminBankModel.findOne()
        if (!bankDetails) return res.status(404).json({ status: false, message: `Bank not found` })
        return res.status(200).send({status:true, message: "success",data: bankDetails})
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createBankAccount, getBankAccount }