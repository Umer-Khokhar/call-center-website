import React from 'react'
import { images } from '../constants'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar md:py-2 fixed top-0 left-0 right-0 z-10">
        <header>
          <img src={images.logo} alt="Logo for the site." width={180}/>
        <ul className='flex justify-center items-center gap-12'>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/privacy-policy"}>Privacy Policy</NavLink></li>
            <li><button><NavLink to={"/contact"}>Get Started</NavLink></button></li>

        </ul>
        </header>
    </nav>
  )
}
