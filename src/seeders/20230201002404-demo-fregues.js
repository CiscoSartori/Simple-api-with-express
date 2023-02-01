'use strict';

// {import('sequelize-cli').Migration}
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('fregues', [
      {
        codigoDeBarra: 'John Doe',
        tamanhoPe: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoDeBarra: 'Cisco pintudo',
        tamanhoPe: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoDeBarra: 'Elias Maromba',
        tamanhoPe: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('fregues', null, {});
  }
};
