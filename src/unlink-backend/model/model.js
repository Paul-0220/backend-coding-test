const mongoose = require("mongoose");
const rideSchema = new mongoose.Schema(
  {
    startLat: {
      type: Number,
      required: true,
    },
    startLong: {
      type: Number,
      required: true,
    },
    endLat: {
      type: Number,
      required: true,
    },
    endLong: {
      type: Number,
      required: true,
    },
    riderName: {
      type: String,
      required: true,
    },
    driverName: {
      type: String,
      required: true,
    },
    driverVehicle: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Ride", rideSchema);
