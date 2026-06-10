const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();

const SECRET_KEY = process.env.JWT_SECRET;

router.post("/register",
  async (req, res) => {

    try {

      const {
        username,
        email,
        password,
      } = req.body;

      const userExists =await User.findOne({
          where: { email },
        });

      if (userExists) {

        return res
          .status(400)
          .json({
            message:
              "Usuario ya existe",
          });

      }

      const hashedPassword =await bcrypt.hash(
          password,
          10
        );

      const newUser =await User.create({

          username,
          email,

          password:
            hashedPassword,

          role:
            "cliente",

        });

      res.json(newUser);

    } catch (error) {

      res.status(500).json({
        message:
          error.message,
      });

    }

  }
);

router.post("/login",async (req, res) => {

    try {

      const {
        email,
        password,
      } = req.body;

      const user =await User.findOne({
          where: { email },
        });

      if (!user) {

        return res
          .status(404)
          .json({
            message:
              "Usuario no encontrado",
          });

      }

      const validPassword =await bcrypt.compare(
          password,
          user.password
        );

      if (!validPassword) {

        return res
          .status(401)
          .json({
            message:
              "Contraseña incorrecta",
          });

      }

      const token =jwt.sign(
          {
            id: user.id,
            role: user.role,
          },
          SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );

      res.json({
        token,
        role: user.role,
        username:
          user.username,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

  }
);

module.exports = router;