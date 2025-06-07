// backend/seedProducts.js

require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');
const connectDB = require('./config/mongo');

const seedProducts = [
  // Óleos
  {
    name: 'Óleo Rojo Carmesí',
    type: 'oleos',
    format: 'individual',
    price: 18000,
    image: '',
    stock: 20
  },
  {
    name: 'Set de Óleos Profesional',
    type: 'oleos',
    format: 'set',
    price: 95000,
    image: '',
    stock: 10
  },
  // Acrílicos
  {
    name: 'Acrílico Azul Ultramar',
    type: 'acrilicos',
    format: 'individual',
    price: 12000,
    image: '',
    stock: 25
  },
  {
    name: 'Set de Acrílicos Básico',
    type: 'acrilicos',
    format: 'set',
    price: 65000,
    image: '',
    stock: 15
  },
  // Acuarelas
  {
    name: 'Pastilla Acuarela Verde',
    type: 'acuarelas',
    format: 'individual',
    price: 10000,
    image: '',
    stock: 30
  },
  {
    name: 'Set de Acuarelas Premium',
    type: 'acuarelas',
    format: 'set',
    price: 78000,
    image: '',
    stock: 12
  },
  // Pasteles
  {
    name: 'Pastel Seco Negro',
    type: 'pasteles',
    format: 'individual',
    price: 8500,
    image: '',
    stock: 40
  },
  {
    name: 'Set de Pasteles Suaves',
    type: 'pasteles',
    format: 'set',
    price: 42000,
    image: '',
    stock: 18
  },
  // Pinceles
  {
    name: 'Pincel para Óleo No.6',
    type: 'pinceles',
    format: 'individual',
    price: 9500,
    image: '',
    stock: 35
  },
  {
    name: 'Set de Pinceles para Acrílico',
    type: 'pinceles',
    format: 'set',
    price: 52000,
    image: '',
    stock: 14
  }
];

const runSeeder = async () => {
  await connectDB();
  await Product.deleteMany({});
  await Product.insertMany(seedProducts);
  console.log('Base de datos poblada con productos');
  mongoose.disconnect();
};

runSeeder();