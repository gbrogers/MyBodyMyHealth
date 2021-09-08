const Sequelize = require("sequelize");
const connection = require("./database/sequelize.js");

const Saved_article = connection.define(
  "Saved_article",
  {
    id: {
      type: Sequelize.UUIDV4,
      allowNull: false,
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
