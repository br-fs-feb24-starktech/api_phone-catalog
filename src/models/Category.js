// models/category.js
module.exports = (sequelize, DataTypes) => {
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
      unique: true // Adiciona restrição de exclusividade
    },
  }, {
    tableName: "categories",
    timestamps: true,
    underscored: true,
  });

  Category.associate = models => {
    Category.hasMany(models.Product, {
      foreignKey: 'category',
      as: 'products',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  };

  return Category;
};
