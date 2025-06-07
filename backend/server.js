// backend/server.js

require('dotenv').config();
const connectDB = require('./config/mongo');

// Connect to MongoDB
connectDB();

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const products = require('./routes/products');
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

app.use('/api/products', products);
app.use('/api/users', userRoutes); // Includes user profile and order history
app.use('/api/auth', authRoutes);  // Includes Google login and manual registration

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
