const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");
const User = require("./user.js");

const Saved_article = connection.define(
  "Saved_article",
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
    url: {
      type: Sequelize.STRING(1234),
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Saved_articles;
