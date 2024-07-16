<<<<<<< HEAD
require('dotenv').config();

module.exports = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "host": process.env.DB_HOST,
  "dialect": process.env.DB_DIALECT,
  "port": process.env.DB_PORT
}
=======
// require('dotenv').config();

// module.exports = {
//   "username": process.env.DB_USER,
//   "password": process.env.DB_PASS,
//   "database": process.env.DB_NAME,
//   "host": process.env.DB_HOST,
//   "dialect": process.env.DB_DIALECT,
//   "port": process.env.DB_PORT
// }

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  }
);

module.exports = sequelize;
>>>>>>> main
