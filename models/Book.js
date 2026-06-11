const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Book = sequelize.define("books", {
  nombre: {
    type: DataTypes.STRING,
  },
  autor: {
    type: DataTypes.STRING,
  },
  genero: {
    type: DataTypes.STRING,
  },
  año: {
    type: DataTypes.INTEGER,
  },
  paginas: {
    type: DataTypes.INTEGER,
  },
  cover: {
    type: DataTypes.STRING,
  },

  stock: {
    type: DataTypes.INTEGER,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
  },
});

module.exports = Book;
