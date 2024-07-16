const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  itemId: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'item_id',
    references: {
      model: 'items',
      key: 'id'
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fullPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: 'full_price'
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  screen: {
    type: DataTypes.STRING
  },
  capacity: {
    type: DataTypes.STRING
  },
  color: {
    type: DataTypes.STRING
  },
  ram: {
    type: DataTypes.STRING
  },
  year: {
    type: DataTypes.INTEGER
  },
  image: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    field: 'updated_at'
  }
}, {
  tableName: "products",
  timestamps: true,
  underscored: true,
});

Product.associate = models => {
  Product.belongsTo(models.Item, {
    foreignKey: 'itemId',
    as: 'item'
  });
};

module.exports = Product;
