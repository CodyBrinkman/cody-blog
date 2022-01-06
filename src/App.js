import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Blogs from './components/Blogs'
import {
  Routes, Route
} from "react-router-dom"

import DIYBlogs from './components/DIYBlogs'
import TechBlogs from './components/TechBlogs'
import JewelryAntlers from './components/DIYBlogs/JewelryAntlers'


const App = () => {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='blogs/DIYBlogs' element={<DIYBlogs />} />
        <Route path='blogs/TechBlogs' element={<TechBlogs />} />
        <Route path='/blogs/DIYBlogs/JewelryAntlers' element={<JewelryAntlers />} />
      </Routes>
    </>
  )

}

export default App
