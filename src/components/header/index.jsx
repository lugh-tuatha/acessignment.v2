import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './header.css'

import logo from '../../assets/logo.png'

import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";


function Header() {
  const [navbar, setNavbar] = useState(false)

  const showNavbar = () => setNavbar(!navbar)

  return (
    <>
      <nav className='flex items-center justify-between my-4'>
        <Link to="/"><img src={logo} alt="dev.start main logo" className='w-20'/></Link>

        <ul className='text-dark-300 md:flex gap-20 text-lg hidden'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
        <FaIcons.FaBars className='text-4xl md:hidden show ? ' onClick={showNavbar}/>
      </nav>

      <div className={navbar ? 'nav-menu active' : 'nav-menu'}>
        <nav className='flex items-center justify-between my-4 container mx-auto'>
          <Link to="/"><img src={logo} alt="dev.start main logo" className='w-20'/></Link>
          <IoIcons.IoCloseSharp className='text-5xl md:hidden show ? ' onClick={showNavbar}/>
        </nav>

        <ul className='text-dark-300 md:hidden text-lg text-center' onClick={showNavbar}>
          <li className='my-6'><Link to="/">Home</Link></li>
          <li className='my-6'><Link to="/about">About</Link></li>
          <li className='my-6'><Link to="/resources">Resources</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header