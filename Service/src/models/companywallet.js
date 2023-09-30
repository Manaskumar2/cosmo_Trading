const mongoose = require("mongoose")
const moment = require("moment")
require("moment-timezone")

const companyWalletSchema = new mongoose.Schema({
    totalBettingAmount: {
        type: Number,
        default: 0,
    },
    everydayBettingAmount: {
        type: Number,
        default: 0,
    },
       lastUpdatedDate: {
        type: Date,
        default: new Date(),
    }, 
    amount: {
        type: Number,
        default: 0,
        required: true,
    },
  
})


module.exports = mongoose.model("companywallet",companyWalletSchema)