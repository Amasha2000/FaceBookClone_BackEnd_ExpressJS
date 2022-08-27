const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required:true
  },
  date: {
    type: Date,
    required:true
  },
  time: {
    type: Date,
    required:true
  },
  title: {
    type: String,
    required:true
  },
  body: {
    type: String,
    required:true
  }
})

module.exports = mongoose.model('Post', postSchema)