// backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authenticateJWT');
const User = require('../models/User');
const Product = require('../models/Product');

// Public Route
router.get('/public-info', (req, res) => {
  res.send('This is public data');
});

// Private Route secured with JWT
router.get('/profile', authenticateJWT, (req, res) => {
  res.json({
    message: 'Access granted to protected user profile',
    user: req.user,
  });
});

// Get data of the logged in user
router.get('/me', authenticateJWT, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('id name email picture');

    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get the cart of the logged in user
router.get('/me/cart', authenticateJWT, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('cart.productId');
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(user.cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el carrito' });
  }
});

// Add a product to the cart
router.post('/me/cart', authenticateJWT, async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const existingItem = user.cart.find(item => item.productId.toString() === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      user.cart.push({ productId, quantity });
    }

    await user.save();
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar al carrito' });
  }
});

// Update the quantity of a product in the cart
router.put('/me/cart', authenticateJWT, async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const item = user.cart.find(item => item.productId.toString() === productId);
    if (item) {
      item.quantity = quantity;
    }

    await user.save();
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el carrito' });
  }
});

// Remove a product from the cart
router.delete('/me/cart/:productId', authenticateJWT, async (req, res) => {
  const { productId } = req.params;

  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    user.cart = user.cart.filter(item => item.productId.toString() !== productId);
    await user.save();

    const updatedUser = await User.findById(req.user.id).populate('cart.productId');
    res.status(200).json(updatedUser.cart);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar del carrito' });
  }
});

// Clear the entire cart
router.delete('/me/cart', authenticateJWT, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    user.cart = [];
    await user.save();

    res.status(200).json([]);
  } catch (error) {
    res.status(500).json({ message: 'Error al vaciar el carrito' });
  }
});

module.exports = router;