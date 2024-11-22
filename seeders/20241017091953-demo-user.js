'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Preethi senthilkumar',
        email: 'preethi@gmail.com',
        age:'24',
        city: 'Trichy',
        country: 'India',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Gayathri sidduraj',
        email: 'gayathri@gmail.com',
        age:'22',
        city: 'salem',
        country: 'Indonesia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ramya rahul',
        email: 'ramya@gmail.com',
        age:'24',
        city: 'combodia',
        country: 'Brazil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Harinisha',
        email: 'harini@gmail.com',
        age:'21',
        city: 'Bali',
        country: 'Indonesia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sobiya',
        email: 'sobi@gmail.com',
        age:'23',
        city: 'kjhhnu',
        country: 'USA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sarubala',
        email: 'sobi@gmail.com',
        age:'22',
        city: 'Triffdhy',
        country: 'Brazil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Deepthibala',
        email: 'deepthii@gmail.com',
        age:'20',
        city: 'CBE',
        country: 'India',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Miruna',
        email: 'miruna@gmail.com',
        age:'15',
        city: 'namakkal',
        country: 'USA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Anuritha',
        email: 'anu@gmail.com',
        age:'13',
        city: 'Chennai',
        country: 'Brazil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Sanjana',
        email: 'sanju@gmail.com',
        age:'14',
        city: 'erode',
        country: 'Japan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
