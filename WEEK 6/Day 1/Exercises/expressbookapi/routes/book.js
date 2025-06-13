const express = require('express');
const router = express.Router();

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
];

const generateId = () => {
  return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;
};

router.get('/', (req, res) => {
  res.json(books);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(book => book.id === id);

  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }

  res.json(book);
});

router.post('/', (req, res) => {
  if (!req.body.title || !req.body.author) {
    return res.status(400).json({ error: 'Title and author are required' });
  }

  const newBook = {
    id: generateId(),
    title: req.body.title,
    author: req.body.author,
    year: req.body.year || null
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex(book => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const updatedBook = {
    id,
    title: req.body.title || books[bookIndex].title,
    author: req.body.author || books[bookIndex].author,
    year: req.body.year || books[bookIndex].year
  };

  books[bookIndex] = updatedBook;
  res.json(updatedBook);
});

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex(book => book.id === id);

  if (bookIndex === -1) {
    return res.status(404).json({ error: 'Book not found' });
  }

  books = books.filter(book => book.id !== id);
  res.status(204).end();
});

module.exports = router;