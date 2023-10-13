// const socketIO = require("socket.io");
// const moment = require("moment-timezone");
// const Game = require("../models/gameModel"); 

// let io;

// const connectedUsers = {};

// const initSocket = (server) => {
//   io = socketIO(server, {
//     cors: {
//       origin: "*",
//     },
//   });

//   io.on("connection", (socket) => {
//     console.log(`User ${socket.id} connected!`);

//     socket.on("get-game", async ({ duration }) => {
//       try {
//         const currentDate = moment().tz("Asia/Kolkata");

//         if (!duration) {
//           socket.emit("game-data", {
//             status: false,
//             message: "Please provide time duration for the game",
//           });
//           return;
//         }

//         const game = await Game.findOne({
//           duration: duration,
//           isCompleted: false,
//         }).select({ isCompleted: 1, endTime: 1, startTime: 1, gameUID: 1 });

//         if (!game) {
//           socket.emit("game-data", {
//             status: false,
//             message: "Game has ended",
//           });
//           return;
//         }

//         socket.emit("game-data", {
//           status: true,
//           message: "Success",
//           data: game,
//           currentTime: currentDate,
//         });
//       } catch (error) {
//         console.error("Error fetching gameplay:", error);
//         socket.emit("game-data", {
//           status: false,
//           message: "An error occurred while fetching gameplay",
//         });
//       }
//     });

//     socket.on("disconnect", () => {
//       console.log(`User ${socket.id} disconnected!`);
//     });
//   });
// }
// module.exports = { initSocket };
