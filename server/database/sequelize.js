const Sequelize = require("sequelize");
require("dotenv").config();
// const connect = require("./db");
// const { DATABASE, DB_USER, DB_PASSWORD } = process.env;

// const connection = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
const connection = new Sequelize(process.env.CONNECTION_STRING, {
  host: "localhost",
  logQueryParameters: true,
  dialect: "postgres",
  // operatorsAliases: false,
  dialectOptions: {
    ssl: {
      require2: true,
      rejectUnauthorized: false,
    },
  },
});

// async function testConnection() {
//   try {
//     await connection.authenticate();
//     console.log("good");
//   } catch (error) {
//     console.log(`error: ${error}`);
//   }
// }

// testConnection();

module.exports = connection;
