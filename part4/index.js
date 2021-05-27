const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = 'mongodb+srv://user1:MangoYogurt1@cluster0.yaoc2.mongodb.net/bloglist?retryWrites=true&w=majority'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })

})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

// const body = request.body
// const blog = new Blog({
//     title: body.title,
//   author: body.author,
//   url: body.url,
//   likes: body.likes
// })
  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})