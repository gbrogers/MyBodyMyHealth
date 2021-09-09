const Sequelize = require("sequelize");
const connection = require("./sequelize.js"); //connection is the instance of sequelize created using Postgres info

//Import Individual Models Here
const User = require(".././models/user.js");
const Saved_article = require(".././models/saved_article.js");
const Note = require(".././models/note.js");
const Date_menstruation = require(".././models/date_menstruation.js");
const Date_birth_control = require(".././models/date_birth_control.js");
const Birth_control = require(".././models/birth_control.js");

//Add Table Associations Here

//one-to-one
User.belongsTo(Birth_control, {
  foreignKey: "birth_contol_id",
  targetKey: "id",
});

// one-to-many
User.hasMany(Date_birth_control, {
  foreignKey: "user_id",
  targetKey: "id",
});
User.hasMany(Date_menstruation, {
  foreignKey: "user_id",
  targetKey: "id",
});
User.hasMany(Note, {
  foreignKey: "user_id",
  targetKey: "id",
});
User.hasMany(Saved_article, {
  foreignKey: "user_id",
  targetKey: "id",
});

// attempt connection of DB to Sequelize
// console.log("conection" + { connection });
module.exports = {
  connect: () => {
    connection
      .sync({
        force: true,
        //alter: true, //this find differences and alters as needed vs force dropping tables
        //force: true, //to drop table and re-add - don't use once you have data - obviously
        // logging: console.log
      })
      .then(() => {
        console.log("Congrats! Connection to database was successful.");
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
