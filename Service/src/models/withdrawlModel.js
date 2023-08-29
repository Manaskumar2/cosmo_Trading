const mongoose = require('mongoose');


const withdrawSchema = new mongoose.Schema({
    withdrawAmount: {
        type: Number,
        min: 100,
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

}, { timestamps: true }); 

module.exports = mongoose.model("withdraw", withdrawSchema); 