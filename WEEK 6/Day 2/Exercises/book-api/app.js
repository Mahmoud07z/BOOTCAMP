const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON

// Temporary in-memory "database"
const books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 }
];

// Routes will go here...

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId);
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});

app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
});
