import React from 'react'
import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>© {new Date().getFullYear()} Revolución Otaku. Todos los derechos reservados.</span>
      <span>Hecho con ❤️ para la comunidad gaming y otaku.</span>
    </div>
  </footer>
)

export default Footer
