// server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/dbConfig');

const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
}));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Rembrandt Gallery API!');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);  // Includes Google login and manual registration

// Sync database and start server
sequelize.sync()
  .then(() => {
    console.log('Database & tables synced!');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });