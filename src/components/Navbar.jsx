import React, {useState} from 'react'
import { images } from '../constants'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  function toggleMenu() {
    setOpen(!open)
  }
  return (
    <nav className="navbar py-2 fixed top-0 left-0 right-0 z-10">
        <header>
          <img className='logo' src={images.logo} alt="Logo for the site." loading='lazy'/>
        <ul className='list flex justify-center items-center gap-12'>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/privacy-policy"}>Privacy Policy</NavLink></li>
            <li><button><NavLink to={"/contact"}>Get Started</NavLink></button></li>
        </ul>
          <div className="menu-image" onClick={toggleMenu}>
        <img src={images.menuIcon} alt="This is my Menu Icon!" className='menu-icon'/>
          </div>
          {open ? (
        <div className='menu'>
           <ul>
           <li><NavLink to={"/"}  onClick={() => {setOpen(false)}}>Home</NavLink></li>
            <li><NavLink to={"/contact"} onClick={() => {setOpen(false)}}>Contact</NavLink></li>
            <li><NavLink to={"/privacy-policy"} onClick={() => {setOpen(false)}}>Privacy Policy</NavLink></li>
            <li><button><NavLink to={"/contact"} onClick={() => {setOpen(false)}}>Get Started</NavLink></button></li>
           </ul>
        </div>
          ) : null}
        </header>
    </nav>
  )
}
