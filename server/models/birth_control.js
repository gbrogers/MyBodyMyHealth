const Sequelize = require("sequelize");
const connection = require("../database/sequelize.js");

const Birth_control = connection.define(
  "Birth_control",
  {
    // id: {
    //   type: Sequelize.UUID,
    //   primaryKey: true,
    //   allowNull: false,
    // },
    bc_name: {
      type: Sequelize.STRING,
    },
    bc_type: {
      type: Sequelize.STRING,
    },
    frequency: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Birth_control;
