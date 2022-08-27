const express = require('express')
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
    await user.save()
    res.status(200).json('User Added Successfully')
  } catch (err) {
    res.status(500).json('Error Occurred')
  }
})

//Get all users
router.get('/', async(req, res) => {
  try {
    const user = await User.find()
    res.status(200).json(user)
  } catch (err) {
    res.status(500).json('Error Occurred')
  }
})

//Get user by id
router.get('/:id', async (req, res) => {
  try{
     const user=await User.findById(req.params.id)
     res.status(200).json(user)
  }catch(err){
     res.status(400).json('Wrong user id.Cannot find user')
  }
})

module.exports = router
