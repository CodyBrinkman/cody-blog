import React, { useState, useEffect } from 'react'
import blogService from './services/blogs'
import Home from './components/Home'
import Header from './components/Header'
import Blogs from './components/Blogs'
import {
  Routes, Route
} from "react-router-dom"

import TestBlog1 from './blogs/testblog1'
import TestBlog2 from './blogs/testblog2'


const App = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
      blogService
        .getAll()
        .then(initialBlogs => {
        setBlogs(initialBlogs)
      })
    }, [])

  const getComponent = (name) => {
    console.log('inGetComponent ' + name)
    var MyComponent = name
    return <MyComponent />
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs' element={<Blogs blogs={blogs}/>} />
        <Route path='blogs/TestBlog1' element={<TestBlog1 />} />
        <Route path='blogs/TestBlog2' element={<TestBlog2 />} />
      </Routes>
    </>
  )

}

export default App
