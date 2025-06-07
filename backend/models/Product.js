// backend/models/Product.js

const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }, // óleo, acrílico, etc.
  format: { type: String, required: true }, // individual o set
  price: { type: Number, required: true },
  image: String,
  stock: { type: Number, default: 0 }
});

module.exports = mongoose.model('Product', ProductSchema);