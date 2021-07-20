import blogService from '../services/blogs'
import { useState } from 'react'
const BlogForm = ({blogs,setBlogs}) => {
const [newTitle,setNewTitle]=useState('')
const [newAuthor,setNewAuthor]=useState('')
const [newUrl,setNewUrl]=useState('')
const [newLikes,setNewLikes]=useState(0)
  const addBlog = (event) =>{
    event.preventDefault()

    const blogObject = {
      title:newTitle,
      author:newAuthor,
      url:newUrl,
      likes:newLikes
     
    }
    blogService.create(blogObject)
    .then(returnedBlog=>{
        setBlogs(blogs.concat(returnedBlog))
        setNewTitle('')
        setNewAuthor('')
        setNewUrl('')
        setNewLikes()
      })
   
  }

  const handleChange = (e,func)=>{
    func(e.target.value)
  }


    return ( 
        <form onSubmit={addBlog}>
          <div>
                Title
              <input
              value={newTitle}
              name = 'title'
              onChange={
                (e)=>{handleChange(e,setNewTitle)}
              }
              />
          </div>
          <div>
                Author
              <input
              value={newAuthor}
              name = 'author'
              onChange={
                (e)=>{handleChange(e,setNewAuthor)}
              }
          />
          </div>
          <div>
                Url
              <input
              value={newUrl}
              name = 'url'
              onChange={
                (e)=>{handleChange(e,setNewUrl)}
              }
          />
          </div>
          <div>
                Likes
              <input
              value={newLikes}
              name = 'likes'
              onChange={
                (e)=>{handleChange(e,setNewLikes)}
              }
          />
          </div>
                          
         <button type="submit">save</button>
      </form>  
     )
}
 
export default BlogForm;