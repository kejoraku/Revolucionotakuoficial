import React, { useState, useEffect } from 'react'
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
  const [captchaValue, setCaptchaValue] = useState('')
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaError, setCaptchaError] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})
  const navigate = useNavigate()

  // Inicializar captcha al cargar el componente
  useEffect(() => {
    generateCaptcha()
  }, [])

  // Generar un código de captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let captcha = ''
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)]
    }
    setCaptchaValue(captcha)
    setCaptchaInput('') // Limpiar el input del usuario
    setCaptchaError('') // Limpiar el error del captcha
  }

  // Validar captcha
  const validateCaptcha = () => {
    if (captchaInput.toUpperCase() !== captchaValue.toUpperCase()) {
      setCaptchaError('El código captcha es incorrecto')
      return false
    }
    setCaptchaError('')
    return true
  }

  // Validaciones en tiempo real
  const validateUsername = (username) => {
    if (!username) return ''
    if (username.length < 6) return 'El nombre de usuario debe tener al menos 6 caracteres'
    if (username.length > 12) return 'El nombre de usuario no puede tener más de 12 caracteres'
    if (!/^[a-zA-Z0-9]+$/.test(username)) return 'El nombre de usuario solo puede contener letras y números'
    return ''
  }

  const validatePassword = (password) => {
    if (!password) return ''
    if (password.length > 12) return 'La contraseña no puede tener más de 12 caracteres'
    if (!/^[a-zA-Z0-9]+$/.test(password)) return 'La contraseña solo puede contener letras y números'
    return ''
  }

  const validateEmail = (email) => {
    if (!email) return ''
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'Formato de email inválido'
    return ''
  }

  const validatePhone = (phone) => {
    if (!phone) return ''
    if (!/^\d+$/.test(phone)) return 'El teléfono debe contener solo números'
    return ''
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }))

    // Validar en tiempo real
    let error = ''
    switch (name) {
      case 'username':
        error = validateUsername(newValue)
        break
      case 'password':
        error = validatePassword(newValue)
        break
      case 'email':
        error = validateEmail(newValue)
        break
      case 'phone':
        error = validatePhone(newValue)
        break
      default:
        break
    }

    setFieldErrors(prev => ({
      ...prev,
      [name]: error
    }))

    // Limpiar mensaje general si hay errores de campo
    if (error) {
      setMessage('')
    }
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

    // Validar captcha
    if (!validateCaptcha()) {
      setIsLoading(false)
      return
    }

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
        setFieldErrors({})
        setCaptchaInput('')
        setCaptchaError('')
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
                maxLength={12}
                required
                className={fieldErrors.username ? 'error' : ''}
              />
              {fieldErrors.username && (
                <span className="field-error">{fieldErrors.username}</span>
              )}
              <small className="field-hint">6-12 caracteres, solo letras y números</small>
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña: *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                maxLength={12}
                required
                className={fieldErrors.password ? 'error' : ''}
              />
              {fieldErrors.password && (
                <span className="field-error">{fieldErrors.password}</span>
              )}
              <small className="field-hint">Máximo 12 caracteres, solo letras y números</small>
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
                className={fieldErrors.email ? 'error' : ''}
              />
              {fieldErrors.email && (
                <span className="field-error">{fieldErrors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono (opcional):</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={fieldErrors.phone ? 'error' : ''}
              />
              {fieldErrors.phone && (
                <span className="field-error">{fieldErrors.phone}</span>
              )}
              <small className="field-hint">Solo números</small>
            </div>

            <div className="form-group captcha-group">
              <label htmlFor="captcha">Código de seguridad: *</label>
              <div className="captcha-container">
                <div className="captcha-display">
                  <span className="captcha-text">{captchaValue}</span>
                  <button 
                    type="button" 
                    onClick={generateCaptcha} 
                    className="refresh-captcha"
                    title="Generar nuevo código"
                  >
                    ↻
                  </button>
                </div>
                <input
                  type="text"
                  id="captcha"
                  name="captcha"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Ingresa el código"
                  required
                  className={captchaError ? 'error' : ''}
                />
              </div>
              {captchaError && (
                <span className="field-error">{captchaError}</span>
              )}
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
