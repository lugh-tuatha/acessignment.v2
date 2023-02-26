import React from 'react'
import { Link } from "react-router-dom";

import logo from '../../assets/logo.png'

function Header() {
  return (
    <nav className='flex items-center justify-between my-4'>
      <Link to="/"><img src={logo} alt="dev.start main logo" className='w-20'/></Link>

      <ul className='text-dark-300 flex gap-20 text-lg'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/resources">Resources</Link></li>
      </ul>
    </nav>
  )
}

export default Header