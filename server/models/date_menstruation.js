const Sequelize = require("sequelize");
const connection = require("./database/sequelize.js");

const Date_menstruation = connection.define(
  "Date_menstruation",
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

module.exports = Date_menstruation;
