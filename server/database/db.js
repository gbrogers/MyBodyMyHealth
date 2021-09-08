const connection = require("./sequelize.js"); //connection is the instance of sequelize created using Postgres info

//Import Individual Models Here
const User = require(".././models/user.jsx");
const Saved_article = require(".././models/saved_article.jsx");
const Note = require(".././models/note.jsx");
const Date_menstruation = require(".././models/date_menstruation.jsx");
const Date_birth_control = require(".././models/date_birth_control.jsx");
const Birth_control = require(".././models/birth_control.jsx");

//Add Table Associations Here

//one-to-one
User.belongsTo(Birth_control);

// one-to-many
User.hasMany(Date_birth_control);
User.hasMany(Date_menstruation);
User.hasMany(Note);
User.hasMany(Saved_article);

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
