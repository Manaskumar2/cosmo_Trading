const  mongoose = require("mongoose")

const growUpBetSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
  amount: {
    type: Number,
    required: true,
    default:0
  },
  group: {
    type: String,
    enum: ["small", "big"],
    required: true
  },
  winningAmount: {
      type: Number,
      default:0
    },
  gameId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'games'
  }
}, { timestamps: true })
module.exports = mongoose.model("growUp",growUpBetSchema)