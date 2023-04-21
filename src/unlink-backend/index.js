"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//* Route testing...
app.get("/test", (req, res) => {
  res.send("Testing the route");
});

//*Database Connection.....
mongoose
  .connect(
    "mongodb+srv://prashannjeetDev:patan%40hi1502@cluster0.hihh0mk.mongodb.net/unlink-backend?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("conncetion to database is successfull");
  })
  .catch((err) => {
    console.log(err);
  });

//* Server..
app.listen(3000, () => {
  console.log("server running successfully at Port:3000");
});
