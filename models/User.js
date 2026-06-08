const { DataTypes } = require("sequelize");

const sequelize = require("../database");

const User = sequelize.define("users", {

  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  role: {
    type: DataTypes.ENUM(
      "admin",
      "cliente"
    ),
    allowNull: false,
    defaultValue: "cliente",
  },

});

module.exports = User;