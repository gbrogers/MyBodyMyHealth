const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");

const Date_menstruation = connection.define(
  "Date_menstruation",
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
    date_occurred: {
      type: Sequelize.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Date_menstruation;