const dotenv = require("dotenv");
const express = require("express");
const route = require("./src/routes/route");
const admin = require("./src/routes/adminRoutes")
const app = express();
const cors = require('cors')
const path = require('path');
const server = require("http").Server(app)
const mongoose = require('mongoose');
const {initSocket}=require("./src/socket/socketio.js")
const bodyParser = require('body-parser');


app.use(
  cors({
    credentials: true,
    origin:  ["http://cosmotrade.live","https://cosmotrade.live/" ,"http://localhost:3000","http://localhost:3333"]
  })
);
app.use(express.json());
app.use(bodyParser.json({ limit: '50mb' })); // Adjust the limit to your needs
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // Adjust the limit to your needs

const rootDir = path.resolve(__dirname);

  dotenv.config({ path: ".env.production" });




mongoose.set("strictQuery", true);
let mongoDbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let DATABASE = process.env.DATABASE;
let PORT = process.env.PORT;

mongoose
  .connect(DATABASE, mongoDbConfig)
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

initSocket(server);
app.use("/api", route);
app.use("/api/admin", admin);




// if (
//    process.env.NODE_ENV === "production"||process.env.NODE_ENV === "development"

// ) {
  // app.use(express.static("dist"));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(rootDir, "../Web/dist/index.html"));
  // });

  app.use(express.static(path.join(__dirname, "../Web/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../Web/dist/index.html"));
});
//  }

app.use((req, res, next) => {
  const error = new Error("Path not found.");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.send({
    error: {
      status: error.status || 500,
      message: error.message,
    },
  });
});

server.listen(process.env.PORT, function () {
  console.log(`Express app running on ${PORT}`);
});