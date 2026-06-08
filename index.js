const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./database");

require("./models/User");
require("./models/Book");

const authRoutes = require("./routes/auth.routes");
const bookRoutes = require("./routes/book.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", bookRoutes);

async function main() {
  try {

    await sequelize.sync();

    app.listen(process.env.PORT, () => {
      console.log(
        `Servidor funcionando en puerto ${process.env.PORT}`
      );
    });

  } catch (error) {
    console.log(error);
  }
}

main();