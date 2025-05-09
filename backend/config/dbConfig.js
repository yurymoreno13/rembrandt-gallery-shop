// config/dbConfig.js

const { Sequelize } = require('sequelize');

// Example database configuration
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = sequelize;
