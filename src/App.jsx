import React from 'react'
import images from './constants/images'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Hero } from './components'
import { Contact, About } from './pages'

function App() {

  return (
    <div className="app">
    <BrowserRouter>
    <div className="my-nav">
      <Navbar />
    </div>
      <Routes>
        <Route path='/' element={<Hero />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='privacy-policy' element={<About />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
