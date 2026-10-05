import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dasboard from './pages/Dasboard'
import UserDetails from './pages/UserDetails'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/dashboard' element={<Dasboard/>}/>
      <Route path='/user/:id' element={<UserDetails/>}/>
    </Routes>
    </>
  )
}

export default App
