const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, 'users.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Utility functions
function readUsers() {
  try {
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// POST /register
app.post('/register', async (req, res) => {
  const { first_name, last_name, email, username, password } = req.body;
  if (!first_name || !last_name || !email || !username || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const users = readUsers();
  if (users.find(u => u.username === username || u.email === email)) {
    return res.status(400).json({ message: 'error1: username or email already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now(),
    first_name,
    last_name,
    email,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  writeUsers(users);
  res.status(201).json({ message: 'register', user: newUser });
});

// POST /login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: 'error2: user not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'error2: invalid credentials' });

  res.json({ message: 'login', user });
});

// GET /users
app.get('/users', (req, res) => {
  const users = readUsers();
  res.json(users);
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  const { first_name, last_name, email, username } = req.body;
  users[index] = {
    ...users[index],
    first_name: first_name || users[index].first_name,
    last_name: last_name || users[index].last_name,
    email: email || users[index].email,
    username: username || users[index].username,
  };
  writeUsers(users);
  res.json({ message: 'User updated', user: users[index] });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
