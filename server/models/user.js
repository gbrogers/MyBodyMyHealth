const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");
const bcrypt = require("bcrypt");
const Birth_control = require("./birth_control.js");

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
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bc_expiration: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    // birth_control: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: Birth_control,
    //     key: "id",
    //   },
    // },
  },

  {
    connection,
    timestamps: false,
    // instanceMethods: {
    //   generateHash(password) {
    //     return bcrypt.hash(password, bcrypt.genSaltSync(8));
    //   },
    //   validPassword(password) {
    //     return bcrypt.compare(password, this.password);
    //   },
    // },
  }
);

module.exports = User;
