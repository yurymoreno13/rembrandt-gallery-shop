const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const loginWithGoogle = async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { sub, name, email, picture } = payload;

    let user = await User.findOne({ where: { email } });

    if (!user) {
      user = await User.create({
        name,
        email,
        googleId: sub,
        picture,
      });
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
  const { name, email } = req.body;

  try {
    let user = await User.findOne({ where: { email } });

    if (!user) {
      user = await User.create({ name, email });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    res.json({ user, token });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
};

module.exports = { loginWithGoogle, manualRegister };
