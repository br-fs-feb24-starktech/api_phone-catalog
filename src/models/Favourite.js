module.exports = (sequelize, DataTypes) => {
  const Favourite = sequelize.define("Favourite", {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'user_id',
        references: {
          model: 'User',
          key: 'id',
        }
      },
      productId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'product_id',
        references: {
          model: 'Product',
          key: 'id',
        }
      }
  }, {
    tableName: "favourites",
    timestamps: true,
    underscored: true,
  });

  return Favourite;
}