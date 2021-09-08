const Sequelize = require("sequelize");
const connection = require("./database/sequelize.js");

const Note = connection.define(
  "Note",
  {
    fname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Note;
