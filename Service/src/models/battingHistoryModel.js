const mongoose = require('mongoose');
const BettingHistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    default: Date.now,
  },
    amount: Number,
    bettingFrom: {
      type:String
  },
});

const BettingHistory = mongoose.model("BettingHistory", BettingHistorySchema);
module.exports = BettingHistory;