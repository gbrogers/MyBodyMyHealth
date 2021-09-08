const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");

const User = connection.define(
  "User",
  {
    fname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    hashed_password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bc_expiration: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
