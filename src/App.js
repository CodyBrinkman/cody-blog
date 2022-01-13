import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Blogs from './components/Blogs'
import {
  Routes, Route
} from "react-router-dom"
import ScrollToTop from './components/ScrollToTop'

import DIYBlogs from './components/DIYBlogs'
import TechBlogs from './components/TechBlogs'
import JewelryAntlers from './components/DIYBlogs/JewelryAntlers'
import ManOfDreams from './components/DIYBlogs/ManOfDreams'
import CuttingBoard from './components/DIYBlogs/CuttingBoard'
import Snowman from './components/DIYBlogs/Snowman'


const App = () => {

  return (
    <>
      <Header />
      <ScrollToTop>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='blogs/DIYBlogs' element={<DIYBlogs />} />
          <Route path='blogs/TechBlogs' element={<TechBlogs />} />
          <Route path='/blogs/DIYBlogs/JewelryAntlers' element={<JewelryAntlers />} />
          <Route path='/blogs/DIYBlogs/ManOfDreams' element={<ManOfDreams />} />
          <Route path='/blogs/DIYBlogs/CuttingBoard' element={<CuttingBoard />} />
          <Route path='/blogs/DIYBlogs/Snowman' element={<Snowman />} />
        </Routes>
      </ScrollToTop>
    </>
  )

}

export default App
