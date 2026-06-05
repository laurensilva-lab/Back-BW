const express = require("express");

const Book = require("../models/Book");

const router = express.Router();


 
router.get("/books", async (req, res) => {

  const books = await Book.findAll();

  res.json(books);

});


 
router.post("/books", async (req, res) => {

  try {

    const newBook = await Book.create(req.body);

    res.json(newBook);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;