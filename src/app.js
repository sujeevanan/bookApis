const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const booksRoutes = require("./routes/books");
const swaggerDocs = require("../src/docs/swagger");

//use express
const app = express();

//use swagger
swaggerDocs(app);

//use cors policy
app.use(cors());
app.use(helmet());
app.use(express.json());

//use the routes
app.use("/api/books", booksRoutes);

//error response if the request url is wrong
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

module.exports = app;
