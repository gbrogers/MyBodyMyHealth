const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");
const User = require("./user.js");
console.log(connection);

const Saved_article = connection.define(
  "Saved_article",
  {
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

module.exports = Saved_article;
