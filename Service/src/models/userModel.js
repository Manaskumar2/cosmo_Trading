const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  password: {
    type: String,
  },
  referralCode: {
    type: String,
    required: true,
  },
  parentReferralCode: {
    type: String,
    default: null,
  },
  parentUserUid: {
    type: Number,
    default:11111
  },
  profilePhoto: {
    type: String,
  },
  level: {
    type: Number,
    default: 0,
  },
    downline: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
      referralDate: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  UID: {
    type: Number,
    required: true,
  },
  walletAmount: {
    type: Number,
    default: 0,
  },
  isPremiumUser: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  winningAmount: {
    type: Number,
    default: 0,
  },
  commissionAmount: {
    type: Number,
    default: 0,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  bettingAmount: {
    type: Number,
    required: true,
    default:0
  },
  rechargeAmount: {
    type: Number,
    default: 0
  },
  lastRechargeAmount: {
    type: Number,
    default:0
  },
  token: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model("users", userSchema);
