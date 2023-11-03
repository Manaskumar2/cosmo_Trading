const mongoose = require('mongoose');

const bankNameSchema= new mongoose.Schema({
    bankName: {
        type: String,
        required: true
    },

}, { timestamps: true })

module.exports = mongoose.model('bankName', bankNameSchema);