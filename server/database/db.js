const Sequelize = require("sequelize");
const connection = require("./sequelize.js"); //connection is the instance of sequelize created using Postgres info

//Import Individual Models Here

//Add Table Associations Here

// attempt connection of DB to Sequelize
module.exports = connect = () => {
  connection
    .sync({
      alter: true, //force: true, //to drop table and re-add - don't use once you have data - obviously
      // logging: console.log
    })
    .then(() => {
      console.log("Congrats! Connection to database was successful.");
    })
    .catch((error) => {
      console.error(error);
    });
};
