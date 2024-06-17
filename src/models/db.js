/// conexão com o banco


const  Sequelize = require('sequelize');

  const sequelize = new Sequelize('escola', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports = sequelize;
