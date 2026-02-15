const express = require("express");
const Resume = require("../models/Resume");
const router = express.Router();

// Save Resume
router.post("/", async (req, res) => {
  try {
    const resume = await Resume.create(req.body);
    res.json({ message: "Resume Saved Successfully", resume });
  } catch (err) {
    res.status(500).json({ message: "Error Saving Resume" });
  }
});

module.exports = router;
