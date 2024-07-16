const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
}, {
  tableName: "categories",
  timestamps: true,
  underscored: true,
});


module.exports = Category;