// routes/userRoutes.js

const express = require('express');
const router = express.Router();

// Example route for fetching users
router.get('/', (req, res) => {
  res.send('User route is working!');
});

// Add more routes for user-related functionality
module.exports = router;
