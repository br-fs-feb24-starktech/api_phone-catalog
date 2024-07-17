const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Favourite = sequelize.define("Favourite", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'users',
      key: 'id',
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'product_id',
    references: {
      model: 'products',
      key: 'id',
    }
  }
}, {
  tableName: "favourites",
  timestamps: true,
  underscored: true,
});

module.exports = Favourite;
