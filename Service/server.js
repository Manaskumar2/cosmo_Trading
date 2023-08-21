const dotenv = require("dotenv");
const express = require("express");
const route = require("./src/routes/route");
const app = express();
const cors = require('cors')
const path = require('path');
const mongoose = require('mongoose');


app.use(
  cors({
    credentials: true,
    origin:  ["http://cosmotrade.live" ,"http://localhost:3000","http://localhost:3333"]
  })
);
const multer = require("multer");

app.use(express.json());
const upload = multer();
app.use(upload.any());


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


app.use("/api", route);




if (
   process.env.NODE_ENV === "production"||process.env.NODE_ENV === "development"

) {
  // app.use(express.static("dist"));
  // app.get("*", (req, res) => {
  //   res.sendFile(path.join(rootDir, "../Web/dist/index.html"));
  // });

  app.use(express.static(path.join(__dirname, "../Web/dist")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../Web/dist/index.html"));
});
 }

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

app.listen(process.env.PORT, function () {
  console.log(`Express app running on ${PORT}`);
});