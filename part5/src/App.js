import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'
import Notification from './components/Notification'
import SignOut from './components/signOut'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [user,setUser] = useState(null)

 

  

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  return (
    <div>
      <h2>blogs</h2>
      
      <Notification errorMessage={errorMessage}/>
      {user? <SignOut setUser={setUser}/> :null}

      {!user
      ? <LoginForm setUser={setUser} user={user} setErrorMessage={setErrorMessage}/> 
      : <BlogForm setErrorMessage={setErrorMessage} blogs={blogs} setBlogs={setBlogs}/> }
      
      
      {user && blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>
  )
}

export default App