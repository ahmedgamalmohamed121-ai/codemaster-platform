const mongoose = require('mongoose');
const Course = require('./models/Course');
require('dotenv').config();

const courses = [
  {
    title: 'React Mastery',
    description: 'Master React from basics to advanced concepts with hands-on projects',
    instructor: 'Ahmed Hassan',
    level: 'intermediate',
    duration: '24 hours',
    lessons: 48,
    students: 15420,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
    price: 99,
    isPremium: true,
    isNew: false,
    isPopular: true
  },
  {
    title: 'Python for Beginners',
    description: 'Start your programming journey with Python fundamentals',
    instructor: 'Sarah Mohamed',
    level: 'beginner',
    duration: '18 hours',
    lessons: 36,
    students: 28500,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400',
    price: 0,
    isPremium: false,
    isNew: true,
    isPopular: true
  },
  {
    title: 'Advanced TypeScript',
    description: 'Deep dive into TypeScript advanced patterns and best practices',
    instructor: 'Omar Khalil',
    level: 'advanced',
    duration: '20 hours',
    lessons: 40,
    students: 8900,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
    price: 129,
    isPremium: true,
    isNew: true,
    isPopular: false
  },
  {
    title: 'Node.js Backend Development',
    description: 'Build scalable backend applications with Node.js and Express',
    instructor: 'Fatima Ali',
    level: 'intermediate',
    duration: '22 hours',
    lessons: 44,
    students: 12300,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400',
    price: 89,
    isPremium: true,
    isNew: false,
    isPopular: true
  },
  {
    title: 'CSS & Tailwind Mastery',
    description: 'Create beautiful responsive designs with modern CSS and Tailwind',
    instructor: 'Mohammed Ibrahim',
    level: 'beginner',
    duration: '16 hours',
    lessons: 32,
    students: 19800,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400',
    price: 0,
    isPremium: false,
    isNew: false,
    isPopular: true
  },
  {
    title: 'Full Stack Development',
    description: 'Complete full stack development with React, Node.js, and MongoDB',
    instructor: 'Layla Ahmed',
    level: 'advanced',
    duration: '40 hours',
    lessons: 80,
    students: 6500,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400',
    price: 199,
    isPremium: true,
    isNew: true,
    isPopular: false
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Course.deleteMany({});
    await Course.insertMany(courses);
    console.log('✅ Database Seeded Successfully');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding database:', err);
    process.exit(1);
  }
};

seedDB();
