const mongoose=require('mongoose')
const supertest = require('supertest')
const app= require('../app')

const api = supertest(app)
// had an issue where test would not pass. This was due to the / not being present
test('notes are returned as json', async() => {
  console.log('entered first test')
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

afterAll(() => {
  mongoose.connection.close()
})