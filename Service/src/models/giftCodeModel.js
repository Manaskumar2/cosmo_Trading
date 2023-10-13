const mongoose = require('mongoose');

const giftCodeSchema = new mongoose.Schema({
  code: {
    type: String,
    unique: true,
    required: true,
  },
  maxClaims: {
    type: Number,
    required: true,
    min: 1,
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  claims: {
    type: Number,
    default: 0,
    min: 0,
    },
   claimedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    }],
    isDeleted: {
        type: Boolean,
        default: false
   },
},{timestamps: true});

const GiftCode = mongoose.model('GiftCode', giftCodeSchema);

module.exports = GiftCode;
