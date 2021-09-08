const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");

const Date_birth_control = connection.define(
  "Date_birth_control",
  {
    id: {
      type: Sequelize.UUIDV4,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Date_birth_control;
