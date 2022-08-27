const express = require('express');
const router = express.Router()
const Post = require('../model/post')

//Save Post
router.post('/', async (req, res) => {
  const post = new Post({
    userId: req.body.userId,
    date: req.body.date,
    time: req.body.time,
    title: req.body.title,
    body:req.body.body
  })
  try {
    await post.save()
    res.status(200).json('Post Added Successfully')
  } catch (err) {
    res.status(400).json('Error Occurred')
  }
})

module.exports = router
