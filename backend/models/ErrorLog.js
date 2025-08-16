const mongoose = require("mongoose");

const errorLogSchema = new mongoose.Schema({
  message: { type: String, required: true },
  stack: { type: String },
  route: { type: String },
  method: { type: String },
  statusCode: { type: Number },
  details: { type: Object },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ErrorLog", errorLogSchema);
