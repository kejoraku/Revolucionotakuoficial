import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Eventos from './pages/Eventos'
import Torneos from './pages/Torneos'
import LigaROO from './pages/LigaROO'
import Login from './pages/Login'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liga-roo" element={<LigaROO />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/torneos" element={<Torneos />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  )
}

export default App


