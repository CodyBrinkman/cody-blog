import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import ReactMarkdown from 'react-markdown'

const blogs = require('../blogs')

const Blogs = () => {

  return (
    <>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(blog => <li><ReactMarkdown>{blog}</ReactMarkdown></li>)}
      </ul>
    </>

  )

}

export default Blogs
