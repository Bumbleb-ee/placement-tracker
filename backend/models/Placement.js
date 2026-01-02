const mongoose = require("mongoose");

const placementSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  role: String,
  status: {
    type: String,
    default: "Applied"
  },
  appliedDate: {
    type: Date,
    default: Date.now
  },
  notes: String
});

module.exports = mongoose.model("Placement", placementSchema);
