// backend/routes/products.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products o /api/products?categoria=nombreCategoria
router.get('/', async (req, res) => {
  try {
    const { categoria } = req.query;
    const query = categoria ? { type: categoria.toLowerCase() } : {};
    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).json({ message: 'Error al obtener productos' });
  }
});

// POST /api/products
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    console.error('Error al guardar producto:', error);
    res.status(400).json({ message: 'Error al guardar producto' });
  }
});

module.exports = router;
