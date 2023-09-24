const mongoose = require("mongoose");

const judgeSchema = new mongoose.Schema(
  {
    judgeName: {
      type: String,
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    yearsOfExperience: {
      type: Number,
      required: true,
    },
    court: {
      type: String,
      required: true,
    },
    roomAddress: {
      type: String,
      required: true,
    },
    photograph: {
      type: String,
    },
    casesHandling: {
      type: Array,
      required: true,
    },
    rating: {
      type: Number,
    },
    availability: {
      type: Object,
      required: true,
    },
    bookedDetails: {
      type: Object,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Judge", judgeSchema);
