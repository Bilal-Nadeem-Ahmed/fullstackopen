const User = require('../models/user')
const supertest = require('supertest')
const helper= require('./tests_helper')
const app= require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const bcrypt = require('bcrypt')

let token

beforeAll(async() => {
  await User.deleteMany({})


  const passwordHash = await bcrypt.hash('sekret', 10)
  const loginInfo = { username: 'root', passwordHash }
  const user = new User(loginInfo)

  await user.save()

  await Blog.deleteMany({})

  for(let blog of helper.initialBlogs){
    let blogObject= new Blog(blog)
    await blogObject.save()
  }

})



describe('tests that require you to login',() => {
  test('a user can login with correct login info',async() => {
    token = await api
      .post('/api/login')
      .send({ username: 'root', password:'sekret' })
    console.log(token)

  })
  test('a blog can be added', async () => {
    const newBlog = {
      'title': 'a simple guide',
      'author': 'Bilal Ahmreteed',
      'url': 'https://asimerterpleguide.dev/',
      'likes': 5
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .set('Authorization', `Bearer ${token.body.token}`)
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
      .set('Authorization', `Bearer ${token.body.token}`)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd[blogsAtEnd.length-1].likes).toBe(0)
    expect(blogsAtEnd[blogsAtEnd.length-1].title).toBe('i have no likes')
  })
  test('if a blog is added without title and author it will give a status code of 400 can not be added', async () => {
    const newBlog = {
      'url': 'https://bilalahmed.co.uk/',

    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .set('Authorization', `Bearer ${token.body.token}`)
      .expect(400)

  })
  //   test('if a token is not provided youu receive a 401 error',async() => {
  //     const newBlog = {
  //       'title': 'i have rettreno likes',
  //       'author': 'Bilal Aerterrhmed',
  //       'url': 'https://asimpleerterrguide.dev/',

  //     }
  //     await api
  //       .post('/api/blogs')
  //       .send(newBlog)
  //       .expect(401)

//   })
}

)


