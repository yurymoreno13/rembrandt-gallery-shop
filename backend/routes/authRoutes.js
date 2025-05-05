const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const { User } = require('../models/user');  // Ensure you're importing the Sequelize model
const jwt = require('jsonwebtoken');  // Import jsonwebtoken for JWT creation

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Function to generate JWT token
const generateJwtToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name }, 
    process.env.JWT_SECRET,  // Ensure you have a JWT_SECRET in your .env file
    { expiresIn: '1h' }  // Expiry time for the token, can be adjusted as needed
  );
};

// Google login route
router.post('/google', async (req, res) => {
  const { token } = req.body;

  try {
    // Verifying the token with Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,  // Make sure this matches your Google OAuth credentials
    });

    const payload = ticket.getPayload();

    // Check if the user already exists in the database using Sequelize
    let user = await User.findOne({ where: { googleId: payload.sub } });

    if (!user) {
      // If the user doesn't exist, create a new one
      user = await User.create({
        name: payload.name,
        email: payload.email,
        googleId: payload.sub,
        picture: payload.picture,
      });
    }

    // Generate a JWT token for the user
    const userToken = generateJwtToken(user);

    // Send the response with user data and the generated JWT token
    res.status(200).json({ user, token: userToken });

  } catch (error) {
    console.error('Error during Google login:', error);
    res.status(401).json({ message: "Invalid Google token" });
  }
});

module.exports = router;
