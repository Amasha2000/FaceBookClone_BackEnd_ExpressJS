const express = require('express');
const router = express.Router()
const User = require('../model/user')

//Save user
router.post('/', async (req, res) => {
  const user = new User({
    firstName: req.body.firstName,
    surname: req.body.surname,
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    email:req.body.email
  })
  try {
    user.save()
    res.status(200).json('User Added Successfully')
  } catch (err) {
    res.status(500).json('Error Occurred')
  }
})