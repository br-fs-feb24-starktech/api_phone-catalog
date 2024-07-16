'use strict';

const addresses = require('../old/addressesTableInfos');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('addresses', addresses, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('addresses', null, {});
  }
};
