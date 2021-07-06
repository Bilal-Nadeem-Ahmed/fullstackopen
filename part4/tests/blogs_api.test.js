const mongoose=require('mongoose')
const supertest = require('supertest')
const app= require('../app')

const api = supertest(app)
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

afterAll(() => {
  mongoose.connection.close()
})