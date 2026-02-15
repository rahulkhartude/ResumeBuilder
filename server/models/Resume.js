const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  personalInfo: {
    fullName: String,
    phone: String,
    email: String,
    summary: String
  }
});

module.exports = mongoose.model("Resume", resumeSchema);
