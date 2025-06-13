// app.js
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Import the todos router
const todosRouter = require('./routes/todos');

// Mount the todos router
app.use('/todos', todosRouter);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});