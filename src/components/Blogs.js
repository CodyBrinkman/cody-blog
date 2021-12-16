import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    blogService.getAll().then(response => {
      setBlogs(response.data)
      console.log('blogsss' + response.data)
    })
  }, [])

  return (
    <h1>Blogs</h1>
  )

}

export default Blogs
