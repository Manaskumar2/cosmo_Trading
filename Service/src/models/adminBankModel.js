const mongoose = require('mongoose');
 

const adminBankSchema = new mongoose.Schema({

    bankName: {
        type: String,
        required: true,
        
    },
    IfscCode: {
        type: String,
        required:true
    },
    accountHolderName: {
        type: String,
        required:true
    },
    accountNumber: {
        type: Number,
        required:true
    },
}, { timestamps: true })

module.exports = mongoose.model('adminBankAccount', adminBankSchema);