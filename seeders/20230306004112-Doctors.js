'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    //  * Add seed commands here.
    //  *
    //  * Example:
      await queryInterface.bulkInsert('Doctors', [{
        id: 1,
        user_id: 2,
        doctor_number: "0000123",
        createdAt: new Date(),
        updatedAt: new Date()
       },
      {
        id: 2,
        user_id: 3,
        doctor_number: "0000126",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
