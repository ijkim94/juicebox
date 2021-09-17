// api/users.js
const express = require('express');
const postsRouter = express.Router();

const { getAllPosts } = require('../db');

// UPDATE
postsRouter.get('/', async (req, res) => {
  const posts = await getAllPosts();

  res.send({
    posts
  });
});

module.exports = postsRouter;