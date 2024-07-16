module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("Item", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    namespaceId: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'namespace_id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capacityAvailable: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      field: 'capacity_available'
    },
    capacity: {
      type: DataTypes.STRING,
      allowNull: true
    },
    priceRegular: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'price_regular'
    },
    priceDiscount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'price_discount'
    },
    colorsAvailable: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      field: 'colors_available'
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    description: {
      type: DataTypes.JSON,
      allowNull: false
    },
    screen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    resolution: {
      type: DataTypes.STRING,
      allowNull: true
    },
    processor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ram: {
      type: DataTypes.STRING,
      allowNull: true
    },
    camera: {
      type: DataTypes.STRING,
      allowNull: true
    },
    zoom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cell: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
  }, {
    tableName: "items",
    timestamps: true,
    underscored: true,
  });

  return Item;
};
