// models/QrCode.js

const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
  name: String, 
  imageUrl: String, 
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('QrCode', qrCodeSchema);

