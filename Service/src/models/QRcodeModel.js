

const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
  upiId: {
    type: String,
    required: true,
  } , 
  qrCode: {
    type: String,
    required: true,
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('QrCode', qrCodeSchema);

