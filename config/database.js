const  Sequelize  = require('sequelize');

const sequelize = new Sequelize('db3', 'root', 'Sarubala', {
    host: 'localhost',
    dialect: 'mariadb'
});

module.exports =  sequelize;
