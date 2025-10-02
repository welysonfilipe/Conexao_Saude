import React from 'react'

import { Link } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (

    <nav className='navbar-page'>
        <Link>Home</Link>
        <Link>Agenda</Link>
        <Link>Contato</Link>
    </nav>

  )
}

export default NavBar
