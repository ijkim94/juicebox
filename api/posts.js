// api/users.js
const express = require('express');
const postsRouter = express.Router();

const { requireUser } = require('./utils');
const { getAllPosts, createPost } = require('../db');


postsRouter.post('/', requireUser, async (req, res, next) => {
 
  const { title, content, tags = "" } = req.body;

  const tagArr = tags.trim().split(/\s+/)
  const postData = {title,content};
  if (tagArr.length) {
    postData.tags = tagArr;
  }

  try {
    // add authorId, title, content to postData object
    // const post = await createPost(postData);
    // this will create the post and the tags for us
    // if the post comes back, res.send({ post });
    // otherwise, next an appropriate error object 
    
    const post=await createPost(postData);
    if(post){res.send({post});
  }
next(error)
} catch ({ name, message }) {
    next({ name, message });
  }
});



// UPDATE
postsRouter.get('/', async (req, res) => {
  const posts = await getAllPosts();

  res.send({
    posts
  });
});


module.exports = postsRouter;