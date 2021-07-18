const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')


blogRouter.get('/', async (request, response) => {
  const blogs=await  Blog.find({}).populate('user', { username: 1, name: 1 })

  response.json(blogs)


})

blogRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)

  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }

})

blogRouter.post('/', async (request, response) => {
  const body = request.body
  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)

  if (!token || ! decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })

  }

  const user = await User.findById(decodedToken.id)
  // const user =  request.user
  if (!token || !user.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user:user._id
  })

  if(!body.title||!body.author){
    return response.status(400).json({ error:'missing title or author' }).end()
  }

  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
  response.status(201)
  response.json(savedBlog)

})

blogRouter.delete('/:id', async (request, response) => {

  const token = request.token
  const user = await User.findById(decodedToken.id)
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const blogWriter = await Blog.findById(request.params.id)

  if(user.id===blogWriter.user.toString()) {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } else{
    return response.status(401).json({ error: 'blog can be deleted only by the user who added the blog' })
  }



})

blogRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  }

  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then(updatedBlog => {
      response.json(updatedBlog)
    })
    .catch((error) => next(error))
})

module.exports=blogRouter