const express =require("express");

const Book =require("../models/Book");

const verifyToken =require("../middlewares/verifyToken");

const verifyAdmin =require("../middlewares/verifyAdmin");

const router =express.Router();

router.get("/books",
  async (req, res) => {

    try {

      const books =
        await Book.findAll();

      res.json(books);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);

router.post("/books",
  verifyToken,
  verifyAdmin,
  async (req, res) => {

    try {

      const newBook =await Book.create(
          req.body
        );

      res.json(newBook);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);

router.put("/books/:id",
  verifyToken,
  verifyAdmin,
  async (req, res) => {

    try {

      const { id } =
        req.params;

      await Book.update(
        req.body,
        {
          where: { id },
        }
      );

      const updatedBook =
        await Book.findByPk(id);

      res.json(
        updatedBook
      );

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);

router.delete("/books/:id",
  verifyToken,
  verifyAdmin,
  async (req, res) => {

    try {

      const { id } =
        req.params;

      await Book.destroy({
        where: { id },
      });

      res.json({
        message:
          "Libro eliminado correctamente",
      });

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);

module.exports =router;