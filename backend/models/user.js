// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig'); // Importing sequelize from dbConfig

// Define the User model
const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  googleId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  timestamps: true,  // This automatically adds createdAt and updatedAt
  tableName: 'users', // This is optional, but you can specify the table name
});

module.exports = User;
