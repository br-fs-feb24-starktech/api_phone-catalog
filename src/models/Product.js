// models/product.js
module.exports = (sequelize, DataTypes) => {
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
      references: {
        model: 'categories',
        key: 'name'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    itemId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      field: 'item_id'
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
    Product.belongsTo(models.Category, {
      foreignKey: 'category',
      as: 'categoryDetails',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    Product.belongsTo(models.Item, {
      foreignKey: 'itemId',
      as: 'itemDetails',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Product;
};
