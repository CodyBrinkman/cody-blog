import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {

  return (
    <>
      <h1>Blogs</h1>
      <ul>
      {blogs.map((blog, i) =>
        <div key={i}>
          <Link to={`/blogs/${blog.filename}`}>{blog.title}</Link>
        </div>
      )}
      </ul>
    </>

  )

}

export default Blogs
