const Sequelize = require("sequelize");
require("dotenv").config();

const connection = new Sequelize(process.env.CONNECTION_STRING);

const connection = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  logQueryParameters: true,
  operatorsAliases: false,
});

module.exports = connection;
