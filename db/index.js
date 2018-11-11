const Sequelize = require('sequelize');

const db = new Sequelize('db', null, null, {
  dialect: 'sqlite',
  storage: 'db.sqlite',
});

db.sync().then(() => {});

module.exports = db;
