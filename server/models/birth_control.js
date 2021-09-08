const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");

const Birth_control = connection.define(
  "Birth_control",
  {
    id: {
      type: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.STRING,
    },
    frequency: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Birth_control;
