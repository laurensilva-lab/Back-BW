const { Sequelize } = require("sequelize");

const password = process.env.DB_PASS || "";

const sequelize = new Sequelize("biblioteca_db", "root", password, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
