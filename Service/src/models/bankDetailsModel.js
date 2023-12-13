const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    bankName: {
        type: String,
        required: true
    },
    accountHolderName: {
        type: String,
        required: true
    },
    bankAccountNo: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    ifscCode: {
        type: String,
        required: true
    },
  
    bankBranchAddress: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }


}, { timestamps: true })

module.exports = mongoose.model('acountDetail', accountSchema);