const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema(
  {
    caseNumber: {
      type: String,
      required: true,
      unique: true,
    },
    caseTitle: {
      type: String,
      required: true,
    },
    caseType: {
      type: String,
      required: true,
    },
    caseParties: {
      type: Array,
      required: true,
    },
    caseFilingDate: {
      type: Date,
      required: true,
    },
    caseStatus: {
      type: String,
      required: true,
    },
    nextHearingDate: {
      type: Date,
    },
    judicialOfficer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Judge",
    },
    advocates: {
      type: Array,
      required: true,
    },
    caseDisposition: {
      type: String,
    },
    documentsFiled: {
      type: Array,
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

module.exports = mongoose.model("Case", caseSchema);
