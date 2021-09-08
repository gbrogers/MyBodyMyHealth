const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");
const bcrypt = require("bcrypt");

const User = connection.define(
  "User",
  {
    id: {
      type: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
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
    instanceMethods: {
      generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(8));
      },
      validPassword(password) {
        return bcrypt.compare(password, this.password);
      },
    },
  }
);

module.exports = User;
