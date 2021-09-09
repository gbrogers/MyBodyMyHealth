const Sequelize = require("sequelize");
require("dotenv").config();

const connection = new Sequelize(process.env.CONNECTION_STRING, {
  host: "localhost",
  logQueryParameters: true,
  dialect: "postgres",
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
