const mongoose=require('mongoose')
const supertest = require('supertest')
const helper= require('./tests_helper')
const app= require('../app')

const api = supertest(app)

const Blog = require('../models/blog')

beforeEach(async() => {
  await Blog.deleteMany({})

  for(let blog of helper.initialBlogs){
    let blogObject= new Blog(blog)
    await blogObject.save()
  }

})
// had an issue where test would not pass. This was due to the / not being present
test('blogs are returned as json', async() => {
  console.log('entered first test')
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('check that the id property is correctly defined', async() => {
  const blogs= await api.get('/api/blogs/')
  const firstBlogsId = blogs.body[0].id


  expect(firstBlogsId).toBeDefined()
})

test('a blog can be added', async () => {
  const newBlog = {
    'title': 'a simple guide',
    'author': 'Bilal Ahmed',
    'url': 'https://asimpleguide.dev/',
    'likes': 5
  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length +1)

  const contents = blogsAtEnd.map(r => r.title)


  expect(contents).toContain('a simple guide')
})

test('a blog with no likes property is assigned 0 by default', async () => {
  const newBlog = {
    'title': 'i have no likes',
    'author': 'Bilal Ahmed',
    'url': 'https://asimpleguide.dev/',

  }

  await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAtEnd = await helper.blogsInDb()
  expect(blogsAtEnd[blogsAtEnd.length-1].likes).toBe(0)
  expect(blogsAtEnd[blogsAtEnd.length-1].title).toBe('i have no likes')
})

afterAll(() => {
  mongoose.connection.close()
})