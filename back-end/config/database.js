const {Sequelize} = require('sequelize');
module.exports = new Sequelize('NoticeBoardApp', 'postgres', 'pkun@088', {
    host: 'localhost',
    dialect: 'postgres'
  });