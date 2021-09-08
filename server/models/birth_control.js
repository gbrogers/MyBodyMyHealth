const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");

const Birth_control = connection.define(
  "Birth_control",
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

module.exports = Birth_control;
