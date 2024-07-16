'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      itemId: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'item_id'
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fullPrice: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'full_price'
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      screen: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      ram: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
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


    const existingConstraints = await queryInterface.getForeignKeyReferencesForTable('products');
    const categoryConstraintExists = existingConstraints.some(constraint => (
      constraint.constraintName === 'products_category_categories_fk'
    ));

    if (!categoryConstraintExists) {
      await queryInterface.addConstraint('products', {
        type: 'foreign key',
        fields: ['category'],
        references: {
          table: 'categories',
          field: 'name'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }

    // Adicionar a restrição de chave estrangeira para o itemId, referenciando a tabela 'items'
    await queryInterface.addConstraint('products', {
      type: 'foreign key',
      fields: ['item_id'],
      references: {
        table: 'items',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Remover a restrição de chave estrangeira para a categoria, se existir
    await queryInterface.removeConstraint('products', 'products_category_categories_fk');
    await queryInterface.dropTable('products');
  }
};
