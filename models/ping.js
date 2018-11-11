const Sequelize = require('sequelize');

const db = require('../db');

const Ping = db.define('ping', { timestamp: Sequelize.INTEGER });

module.exports = Ping;
