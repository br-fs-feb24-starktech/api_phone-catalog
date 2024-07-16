const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Address = sequelize.define("Address", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  complement: {
    type: DataTypes.STRING
  },
  neighborhood: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  postalCode: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'postal_code'
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
    unique: true,
    field: 'user_id',
  }
}, {
  tableName: "addresses",
  timestamps: true,
  underscored: true,
});

Address.associate = (models) => {
  Address.belongsTo(models.User, {
    foreignKey: 'userId', 
    as: 'user',
  });
};

module.exports = Address;
