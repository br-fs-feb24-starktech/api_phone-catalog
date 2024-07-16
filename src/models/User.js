const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    allowNull: false,
    defaultValue: 'user'
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: "users",
  timestamps: true,
  underscored: true,
});

User.associate = models => {
  User.hasMany(models.Address, {
    foreignKey: 'userId',
    as: 'addresses'
  });
  User.hasMany(models.Favourite, {
    foreignKey: 'userId',
    as: 'favourites'
  });
  User.hasMany(models.Order, {
    foreignKey: 'userId',
    as: 'orders'
  });
};

module.exports = User;
