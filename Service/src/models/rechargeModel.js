

const mongoose = require('mongoose');

const manualPaymentSchema = new mongoose.Schema({
    upiId: {
        type: String,
        required:true,
    },
    qrcode: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', required: true
    },
    upiReferenceNo: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed','cancelled'],
        default: 'pending'
    },
    paymentConfirmedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    
  
},{timestamps:true});

module.exports = mongoose.model('ManualPayment', manualPaymentSchema);
