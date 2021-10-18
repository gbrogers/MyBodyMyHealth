const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");
const User = require("./user");

const Date_menstruation = connection.define(
  "Date_menstruation",
  {
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    date_occurred: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Date_menstruation;
