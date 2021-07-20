const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
  const body = request.body

  if (body.username.length<3 ||body.password.length<3) {
    return response.status(401).json({
      error: 'the username or password is too short, please ensure it is at least three charactesr long'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  })
  const users = await User.find({})
  const userslist = users.map(item => item.username)
  const isDuplicate = userslist.indexOf(body.username)
  if(isDuplicate>1){
    return response.status(401).json({
      error: 'the username already exists'
    })
  }

  const savedUser = await user.save()

  response.json(savedUser)
})
usersRouter.get('/', async (request, response) => {
  // populte is getting the link between the notes and the user and bringing that data here
  const users = await User.find({}).populate('blogs',{ title: 1,author:1,url:1,likes:1 })
  response.json(users)
})

module.exports = usersRouter