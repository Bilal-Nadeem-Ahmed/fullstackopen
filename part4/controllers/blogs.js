const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })

})

blogRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)

  if (blog) {
    response.json(blog)
  } else {
    response.status(404).end()
  }

})

blogRouter.post('/', (request, response) => {
  const blog = new Blog(request.body)

  // const body = request.body
  // const blog = new Blog({
  //     title: body.title,
  //   author: body.author,
  //   url: body.url,
  //   likes: body.likes
  // })


  if (request.body.title && request.body.author){
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  }
  else{
    response.status(400).end()
  }

})

blogRouter.delete('/:id', async (request, response) => {

  await Blog.findByIdAndRemove(request.params.id)
  response.status(204).end()

})

module.exports=blogRouter