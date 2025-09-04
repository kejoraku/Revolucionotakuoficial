import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import './LigaROO.css'

import liga_roo_1 from '../../contenido/liga_roo/liga_roo_1.jpg';
import liga_roo_2 from '../../contenido/liga_roo/liga_roo_2.jpg';
import liga_roo_3 from '../../contenido/liga_roo/liga_roo_3.png';
import liga_roo_4 from '../../contenido/liga_roo/liga_roo_4.jpg';
import liga_roo_5 from '../../contenido/liga_roo/liga_roo_5.png';
import liga_roo_6 from '../../contenido/liga_roo/liga_roo_6.jpg';
import liga_roo_7 from '../../contenido/liga_roo/liga_roo_7.png';
import whatsappBanner from '../../contenido/inicio/comunidad.jpg'

const LigaROO = () => {
  const [activeGame, setActiveGame] = useState('dbz')

  // Imágenes para el carrusel de campeones (1170x500)
  const championImages = [
    {
      url: liga_roo_1,
      title: 'Campeón Guerrero Z',
      description: 'El guerrero más letal de la liga'
    },
    {
      url: liga_roo_2,
      title: 'Campeón Asesino del Combate Mortal',
      description: 'El estratega del Combate'
    },
    {
      url: liga_roo_3,
      title: '¡Ofertas exclusiva de consolas Playstation!',
      description: '¡Participa en los torneos y gana premios exclusivos!'
    },
    {
      url: liga_roo_4,
      title: 'Campeón Just Dance',
      description: '¡Los piés más rápidos de la fiesta!'
    },
    {
      url: liga_roo_5,
      title: 'Guitar Herro III Legends of Rock',
      description: '¡El rey de las notas!'
    },
    {
      url: liga_roo_6,
      title: '¡Ofertas exclusiva de consolas Nintendo!',
      description: '¡No te pierdas los anuncios y novedades de los torneos!'
    },
    {
      url: liga_roo_7,
      title: 'Campeón Legendario del balón',
      description: 'El legendario de la Liga ROO Pro Evolution Soccer 2018'
    }
  ]

  // Datos de ranking por juego (hasta 20 participantes)
  const rankings = {
    dbz: [
      { position: 1, user: '', city: '', points: 0 },
      { position: 2, user: '', city: '', points: 0 },
      { position: 3, user: '', city: '', points: 0 },
      { position: 4, user: '', city: '', points: 0 },
      { position: 5, user: '', city: '', points: 0 },
      { position: 6, user: '', city: '', points: 0 },
      { position: 7, user: '', city: '', points: 0 },
      { position: 8, user: '', city: '', points: 0 },
      { position: 9, user: '', city: '', points: 0 },
      { position: 10, user: '', city: '', points: 0 },
      { position: 11, user: '', city: '', points: 0 },
      { position: 12, user: '', city: '', points: 0 },
      { position: 13, user: '', city: '', points: 0 },
      { position: 14, user: '', city: '', points: 0 },
      { position: 15, user: '', city: '', points: 0 },
      { position: 16, user: '', city: '', points: 0 },
      { position: 17, user: '', city: '', points: 0 },
      { position: 18, user: '', city: '', points: 0 },
      { position: 19, user: '', city: '', points: 0 },
      { position: 20, user: '', city: '', points: 0 }
    ],
    mk11: [
      { position: 1, user: '', city: '', points: 0 },
      { position: 2, user: '', city: '', points: 0 },
      { position: 3, user: '', city: '', points: 0 },
      { position: 4, user: '', city: '', points: 0 },
      { position: 5, user: '', city: '', points: 0 },
      { position: 6, user: '', city: '', points: 0 },
      { position: 7, user: '', city: '', points: 0 },
      { position: 8, user: '', city: '', points: 0 },
      { position: 9, user: '', city: '', points: 0 },
      { position: 10, user: '', city: '', points: 0 },
      { position: 11, user: '', city: '', points: 0 },
      { position: 12, user: '', city: '', points: 0 },
      { position: 13, user: '', city: '', points: 0 },
      { position: 14, user: '', city: '', points: 0 },
      { position: 15, user: '', city: '', points: 0 },
      { position: 16, user: '', city: '', points: 0 },
      { position: 17, user: '', city: '', points: 0 },
      { position: 18, user: '', city: '', points: 0 },
      { position: 19, user: '', city: '', points: 0 },
      { position: 20, user: '', city: '', points: 0 }
    ],
    jd: [
      { position: 1, user: '', city: '', points: 0 },
      { position: 2, user: '', city: '', points: 0 },
      { position: 3, user: '', city: '', points: 0 },
      { position: 4, user: '', city: '', points: 0 },
      { position: 5, user: '', city: '', points: 0 },
      { position: 6, user: '', city: '', points: 0 },
      { position: 7, user: '', city: '', points: 0 },
      { position: 8, user: '', city: '', points: 0 },
      { position: 9, user: '', city: '', points: 0 },
      { position: 10, user: '', city: '', points: 0 },
      { position: 11, user: '', city: '', points: 0 },
      { position: 12, user: '', city: '', points: 0 },
      { position: 13, user: '', city: '', points: 0 },
      { position: 14, user: '', city: '', points: 0 },
      { position: 15, user: '', city: '', points: 0 },
      { position: 16, user: '', city: '', points: 0 },
      { position: 17, user: '', city: '', points: 0 },
      { position: 18, user: '', city: '', points: 0 },
      { position: 19, user: '', city: '', points: 0 },
      { position: 20, user: '', city: '', points: 0 }
    ],
    gh3: [
      { position: 1, user: '', city: '', points: 0 },
      { position: 2, user: '', city: '', points: 0 },
      { position: 3, user: '', city: '', points: 0 },
      { position: 4, user: '', city: '', points: 0 },
      { position: 5, user: '', city: '', points: 0 },
      { position: 6, user: '', city: '', points: 0 },
      { position: 7, user: '', city: '', points: 0 },
      { position: 8, user: '', city: '', points: 0 },
      { position: 9, user: '', city: '', points: 0 },
      { position: 10, user: '', city: '', points: 0 },
      { position: 11, user: '', city: '', points: 0 },
      { position: 12, user: '', city: '', points: 0 },
      { position: 13, user: '', city: '', points: 0 },
      { position: 14, user: '', city: '', points: 0 },
      { position: 15, user: '', city: '', points: 0 },
      { position: 16, user: '', city: '', points: 0 },
      { position: 17, user: '', city: '', points: 0 },
      { position: 18, user: '', city: '', points: 0 },
      { position: 19, user: '', city: '', points: 0 },
      { position: 20, user: '', city: '', points: 0 }
    ],
    pes2018: [
      { position: 1, user: '', city: '', points: 0 },
      { position: 2, user: '', city: '', points: 0 },
      { position: 3, user: '', city: '', points: 0 },
      { position: 4, user: '', city: '', points: 0 },
      { position: 5, user: '', city: '', points: 0 },
      { position: 6, user: '', city: '', points: 0 },
      { position: 7, user: '', city: '', points: 0 },
      { position: 8, user: '', city: '', points: 0 },
      { position: 9, user: '', city: '', points: 0 },
      { position: 10, user: '', city: '', points: 0 },
      { position: 11, user: '', city: '', points: 0 },
      { position: 12, user: '', city: '', points: 0 },
      { position: 13, user: '', city: '', points: 0 },
      { position: 14, user: '', city: '', points: 0 },
      { position: 15, user: '', city: '', points: 0 },
      { position: 16, user: '', city: '', points: 0 },
      { position: 17, user: '', city: '', points: 0 },
      { position: 18, user: '', city: '', points: 0 },
      { position: 19, user: '', city: '', points: 0 },
      { position: 20, user: '', city: '', points: 0 }
    ]
  }

  const games = [
    { id: 'dbz', name: 'Dragon Ball Z BT - III', icon: '👊' },
    { id: 'mk11', name: 'Mortal Kombat 11', icon: '🥊' },
    { id: 'jd', name: 'Just Dance', icon: '🔥' },
    { id: 'gh3', name: 'Guitar Hero III', icon: '👑' },
    { id: 'pes2018', name: 'PES 2018', icon: '⚽' }
  ]

  return (
    <div className="liga-roo-page dynamic-bg">
      {/* Floating fire elements for dynamic background */}
      <div className="liga-floating-elements">
        <div className="liga-floating-element fire-1"></div>
        <div className="liga-floating-element fire-2"></div>
        <div className="liga-floating-element fire-3"></div>
        <div className="liga-floating-element fire-4"></div>
        <div className="liga-floating-element fire-5"></div>
        <div className="liga-floating-element fire-6"></div>
      </div>

             <div className="hero-section" style={{marginTop: 0, paddingTop: 0}}>
         <Carousel
           images={championImages}
           title="Nuestros Campeones"
           autoPlayInterval={5000}
           titleClassName="liga-roo-title"
         />
       </div>
      {/* Banner de WhatsApp */}
      <div className="whatsapp-banner-container" style={{display: 'flex', justifyContent: 'center', margin: '2rem 0'}}>
        <a href="https://chat.whatsapp.com/ly5k2WiLmQtKs2ekOo8Qmn?mode=ems_copy_h_t" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
          <img src={whatsappBanner} alt="Únete a nuestra comunidad gaming en WhatsApp" style={{maxWidth: '100%', borderRadius: '18px', boxShadow: '0 4px 24px rgba(84,188,213,0.15)', border: '3px solid #54BCD5'}} />
          <div style={{textAlign: 'center', marginTop: '0.5rem', fontWeight: 700, color: '#25D366', fontSize: '1.2rem'}}>
            <span style={{fontSize: '1.5rem', verticalAlign: 'middle'}}>🟢</span> Únete a nuestra comunidad gaming en WhatsApp
          </div>
        </a>
      </div>

      <div className="content-section">
        <div className="ranking-content">
          <h2 className="section-title">Ranking de la Liga ROO - Top 20</h2>
          
          <div className="games-buttons">
            {games.map((game) => (
              <button
                key={game.id}
                className={`game-button ${activeGame === game.id ? 'active' : ''}`}
                onClick={() => setActiveGame(game.id)}
              >
                <span className="game-icon">{game.icon}</span>
                <span className="game-name">{game.name}</span>
              </button>
            ))}
          </div>

          <div className="ranking-table-container">
            <table className="ranking-table">
              <thead>
                <tr>
                  <th>Puesto</th>
                  <th>Usuario</th>
                  <th>Ciudad</th>
                  <th>Puntos</th>
                </tr>
              </thead>
              <tbody>
                {rankings[activeGame].map((player) => (
                  <tr key={player.position} className={player.position <= 3 ? 'top-player' : ''}>
                    <td className="position">
                      {player.position === 1 && '🥇'}
                      {player.position === 2 && '🥈'}
                      {player.position === 3 && '🥉'}
                      {player.position > 3 && player.position}
                    </td>
                    <td className="username">{player.user}</td>
                    <td className="city">{player.city}</td>
                    <td className="points">{player.points.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LigaROO
