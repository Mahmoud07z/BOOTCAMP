const pool = require('../config/db');

const getAllPosts = () => pool.query('SELECT * FROM posts');
const getPostById = (id) => pool.query('SELECT * FROM posts WHERE id = $1', [id]);
const createPost = (title, content) =>
  pool.query('INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING *', [title, content]);
const updatePost = (id, title, content) =>
  pool.query('UPDATE posts SET title = $1, content = $2 WHERE id = $3 RETURNING *', [title, content, id]);
const deletePost = (id) => pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
