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
  
    precio: {
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false,
    defaultValue: 0,
  },

  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
 
});

module.exports = Book;