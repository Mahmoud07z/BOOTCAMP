// routes/todos.js
const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
let todos = [
  { id: 1, task: 'Learn Express', completed: false },
  { id: 2, task: 'Build a REST API', completed: false }
];

// Get all to-do items
router.get('/', (req, res) => {
  res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
  const newTodo = {
    id: todos.length + 1,
    task: req.body.task,
    completed: req.body.completed || false
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  const updatedTodo = {
    id,
    task: req.body.task || todos[todoIndex].task,
    completed: req.body.completed !== undefined ? req.body.completed : todos[todoIndex].completed
  };
  
  todos[todoIndex] = updatedTodo;
  res.json(updatedTodo);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex(todo => todo.id === id);
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).end();
});

module.exports = router;