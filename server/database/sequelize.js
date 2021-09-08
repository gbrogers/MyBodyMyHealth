const Sequelize = require("sequelize");
require("dotenv").config();
// import connect from "./db";

const connection = new Sequelize(process.env.CONNECTION_STRING, {
  host: "localhost",
  dialect: "postgres",
  logQueryParameters: true,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require2: true,
      rejectUnauthorized: false,
    },
  },
});

try {
  connection.authenticate();
  console.log("good");
} catch (error) {
  console.log(`error: ${error}`);
}

module.exports = connection;
