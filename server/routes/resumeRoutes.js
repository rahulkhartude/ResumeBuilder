const express = require("express");
const Resume = require("../models/Resume");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Create Resume
router.post("/", auth, async (req, res) => {
  const resume = await Resume.create({
    user: req.user,
    ...req.body
  });

  res.json(resume);
});

// Get Resume
router.get("/", auth, async (req, res) => {
  const resume = await Resume.findOne({ user: req.user });
  res.json(resume);
});

module.exports = router;
