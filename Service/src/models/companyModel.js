const mongoose = require('mongoose')


const companySchema = new mongoose.Schema({
    companyId: {
       type: mongoose.Schema.Types.ObjectId,  
    },
    profitAmount: {
        type: Number,
        required: true,
    },
    profitFrom: {
        type: String,
        enum:['GROWUP','RISEUP'] 
    },
}, { timestamps: true })
module.exports = mongoose.model("company",companySchema)