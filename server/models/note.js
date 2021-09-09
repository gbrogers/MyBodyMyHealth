const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");
const User = require("./user.js");

const Note = connection.define(
  "Note",
  {
    // id: {
    //   type: Sequelize.UUID,
    //   primaryKey: true,
    //   allowNull: false,
    // },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    note_date: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Note;
