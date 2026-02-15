const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  skills: String,
  education: String,
  experience: String
});

module.exports = mongoose.model("Resume", resumeSchema);
