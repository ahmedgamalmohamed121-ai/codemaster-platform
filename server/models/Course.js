const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  instructor: String,
  level: String,
  duration: String,
  lessons: Number,
  students: Number,
  rating: Number,
  image: String,
  price: Number,
  isPremium: Boolean,
  isNew: Boolean,
  isPopular: Boolean,
});

module.exports = mongoose.model('Course', courseSchema);
