const { body, validationResult } = require("express-validator");

exports.validateBook = [
  //name validation
  body("name").notEmpty().withMessage("Name is required"),

  //author vaidation
  body("author").notEmpty().withMessage("Author is required"),

  //published year validation
  body("publishedYear")
    .isInt({ min: 1000, max: new Date().getFullYear() })
    .withMessage("Valid year required"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
