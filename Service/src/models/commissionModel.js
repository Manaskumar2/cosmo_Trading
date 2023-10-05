const mongoose = require("mongoose");
const commissionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'users',
        required: true
    },
    commissionType: {
        type: String,
        enum: ['P2P', 'FRANCHISE', 'AGENT'],
    }
}, { timestamps: true });
module.exports = mongoose.model("Commissions",commissionSchema)