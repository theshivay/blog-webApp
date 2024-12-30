import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import Home from './pages/Home.js'
import Header from './Components/Header.js'
import AddCategory from './pages/AddCategory.js'
import AddBlog from './pages/AddBlog.js'
import SingleBlog from './pages/SingleBlog.js'

function App() {
  return (
    <div className='bg-dark bg-gradient vh-100'>
    <Header/>
    <Routes>
      <Route path='/'element = {<Home/>} />
      <Route path='/login'element = {<Login/>} />
      <Route path='/register'element = {<Register/>} />
      <Route path='/add-category'element = {<AddCategory/>} />
      <Route path='/add-blog'element = {<AddBlog/>} />
      <Route path='/blog/:id'element = {<SingleBlog/>} />
    </Routes>
    </div>
  )
}

export default App