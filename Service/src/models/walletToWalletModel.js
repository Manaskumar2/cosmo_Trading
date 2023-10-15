const mongoose = require('mongoose');

const walletTransactionSchema = new mongoose.Schema({
  sender: {
    type: Number,
    required: true,
  },
  receiver: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  commission: {
    type: Number
  },
},{timestamps:true});

const WalletTransaction = mongoose.model('WalletTransaction', walletTransactionSchema);

module.exports = WalletTransaction;
