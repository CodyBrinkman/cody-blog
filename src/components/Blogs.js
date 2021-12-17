import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import ReactMarkdown from 'react-markdown'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const MD = '# Hello, *world*!'

  useEffect(() => {
    blogService.getAll().then(response => {
      setBlogs(response)
      console.log('blogsss ' + JSON.stringify(blogs))
    })
  }, [])

  return (
    <>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(blog => <li key={blog.id}>{blog.id} <ReactMarkdown>{MD}</ReactMarkdown></li>)}
      </ul>
    </>

  )

}

export default Blogs
