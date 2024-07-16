'use strict';

const bcrypt = require('bcryptjs');
const users = require('../old/usersTableInfos');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedUsers = await Promise.all(users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10); 
      return {
        ...user,
        password: hashedPassword
      };
    }));

    await queryInterface.bulkInsert('users', hashedUsers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
