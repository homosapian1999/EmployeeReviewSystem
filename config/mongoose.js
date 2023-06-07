const mongoose = require("mongoose");

const DB = process.env.MONGO_URL;

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to Database"));

db.once("open", function () {
  console.log("Database connected successfully");
});

module.exports = db;
