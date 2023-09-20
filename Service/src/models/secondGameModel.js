const mongoose = require('mongoose');
const moment = require("moment")
require("moment-timezone")

const betSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  amount: {
    type: Number,
    required: true
  },
  group: {
    type: String,
    enum: ["A", "B","C"],
    required: true
  }
})

const GameSchema = new mongoose.Schema({
  duration: {
    type: Number,
    required: true
  },
  isCompleted: { type: Boolean, default: false },
  bets: {
    type:[betSchema],
    default:[]
  },
  startTime: {
    type: Date,
    required: true,
    get: function (value) {
      return moment(value).tz("Asia/Kolkata")
    }
  },
  endTime: {
    type: Date,
    required: true,
    get:function (value) {
      return moment(value).tz("Asia/Kolkata")
    }
  },
  gameUID: {
     type: Number,

  },
  winnerGroup: {
    type: String,
    default:null
  },
    runnerUpGroup: {
    type: String,
    default: null
  }

},{timestamps:true});
module.exports = mongoose.model('SecondGame', GameSchema);