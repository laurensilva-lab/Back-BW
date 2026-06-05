const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/book.routes");

const sequelize = require("./database");

require("./models/User");
require("./models/Book");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", bookRoutes);

async function main() {

  try {

    await sequelize.sync();

    app.listen(3000);

    console.log("Servidor funcionando al 100");

  } catch (error) {

    console.log(error);

  }

}

main();