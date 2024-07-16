module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Product',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      totalAmount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: 'total_amount',
      },
      paymentStatus: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'payment_status',
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'payment_method',
      },
      shippingMethod: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'shipping_method',
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      tableName: 'orders',
      timestamps: true,
      underscored: true,
    }
  );

  return Order;
};
