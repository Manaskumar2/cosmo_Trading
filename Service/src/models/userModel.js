const mongoose = require("mongoose")


const referalSchema  = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'users',
        default:[]
    },
},{timestamps:true})

const userSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    password: {
        type: String
    },
    referralCode: {
        type: String,
        required:true
    },
    parentReferralCode: {
        type: String,
        default: null
    },
    profilePhoto:{
        type:String,
    },
    nickName:{
        type:String
    },
    level: {
        type: Number,
        default: 0
    },
    downline: {
        type:[referalSchema],
        default:[]
    },
    UID: {
        type: Number,
        required:true
    },
    walletAmount:{
        type:Number,
        default:0
    },
    isPremiumUser:{
        type:Boolean,
        default:false
    }
    
},

 { timestamps: true })

module.exports = mongoose.model("users", userSchema)