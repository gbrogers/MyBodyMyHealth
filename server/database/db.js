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
  foreignKey: "birth_control_id",
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
        alter: true, //this find differences and alters as needed vs force dropping tables
        //force: true, //to drop table and re-add - don't use once you have data - obviously
        // logging: console.log
      })
      .then(() => {
        // Birth_control.bulkCreate([
        //   {
        //     bc_type: "iud",
        //     bc_name: "Mirena",
        //     frequency: "q7y",
        //   },
        //   {
        //     bc_type: "iud",
        //     bc_name: "Kyleena",
        //     frequency: "q5y",
        //   },
        //   {
        //     bc_type: "iud",
        //     bc_name: "Liletta",
        //     frequency: "q7y",
        //   },
        //   {
        //     bc_type: "iud",
        //     bc_name: "Skyla",
        //     frequency: "q3y",
        //   },
        //   {
        //     bc_type: "iud",
        //     bc_name: "Paragard",
        //     frequency: "q12y",
        //   },
        //   {
        //     bc_type: "implant",
        //     bc_name: "Nexplanon",
        //     frequency: "q5y",
        //   },
        //   {
        //     bc_type: "shot",
        //     bc_name: "Depo-Provera",
        //     frequency: "q3m",
        //   },
        //   {
        //     bc_type: "ring",
        //     bc_name: "NuvaRing",
        //     frequency: "qm",
        //   },
        //   {
        //     bc_type: "ring",
        //     bc_name: "Annovera",
        //     frequency: "qm",
        //   },
        //   {
        //     bc_type: "patch",
        //     bc_name: "Xulane",
        //     frequency: "qm",
        //   },
        //   {
        //     bc_type: "patch",
        //     bc_name: "Twirla",
        //     frequency: "qm",
        //   },
        //   {
        //     bc_type: "pill",
        //     bc_name: "Combination-pill",
        //     frequency: "qd",
        //   },
        //   {
        //     bc_type: "pill",
        //     bc_name: "progesterone-only",
        //     frequency: "qd",
        //   },
        //   {
        //     bc_type: "condom",
        //     bc_name: "condom",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_type: "internal-condom",
        //     bc_name: "internal-condom",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_type: "diaphragm",
        //     bc_name: "diaphragm",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_type: "sponge",
        //     bc_name: "sponge",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_type: "spermicide",
        //     bc_name: "spermicide",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_type: "cervical-cap",
        //     bc_name: "cervical-cap",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_name: "fam",
        //     bc_type: "fam",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_name: "withdrawal",
        //     bc_type: "withdrawal",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_name: "breastfeeding",
        //     bc_type: "breastfeeding",
        //     frequency: "q4h",
        //   },
        //   {
        //     bc_name: "abstinence",
        //     bc_type: "abstinence",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_name: "sterilization",
        //     bc_type: "sterilization",
        //     frequency: "once",
        //   },
        //   {
        //     bc_name: "vasectomy",
        //     bc_type: "vasectomy",
        //     frequency: "once",
        //   },
        //   {
        //     bc_name: "no-method",
        //     bc_type: "no-method",
        //     frequency: "never",
        //   },
        // ]);
        console.log("Congrats! Connection to database was successful.");
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
