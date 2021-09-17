// api/users.js
const express = require('express');
const usersRouter = express.Router();

const { getAllUsers } = require('../db');

// UPDATE
usersRouter.get('/', async (req, res) => {
  const users = await getAllUsers();

  res.send({
    users
  });
});

module.exports = usersRouter;