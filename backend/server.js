// server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/dbConfig');  // Importing sequelize instance
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());  // To parse JSON data
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from frontend
}));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Rembrandt Gallery API!');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Sync the database
sequelize.sync()
  .then(() => {
    console.log('Database & tables synced!');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
