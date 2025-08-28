import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from '../components/Carousel'
import './Torneos.css'
import torneos_espacio_publicitario_1 from '../../contenido/torneos/torneos_espacio_publicitario_1.png';
import torneos_espacio_publicitario_2 from '../../contenido/torneos/torneos_espacio_publicitario_2.jpg';
import torneos_mortal_kombat_1 from '../../contenido/torneos/torneos_mortal_kombat_1.png';
import torneos_fc_25 from '../../contenido/torneos/torneos_fc_25.jpg';
import torneos_tekken_8 from '../../contenido/torneos/torneos_tekken_8.png';
import torneos_street_fighter_6 from '../../contenido/torneos/torneos_street_fighter_6.jpg';
import torneos_king_of_fighters_xv from '../../contenido/torneos/torneos_king_of_fighters_xv.jpg';

const Torneos = () => {
  const navigate = useNavigate()
  const tournamentImages = [
    {
      url: torneos_mortal_kombat_1,
      title: 'Mortal Kombat 1 Championship',
      description: 'El torneo más sangriento del año con premios de $30,000'
    },
    {
      url: torneos_fc_25,
      title: 'FIFA 2025 Tournament',
      description: 'Compite en nuestro torneo de FIFA con equipos profesionales'
    },
    {
      url: torneos_espacio_publicitario_1,
      title: 'Espacio Publicitario',
      description: '¡Participa en los torneos y gana premios exclusivos!'
    },
    {
      url: torneos_tekken_8,
      title: 'Tekken 8 Championship',
      description: 'Torneo de Tekken 8 con los mejores jugadores de lucha'
    },
    {
      url: torneos_street_fighter_6,
      title: 'Street Fighter 6 Cup',
      description: 'Torneo de Street Fighter 6 para todos los niveles'
    },
    {
      url: torneos_espacio_publicitario_2,
      title: 'Espacio Publicitario 2',
      description: '¡No te pierdas los anuncios y novedades de los torneos!'
    },
    {
      url: torneos_king_of_fighters_xv,
      title: 'The King of Fighters XV',
      description: 'Festival de The King of Fighters XV con cosplay y premios'
    }
  ]

  const activeTournaments = [
    { id: 1, title: 'Mortal Kombat 1 Championship', game: 'Mortal Kombat 1', date: '15-20 Marzo 2025', prize: '$30,000', participants: '64 jugadores', status: 'Inscripciones Abiertas', image: torneos_mortal_kombat_1, description: 'El torneo más sangriento del año con premios de $30,000 y la participación de jugadores profesionales de Mortal Kombat 1.' },
    { id: 2, title: 'FIFA 2025 Tournament', game: 'FIFA 2025', date: '25-30 Marzo 2025', prize: '$25,000', participants: '32 equipos', status: 'Próximamente', image: torneos_fc_25, description: 'Compite en nuestro torneo de FIFA 2025 con equipos profesionales y premios increíbles.' },
    { id: 3, title: 'Tekken 8 Championship', game: 'Tekken 8', date: '5-10 Abril 2025', prize: '$20,000', participants: '48 jugadores', status: 'Inscripciones Abiertas', image: torneos_tekken_8, description: 'Torneo de Tekken 8 con los mejores jugadores de lucha del mundo.' },
    { id: 4, title: 'Street Fighter 6 Cup', game: 'Street Fighter 6', date: '12-15 Abril 2025', prize: '$18,000', participants: '64 jugadores', status: 'Próximamente', image: torneos_street_fighter_6, description: 'Torneo de Street Fighter 6 para todos los niveles de jugadores.' },
    { id: 5, title: 'The King of Fighters XV', game: 'The King of Fighters XV', date: '20-25 Abril 2025', prize: '$15,000', participants: '32 jugadores', status: 'Inscripciones Abiertas', image: torneos_king_of_fighters_xv, description: 'Festival de The King of Fighters XV con cosplay y premios especiales.' }
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
