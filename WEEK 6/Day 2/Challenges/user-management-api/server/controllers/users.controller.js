const bcrypt = require('bcrypt');
const userModel = require('../models/users.model');

const registerUser = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.createUserTransaction({ email, username, first_name, last_name }, hashedPassword);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const pwdRow = await userModel.getPasswordByUsername(username);
    if (!pwdRow) return res.status(404).json({ message: 'User not found' });

    const match = await bcrypt.compare(password, pwdRow.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user', error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await userModel.updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user', error: err.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUsers,
  getUser,
  updateUser,
};