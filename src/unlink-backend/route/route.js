const express = require("express");
const router = express.Router();

//* Route testing...
router.get("/health", (req, res) => {
  res.send("Testing the route");
});

module.exports = router;
