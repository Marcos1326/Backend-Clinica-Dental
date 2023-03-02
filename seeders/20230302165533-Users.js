'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('Users', [
        {id:1,name:"Pepe",surname:"Gonzalez",phone:"666777888",email:"Pepe@gmail.com",password:"12345",roles_id:1,createdAt: new Date(),updatedAt:new Date()},
        {id:2,name:"David",surname:"Soto",phone:"111999222",email:"David@gmail.com",password:"12345",roles_id:2,createdAt: new Date(),updatedAt:new Date()},
        {id:3,name:"Marcos",surname:"Garrido",phone:"444222777",email:"Marcos@gmail.com",password:"12345",roles_id:2,createdAt: new Date(),updatedAt:new Date()},
        {id:4,name:"Alyna",surname:"Nastas",phone:"444777222",email:"Alyna@gmail.com",password:"12345",roles_id:3,createdAt: new Date(),updatedAt:new Date()},
        {id:5,name:"Jordi",surname:"Jerico",phone:"222000111",email:"Jordi@gmail.com",password:"12345",roles_id:3,createdAt: new Date(),updatedAt:new Date()}
      ], {});
    
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
