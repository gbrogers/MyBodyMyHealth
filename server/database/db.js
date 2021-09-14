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
        //     bc_type: "IUD",
        //     bc_name: "Mirena",
        //     frequency: "q7y",
        //   },
        //   {
        //     bc_type: "IUD",
        //     bc_name: "Kyleena",
        //     frequency: "q5y",
        //   },
        //   {
        //     bc_type: "IUD",
        //     bc_name: "Liletta",
        //     frequency: "q7y",
        //   },
        //   {
        //     bc_type: "IUD",
        //     bc_name: "Skyla",
        //     frequency: "q3y",
        //   },
        //   {
        //     bc_type: "IUD",
        //     bc_name: "Paragard",
        //     frequency: "q12y",
        //   },
        //   {
        //     bc_type: "Birth Control Implant",
        //     bc_name: "Nexplanon",
        //     frequency: "q5y",
        //   },
        //   {
        //     bc_type: "Birth Control Shot",
        //     bc_name: "Depo-Provera",
        //     frequency: "q3m",
        //   },
        //   {
        //     bc_type: "Vaginal Ring",
        //     bc_name: "NuvaRing",
        //     frequency: "qm",
        //   },
        //   {
        //     bc_type: "Vaginal Ring",
        //     bc_name: "Annovera",
        //     frequency: "qm",
        //   },
        //   {
        //     bc_type: "Birth Control Patch",
        //     bc_name: "Xulane",
        //     frequency: "qm",
        //   },
        //   {
        //     bc_type: "Birth Control Patch",
        //     bc_name: "Twirla",
        //     frequency: "qm",
        //   },
        //   {
        //     bc_type: "Birth Control Pill",
        //     bc_name: "Combination-pill (Estrogen & Progesterone)",
        //     frequency: "qd",
        //   },
        //   {
        //     bc_type: "Birth Control Pill",
        //     bc_name: "Progesterone-Only (mini pills)",
        //     frequency: "qd",
        //   },
        //   {
        //     bc_type: "Condom",
        //     bc_name: "Condom",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_type: "Internal-Condom",
        //     bc_name: "Internal-Condom",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_type: "Diaphragm",
        //     bc_name: "Diaphragm",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_type: "Contraceptive Sponge",
        //     bc_name: "Contraceptive Sponge",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_type: "Spermicide",
        //     bc_name: "Spermicide",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_type: "Cervical-cap",
        //     bc_name: "Cervical-cap",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_name: "Fertility Awareness",
        //     bc_type: "Fertility Awareness",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_name: "Withdrawal (Pull-Out Method)",
        //     bc_type: "Withdrawal (Pull-Out Method)",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_name: "Breastfeeding",
        //     bc_type: "Breastfeeding",
        //     frequency: "q4h",
        //   },
        //   {
        //     bc_name: "Abstinence",
        //     bc_type: "Abstinence",
        //     frequency: "prn",
        //   },
        //   {
        //     bc_name: "Sterilization",
        //     bc_type: "Sterilization",
        //     frequency: "once",
        //   },
        //   {
        //     bc_name: "Vasectomy",
        //     bc_type: "Vasectomy",
        //     frequency: "once",
        //   },
        //   {
        //     bc_name: "No Method",
        //     bc_type: "No Method",
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
