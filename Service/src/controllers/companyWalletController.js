const companywallet = require("../models/companywallet")


const getCompanyDetails = async (req, res) => {
    try {
        const companyDetails = await companywallet.find()

        if (!companyDetails) return res.status(404).send({ status: false, message: "CompanyDetails not found" })
        
        return res.status(200).send({ status: true, message: "success", data: companyDetails })
        
    } catch (error) {
        res.status(500).send({status:false,message:"Error getting company details"})
    }
}

module.exports = { getCompanyDetails }