// connection.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('superbaterias-bd', 'root', 'LgSc06042004', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
