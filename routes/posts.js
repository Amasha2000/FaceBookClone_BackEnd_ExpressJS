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

//Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  } catch (err) {
    res.status(400).json('Error Occurred')
  }
})

//Get post by id
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json(post)
  } catch (err) {
    res.status(400).json('No such a post')
  }
})

//Update post
router.put('/:id', async (req, res)=>{
  try {
    const post = await Post.findById(req.params.id)
    post.userId = req.body.userId
    post.date = req.body.date
    post.time = req.body.time
    post.title = req.body.title
    post.body = req.body.body

    await post.save()
    res.status(200).json('Post updated successfully')
  } catch (err) {
    res.status(400).json('Error Occurred')
  }
})

//Delete Post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    await post.remove()
    res.status(200).json('Post deleted successfully')
  } catch (err) {
    res.status(400).json('Error Occurred')
  }
})

module.exports = router
