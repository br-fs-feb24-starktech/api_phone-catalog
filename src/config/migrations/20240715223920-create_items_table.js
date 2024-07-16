'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('items', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      namespace_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      capacity_available: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      capacity: {
        type: Sequelize.STRING,
        allowNull: true
      },
      price_regular: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      price_discount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      colors_available: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true
      },
      color: {
        type: Sequelize.STRING,
        allowNull: true
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      description: {
        type: Sequelize.JSON,
        allowNull: false
      },
      screen: {
        type: Sequelize.STRING,
        allowNull: true
      },
      resolution: {
        type: Sequelize.STRING,
        allowNull: true
      },
      processor: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ram: {
        type: Sequelize.STRING,
        allowNull: true
      },
      camera: {
        type: Sequelize.STRING,
        allowNull: true
      },
      zoom: {
        type: Sequelize.STRING,
        allowNull: true
      },
      cell: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
   
    await queryInterface.addIndex('items', ['category']);

    await queryInterface.addConstraint('items', {
      fields: ['category'],
      type: 'foreign key',
      name: 'fk_items_category',
      references: {
        table: 'categories',
        field: 'name'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('items', 'fk_items_category');
    await queryInterface.dropTable('items');
  }
};
