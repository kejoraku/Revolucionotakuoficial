import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }


  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <span className="logo-text">Revolución Otaku</span>
        <span className="logo-subtitle">OFICIAL</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Inicio
          </Link>
          <Link 
            to="/eventos" 
            className={`nav-link ${location.pathname === '/eventos' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Eventos
          </Link>
          <Link 
            to="/torneos" 
            className={`nav-link ${location.pathname === '/torneos' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            Torneos
          </Link>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}




export default Navbar
