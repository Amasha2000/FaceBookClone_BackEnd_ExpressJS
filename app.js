const express = require('express');
const mongoose = require('mongoose');

const port = 4000;

const url = 'mongodb://127.0.0.1/facebook_clone'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })

const con = mongoose.connection

con.on('open', () => {
  console.log('Connected')
})

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/user',userRouter)

app.listen(port, () => {
  console.log('Server Started')
})




