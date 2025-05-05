// models/product.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');  // Your database configuration

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Product;
