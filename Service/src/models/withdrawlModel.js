const mongoose = require('mongoose');


const withdrawSchema = new mongoose.Schema({
    withdrawAmount: {
        type: Number,
        min: 500,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed','cancelled'],
        default: 'pending'
    },
    approvedBy: {
        type:String,
    }
    

}, { timestamps: true }); 

module.exports = mongoose.model("withdraw", withdrawSchema); 