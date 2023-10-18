const mongoose = require('mongoose');
const playersSchema = new mongoose.Schema({
    totalPlayers: {
        type: Number,
    },
    TotalBetting: {
        type: Number,
    },
    onlinePlayers: {
        type: Number,
    },
    todayTotalWithdrawal: {
        type: Number,
    }
}, { timestamps: true });

const Player = mongoose.model('Player', playersSchema);

module.exports = Player;
