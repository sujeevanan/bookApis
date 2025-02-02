const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Books API",
      version: "1.0.0",
      description: "Simple Books API",
    },
  },
  apis: ["./src/routes/books.js"],
};

const specs = swaggerJsDoc(options);

module.exports = (app) =>
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
