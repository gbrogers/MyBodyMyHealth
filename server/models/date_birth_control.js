const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");

const Date_birth_control = connection.define(
  "Date_birth_control",
  {
    id: {
      type: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
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
