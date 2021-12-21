import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Home from './components/Home'
import Header from './components/Header'
import Blogs from './components/Blogs'
import HelloWorld from './blogs/1_hello_world'
import Blog2 from './blogs/2_blog2'
import {
  Routes, Route
} from "react-router-dom"

const App = () => {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blogs/HelloWorld' element={<HelloWorld/>} />
        <Route path='/blogs/Blog2' element={<Blog2 />} />
      </Routes>
    </>
  )

}

export default App
