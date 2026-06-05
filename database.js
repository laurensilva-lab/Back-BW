const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "biblioteca__db",
  "root",
  "root",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;