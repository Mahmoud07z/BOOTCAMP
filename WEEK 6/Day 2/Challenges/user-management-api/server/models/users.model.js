const pool = require('../config/db');

const createUserTransaction = async (user, hashedPassword) => {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const insertUserText = 'INSERT INTO users (email, username, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *';
    const resUser = await client.query(insertUserText, [user.email, user.username, user.first_name, user.last_name]);

    const insertPwdText = 'INSERT INTO hashpwd (username, password) VALUES ($1, $2)';
    await client.query(insertPwdText, [user.username, hashedPassword]);

    await client.query('COMMIT');
    return resUser.rows[0];
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

const getAllUsers = async () => {
  const res = await pool.query('SELECT * FROM users');
  return res.rows;
};

const getUserById = async (id) => {
  const res = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return res.rows[0];
};

const updateUser = async (id, user) => {
  const res = await pool.query(
    'UPDATE users SET email=$1, username=$2, first_name=$3, last_name=$4 WHERE id=$5 RETURNING *',
    [user.email, user.username, user.first_name, user.last_name, id]
  );
  return res.rows[0];
};

const getPasswordByUsername = async (username) => {
  const res = await pool.query('SELECT password FROM hashpwd WHERE username = $1', [username]);
  return res.rows[0];
};

module.exports = {
  createUserTransaction,
  getAllUsers,
  getUserById,
  updateUser,
  getPasswordByUsername,
};