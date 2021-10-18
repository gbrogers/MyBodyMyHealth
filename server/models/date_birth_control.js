const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");
const User = require("./user");

const Date_birth_control = connection.define(
  "Date_birth_control",
  {
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    date_taken: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Date_birth_control;
