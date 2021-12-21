import React, { useState, useEffect } from 'react'
import blogService from '../services/blogs'
import ReactMarkdown from 'react-markdown'
import HelloWorld from '../blogs/1_hello_world'
import { Link } from "react-router-dom";

const Blogs = () => {

  return (
    <>
      <h1>Blogs</h1>
      <ul>
        <Link to='/blogs/HelloWorld'>Blog 1</Link>
        <br />
        <Link to='/blogs/Blog2'>Blog 2</Link>
      </ul>
    </>

  )

}

export default Blogs
