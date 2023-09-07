const mongoose = require('mongoose');

const premiumSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    transactionId: {
        type: Number,
        required:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
     status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    }
}, { timestamps: true })

module.exports = mongoose.model('premiumApply', premiumSchema);