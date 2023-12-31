
const Player = require("../models/playersModel")
const createFakePlayers = async (req, res) => {
    try {
        const { totalPlayers, TotalBetting, onlinePlayers, todayTotalWithdrawal } = req.body;

        const checkPlayers = await Player.findOne().sort({ createdAt: -1 });

        if (!checkPlayers) {
            const newPlayer = new Player({
                totalPlayers,
                TotalBetting,
                onlinePlayers,
                todayTotalWithdrawal
            });
            const player = await newPlayer.save();
            res.status(201).json(player);
        } else {
            // Update only the fields that are provided in the request body
            if (totalPlayers) checkPlayers.totalPlayers = totalPlayers;
            if (onlinePlayers) checkPlayers.onlinePlayers = onlinePlayers;
            if (TotalBetting) checkPlayers.TotalBetting = TotalBetting;
            if (todayTotalWithdrawal) checkPlayers.todayTotalWithdrawal = todayTotalWithdrawal;

            await checkPlayers.save();
            return res.status(201).send({ status: true, message: "Successfully updated" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'An error occurred while creating/updating a player' });
    }
};


const getPlayers = async (req, res) => {
    try {
        const players = await Player.findOne().sort({ createdAt: -1 });
        if (!players) return res.status(404).json({ status: false, message: "Couldn't find players" })
       return res.status(200).json(players);
    } catch (error) {
         console.log(error)
        res.status(500).json({ error: 'An error occurred while getting players' });
    }
};
module.exports ={createFakePlayers,getPlayers}