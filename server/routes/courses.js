const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Seed courses (for demo purposes)
router.post('/seed', async (req, res) => {
  try {
    const coursesData = req.body;
    await Course.deleteMany({}); // Clear existing
    const createdCourses = await Course.insertMany(coursesData);
    res.status(201).json(createdCourses);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
