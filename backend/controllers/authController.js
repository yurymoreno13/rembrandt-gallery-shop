// backend/controllers/authController.js

const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const loginWithGoogle = async (req, res) => {

  const { token } = req.body;

  try {
    let ticket;
    try {
      ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
    } catch (err) {
      console.error('Error al verificar el token de Google:', err.message);
      return res.status(401).json({ error: 'No se pudo verificar el token con Google' });
    }

    const payload = ticket.getPayload();
    const { sub, name, email, picture } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        name,
        email,
        googleId: sub,
        picture,
      });
      await user.save();
    }

    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({ user, token: accessToken });
  } catch (error) {
    res.status(401).json({ error: 'Invalid Google token' });
  }
};

const manualRegister = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: 'Could not register user' });
  }
};

module.exports = { loginWithGoogle, manualRegister };