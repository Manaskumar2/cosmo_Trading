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
    origin: ["http://cosmotrade.live", "http://localhost:3000","http://localhost:3333"]
  })
);




const multer = require("multer");

app.use(express.json());
const upload = multer();
app.use(upload.any());


const rootDir = path.resolve(__dirname);

if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: ".env.development" });
} else if (process.env.NODE_ENV === "testenv") {
  dotenv.config({ path: ".env.testenv" });
} else if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: ".env.production" });
}



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
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "development"
) {
  app.use(express.static("ui"));
  app.use(express.static("sanity"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(rootDir, "ui/index.html"));
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