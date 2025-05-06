const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticateJWT');

// Public Route
router.get('/public-info', (req, res) => {
  res.send('This is public data');
});

// Private Route secured with JWT
router.get('/profile', authenticateJWT, (req, res) => {
  res.json({
    message: 'Access granted to protected user profile',
    user: req.user, // Contiene el payload del JWT
  });
});

module.exports = router;

const User = require('../models/user');

router.get('/me', authenticateJWT, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ['id', 'name', 'email', 'picture'],
    });

    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});
