const Post = require('../models/post.model');

exports.getAllPosts = async (req, res, next) => {
  try {
    const { rows } = await Post.getAllPosts();
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await Post.getPostById(id);
    if (rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const { rows } = await Post.createPost(title, content);
    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const { rows } = await Post.updatePost(id, title, content);
    if (rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rows } = await Post.deletePost(id);
    if (rows.length === 0) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    next(err);
  }
};
