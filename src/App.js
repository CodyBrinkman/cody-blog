import React, { useState, useEffect } from 'react'
//import blogService from './services/blogs'
import Home from './components/Home'
import Header from './components/Header'
import Blogs from './components/Blogs'
import {
  Routes, Route
} from "react-router-dom"

import DIYBlogs from './components/DIYBlogs'
import TechBlogs from './components/TechBlogs'


const App = () => {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='blogs/DIYBlogs' element={<DIYBlogs />} />
        <Route path='blogs/TechBlogs' element={<TechBlogs />} />
      </Routes>
    </>
  )

}

export default App
