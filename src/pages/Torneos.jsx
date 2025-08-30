import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carousel'
import './Torneos.css'

import torneos_1 from '../../contenido/torneos/torneos_1.jpg';
import torneos_2 from '../../contenido/torneos/torneos_2.jpg';
import torneos_3 from '../../contenido/torneos/torneos_3.png';
import torneos_4 from '../../contenido/torneos/torneos_4.png';
import torneos_5 from '../../contenido/torneos/torneos_5.jpg';
import torneos_6 from '../../contenido/torneos/torneos_6.jpg';
import torneos_7 from '../../contenido/torneos/torneos_7.png';

const Torneos = () => {
  const navigate = useNavigate()
  const tournamentImages = [
    {
      url: torneos_1,
      title: 'Dragon Ball Z Budokai Tenkaichi III',
      description: 'El torneo más sangriento del año con premios de $30,000'
    },
    {
      url: torneos_2,
      title: 'Mortal Kombat 11',
      description: 'Compite en nuestro torneo de Mortal Kombat 11 con rivales profesionales'
    },
    {
      url: torneos_3,
      title: '¡Ofertas exclusiva de consolas Playstation!',
      description: '¡Participa en los torneos y gana premios exclusivos!'
    },
    {
      url: torneos_4,
      title: 'Pro Evolution Soccer 2018',
      description: 'Torneo de PES 2018 con los mejores equipos de futbol'
    },
    {
      url: torneos_5,
      title: 'Just Dance',
      description: 'Veni a bailar con Just Dance, para todos los niveles'
    },
    {
      url: torneos_6,
      title: '¡Ofertas exclusiva de consolas Nintendo!',
      description: '¡No te pierdas los anuncios y novedades de los torneos!'
    },
    {
      url: torneos_7,
      title: 'Guitar Hero III Legends of Rock',
      description: 'Subí al escenario y demostra tu habilidad con la guitarra'
    }
  ]

  const activeTournaments = [
    { id: 1, title: 'Dragon Ball Z Budokai Tenkaichi III Championship', game: 'Dragon Ball Z Budokai Tenkaichi III', date: '13-09 Septiembre 2025', prize: '$30,000', participants: 'Sin límite', status: 'Inscripciones Abiertas', image: torneos_1, description: 'El torneo más sangriento del año con premios de $30,000 y la participación de jugadores profesionales de Dragon Ball Z Budokai Tenkaichi III.' },
    { id: 2, title: 'Mortal Kombat 11 Tournament', game: 'Mortal Kombat 11', date: '13-09 Septiembre 2025', prize: '$30,000', participants: 'Sin límite', status: 'Inscripciones Abiertas', image: torneos_2, description: 'Compite en nuestro torneo de Mortal Kombat 11 con los luchadores mas experimentados y disfruta de premios increíbles.' },
    { id: 3, title: 'PES 2018 Championship', game: 'PES 2018', date: '13-09 Septiembre 2025', prize: '$30,000', participants: 'Sin límite', status: 'Inscripciones Abiertas', image: torneos_4, description: 'Torneo de Pro Evolution Soccer 2018 con los mejores equpos de futbol del mundo.' },
    { id: 4, title: 'Just Dance', game: 'Just Dance', date: '13-09 Septiembre 2025', prize: '$30,000', participants: 'Sin límite', status: 'Inscripciones Abiertas', image: torneos_5, description: 'Torneo de Just Dance para todos los niveles de jugadores.' },
    { id: 5, title: 'Guitar Hero III Perfomance', game: 'Guitar Hero III Legends of Rock', date: '13-09 Septiembre 2025', prize: '$30,000', participants: 'Sin límite', status: 'Inscripciones Abiertas', image: torneos_7, description: 'Show de Guitar Herro III con cosplay y premios especiales.' }
  ]

  const handleTournamentAction = (tournament) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    
    if (tournament.status === 'Inscripciones Abiertas') {
      if (!isLoggedIn) {
        // Si no está logueado, redirigir a login
        alert('Debes iniciar sesión para inscribirte en el torneo')
        navigate('/login')
        return
      }
      
      // Si está logueado y las inscripciones están abiertas, redirigir a MercadoPago
      const mercadopagoUrl = `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=REVOLUCION_OTAKU_${tournament.id}`
      
      // Mostrar confirmación antes de redirigir
      const confirmInscription = window.confirm(
        `¿Estás seguro de que quieres inscribirte en "${tournament.title}"?\n\n` +
        `Costo de inscripción: $3,000 ARS\n` +
        `Serás redirigido a MercadoPago para completar el pago.`
      )
      
      if (confirmInscription) {
        // Abrir MercadoPago en una nueva pestaña
        window.open(mercadopagoUrl, '_blank')
        
        // Mostrar mensaje de confirmación
        alert(
          '¡Inscripción iniciada!\n\n' +
          'Has sido redirigido a MercadoPago para completar el pago de $3,000 ARS.\n' +
          'Una vez completado el pago, recibirás una confirmación por email.'
        )
      }
    } else {
      // Para torneos que no tienen inscripciones abiertas, mostrar información
      const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        window.open('https://www.instagram.com/revolucionotakuoficial/', '_blank');
      } else {
        window.open('https://www.instagram.com/direct/t/17845492661911069', '_blank');
      }
    }
  }

  return (
    <div className="torneos-page dynamic-bg">
      {/* Floating elements for dynamic background */}
      <div className="torneos-floating-elements">
        <div className="torneos-floating-element"></div>
        <div className="torneos-floating-element"></div>
        <div className="torneos-floating-element"></div>
        <div className="torneos-floating-element"></div>
        <div className="torneos-floating-element"></div>
        <div className="torneos-floating-element"></div>
      </div>

      <div className="hero-section" style={{marginTop: 0, paddingTop: 0}}>
        <Carousel
          images={tournamentImages}
          title="Torneos de Gaming"
          autoPlayInterval={5000}
        />
      </div>

      <div className="content-section">
        <div className="tournaments-content">
          <h2 className="section-title">Torneos Activos</h2>
          
          {/* Información sobre inscripciones */}
          <div className="inscription-info">
            <div className="info-box">
              <h3>💳 Inscripciones con MercadoPago</h3>
              <p>Costo de inscripción: <strong>$3,000 ARS</strong> por torneo</p>
              <p>Pago seguro con transferencia bancaria, tarjeta de crédito/débito o efectivo</p>
            </div>
          </div>
          
          <div className="tournaments-grid">
            {activeTournaments.map((tournament) => (
              <div key={tournament.id} className="tournament-card">
                <div className="tournament-image">
                  <img src={tournament.image} alt={tournament.title} />
                  <div className="tournament-status">
                    <span className={`status-badge ${tournament.status === 'Inscripciones Abiertas' ? 'open' : 'coming'}`}>
                      {tournament.status}
                    </span>
                  </div>
                </div>
                <div className="tournament-content">
                  <h3 className="tournament-title">{tournament.title}</h3>
                  <div className="tournament-info">
                    <div className="info-item">
                      <span className="info-label">Juego:</span>
                      <span className="info-value">{tournament.game}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Fecha:</span>
                      <span className="info-value">{tournament.date}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Premio:</span>
                      <span className="info-value prize">{tournament.prize}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Participantes:</span>
                      <span className="info-value">{tournament.participants}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Inscripción:</span>
                      <span className="info-value inscription-cost">$3,000 ARS</span>
                    </div>
                  </div>
                  <p className="tournament-description">{tournament.description}</p>
                  <button
                    className={`tournament-button ${tournament.status === 'Inscripciones Abiertas' ? 'inscription-button' : ''}`}
                    onClick={() => handleTournamentAction(tournament)}
                  >
                    {tournament.status === 'Inscripciones Abiertas' ? '💳 Inscribirse' : 'Más Información'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Torneos
