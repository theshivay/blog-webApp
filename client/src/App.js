import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import Home from './pages/Home.js'
import Header from './Components/Header.js'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/'element = {<Home/>} />
      <Route path='/login'element = {<Login/>} />
      <Route path='/register'element = {<Register/>} />
    </Routes>
    </>
  )
}

export default App