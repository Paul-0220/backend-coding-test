/* eslint-disable no-undef */
"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const route = require("./route/route");

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// *middleware
app.use("/", route);

// //* Route testing...
// app.get("/health", (req, res) => {
//   res.send("Testing the route");
// });

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
app.listen(8010, () => {
  console.log("server running successfully at Port:8010");
});
