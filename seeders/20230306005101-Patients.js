'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    //  Add seed commands here.
     
    //   Example:
      await queryInterface.bulkInsert('Patients', [{
        id: 1,
        user_id: 4,
        city: "Valencia",
        createdAt: new Date (),
        updatedAt: new Date ()
      },{
        id: 2,
        user_id: 5,
        city: "Alicante",
        createdAt: new Date (),
        updatedAt: new Date ()
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
