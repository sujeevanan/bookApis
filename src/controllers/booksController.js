const { books } = require("../models/book");

//get all the books with pagination
exports.getBooks = (req, res) => {
  // Get page and limit from query parameters
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10; // 10 books per page
  const offset = (page - 1) * limit; // Calculate offset

  // Get the paginated books from the books array
  const paginatedBooks = books.slice(offset, offset + limit);

  // Return the paginated books along with metadata
  res.json({
    books: paginatedBooks,
    totalBooks: books.length,
    currentPage: page,
    totalPages: Math.ceil(books.length / limit),
  });
};

//getBookId
exports.getBookById = (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
};

//add a new book
exports.addBook = (req, res) => {
  const { name, author, publishedYear } = req.body;
  const newBook = { id: books.length + 1, name, author, publishedYear };
  books.push(newBook);
  res.status(201).json(newBook);
};

//update a book
exports.updateBook = (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: "Book not found" });

  book.name = req.body.name;
  book.author = req.body.author;
  book.publishedYear = req.body.publishedYear;
  res.json(book);
};

//delete a book
exports.deleteBook = (req, res) => {
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Book not found" });

  books.splice(index, 1);
  res.status(204).send();
};
