const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const app = express();
const PORT = 5000;

app.use(express.json());

const TASKS_FILE = path.join(__dirname, 'tasks.json');

// Utility: Read tasks from file
const readTasks = () => {
  try {
    const data = fs.readFileSync(TASKS_FILE);
    return JSON.parse(data);
  } catch (err) {
    throw new Error('Error reading tasks file');
  }
};

// Utility: Write tasks to file
const writeTasks = (tasks) => {
  try {
    fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
  } catch (err) {
    throw new Error('Error writing to tasks file');
  }
};

// GET /tasks
router.get('/tasks', (req, res) => {
  try {
    const tasks = readTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /tasks/:id
router.get('/tasks/:id', (req, res) => {
  try {
    const tasks = readTasks();
    const task = tasks.find((t) => t.id === parseInt(req.params.id));
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /tasks
router.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }
  try {
    const tasks = readTasks();
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      description,
    };
    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /tasks/:id
router.put('/tasks/:id', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }
  try {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex((t) => t.id === parseInt(req.params.id));
    if (taskIndex === -1) return res.status(404).json({ message: 'Task not found' });
    tasks[taskIndex] = { id: tasks[taskIndex].id, title, description };
    writeTasks(tasks);
    res.status(200).json(tasks[taskIndex]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /tasks/:id
router.delete('/tasks/:id', (req, res) => {
  try {
    let tasks = readTasks();
    const newTasks = tasks.filter((t) => t.id !== parseInt(req.params.id));
    if (newTasks.length === tasks.length) return res.status(404).json({ message: 'Task not found' });
    writeTasks(newTasks);
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
