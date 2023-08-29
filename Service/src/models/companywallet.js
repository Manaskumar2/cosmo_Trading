const mongoose = require("mongoose")
const moment = require("moment")
require("moment-timezone")

const actionsSchema = new mongoose.Schema({
    actions:{
        type:String,
        enum:["+","-"]
    },
    amount:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        required:true,
        get:function (value){
            return moment(value).tz("Asia/Kolkata")
        }
    },
    wonFrom:{
        type:String
    },
    source:{
        type:mongoose.Schema.ObjectId,
    }
})

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
    actions: {
        type: [actionsSchema],
        default: [],
    },
})


module.exports = mongoose.model("companywallet",companyWalletSchema)