const socketIO = require("socket.io");
const secondGameModel = require("../models/secondGameModel");
const gameModel = require("../models/gameModel");

let io;

const users = new Map();

const initSocket = (server) => {
    io = socketIO(server, {
        cors: {
            origin: "*",
        },
    });

    io.on("connection", (socket) => {
        const userId = socket.handshake.query.userId;
        console.log(`${userId ?? 'Unknown user'} connected!`);
        if (userId) {
            users[socket.handshake.query.userId] = socket.id;
        }

        socket.on('join_rise_up', () => {
            socket.join('rise_up');
        })

        socket.on('leave_rise_up', () => {
            socket.leave('rise_up');
        })
        
        socket.on('get_rise_up', async(duration) => {
            if(duration){
                const game = await secondGameModel.findOne({ duration: duration, isCompleted: false }).sort({createdAt: -1}).select({ isCompleted: 1, endTime: 1, gameUID: 1, duration: 1});
                if(game){
                    socket.emit('rise_up_game', JSON.stringify(game));
                }
            }
        })

        socket.on('join_grow_up', () => {
            socket.join('grow_up');
        })

        socket.on('leave_grow_up', () => {
            socket.leave('grow_up');
        })
        
        socket.on('get_grow_up', async(duration) => {
            if(duration){
                const game = await gameModel.findOne({ duration: duration, isCompleted: false }).sort({createdAt: -1}).select({ isCompleted: 1, endTime: 1, gameUID: 1, duration: 1});
                if(game){
                    socket.emit('grow_up_game', JSON.stringify(game));
                }
            }
        })

        socket.on("disconnect", () => {
            const userId = socket.handshake.query.userId;

            console.log(`${userId ?? 'Unknown User'} disconnected!`);

            const userIds = Object.keys(users);
            for (const userId of userIds) {
                if (users[userId].id === socket.id) {
                    delete users[userId];
                    break;
                }
            }
        })
    });
};

const updateRiseUp = async (game) => {
    const totalGamesCount = await secondGameModel.countDocuments({ isCompleted: true });
    const totalPages = Math.ceil(totalGamesCount / 10);
    io.to('rise_up').emit('rise_up_update', JSON.stringify({
        totalPages,
        game: {
            _id: game._id,
            duration: game.duration,
            isCompleted: true,
            gameUID: game.gameUID,
            winnerGroup: game.winnerGroup,
            runnerUpGroup: game.runnerUpGroup,
            losersGroup: game.losersGroup,
        }
    }));
}

const createGrowUp = (game) => {
    io.to('grow_up').emit('grow_up_game', JSON.stringify(game));
}

const updateGrowUp = async (game) => {
    const totalGamesCount = await gameModel.countDocuments({ isCompleted: true });
    const totalPages = Math.ceil(totalGamesCount / 10);
    io.to('grow_up').emit('grow_up_update', JSON.stringify({
        totalPages,
        game: {
            _id: game._id,
            duration: game.duration,
            isCompleted: true,
            gameUID: game.gameUID,
            winnerGroup: game.winnerGroup,
        }
    }));
}

const createRiseUp = (game) => {
    io.to('rise_up').emit('rise_up_game', JSON.stringify(game));
}

const updateUserWalletSocket = async(socketId, amount) => {
    io.to(socketId).emit('updateUserWallet', amount);
}

module.exports = { initSocket, users, updateRiseUp, updateUserWalletSocket, createRiseUp, createGrowUp, updateGrowUp };
