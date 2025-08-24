import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Eventos from './pages/Eventos'
import Torneos from './pages/Torneos'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/torneos" element={<Torneos />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App


