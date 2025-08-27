import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_ENDPOINTS } from '../config/api'
import './Login.css'

const Login = () => {
  const [activeTab, setActiveTab] = useState('login')
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    phone: '',
    receiveNews: false
  })
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    // Validar campos obligatorios
    if (!formData.username || !formData.password || !formData.email) {
      setMessage('Por favor completa todos los campos obligatorios')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch(API_ENDPOINTS.register, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('¡Registro exitoso! Ya puedes iniciar sesión.')
        setFormData({
          username: '',
          password: '',
          email: '',
          phone: '',
          receiveNews: false
        })
        setActiveTab('login')
      } else {
        setMessage(data.message || 'Error en el registro')
      }
    } catch (error) {
      setMessage('Error de conexión. Intenta nuevamente.')
    }

    setIsLoading(false)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage('')

    if (!loginData.username || !loginData.password) {
      setMessage('Por favor completa todos los campos')
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch(API_ENDPOINTS.login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      })

      const data = await response.json()

      if (response.ok) {
        setMessage('¡Inicio de sesión exitoso!')
        // Guardar token y estado de login
        localStorage.setItem('authToken', data.token)
        localStorage.setItem('isLoggedIn', 'true')
        // Redirigir al inicio
        setTimeout(() => {
          navigate('/')
        }, 1000)
      } else {
        setMessage(data.message || 'Credenciales incorrectas')
      }
    } catch (error) {
      setMessage('Error de conexión. Intenta nuevamente.')
    }

    setIsLoading(false)
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Revolución Otaku Oficial</h1>
          <p>Accede a tu cuenta o regístrate</p>
        </div>

        <div className="login-tabs">
          <button 
            className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Iniciar Sesión
          </button>
          <button 
            className={`tab-button ${activeTab === 'register' ? 'active' : ''}`}
            onClick={() => setActiveTab('register')}
          >
            Registrarse
          </button>
        </div>

        {message && (
          <div className={`message ${message.includes('exitoso') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        {activeTab === 'login' ? (
          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="login-username">Nombre de usuario:</label>
              <input
                type="text"
                id="login-username"
                name="username"
                value={loginData.username}
                onChange={handleLoginInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Contraseña:</label>
              <input
                type="password"
                id="login-password"
                name="password"
                value={loginData.password}
                onChange={handleLoginInputChange}
                required
              />
            </div>

            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
            </button>
          </form>
        ) : (
          <form className="register-form" onSubmit={handleRegister}>
            <div className="form-group">
              <label htmlFor="username">Nombre de usuario: *</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña: *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email: *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono (opcional):</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="receiveNews"
                  checked={formData.receiveNews}
                  onChange={handleInputChange}
                />
                <span className="checkmark"></span>
                Quiero recibir noticias sobre nuevos eventos
              </label>
            </div>

            <button type="submit" className="submit-button" disabled={isLoading}>
              {isLoading ? 'Registrando...' : 'Registrarse'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Login
