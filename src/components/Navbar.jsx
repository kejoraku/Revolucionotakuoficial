import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true')
  }, [location])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavigation = () => {
    closeMenu()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
    closeMenu()
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleNavigation}>
          <span className="logo-text">Revolución Otaku</span>
          <span className="logo-subtitle">OFICIAL</span>
        </Link>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={handleNavigation}
          >
            Inicio
          </Link>
          <Link 
            to="/eventos" 
            className={`nav-link ${location.pathname === '/eventos' ? 'active' : ''}`}
            onClick={handleNavigation}
          >
            Eventos
          </Link>
          <Link 
            to="/torneos" 
            className={`nav-link ${location.pathname === '/torneos' ? 'active' : ''}`}
            onClick={handleNavigation}
          >
            Torneos
          </Link>
          {!isLoggedIn && (
            <Link 
              to="/login" 
              className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
              onClick={handleNavigation}
            >
              Login
            </Link>
          )}
          {isLoggedIn && (
            <button className="nav-link logout-link" onClick={handleLogout} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
              Cerrar sesión
            </button>
          )}
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
