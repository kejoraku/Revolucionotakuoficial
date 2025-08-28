import React, { useState } from 'react'
import Carousel from '../components/Carousel'
import './LigaROO.css'

const LigaROO = () => {
  const [activeGame, setActiveGame] = useState('mk1')

  // Imágenes para el carrusel de campeones (1170x500)
  const championImages = [
    {
      url: '/champions/mk1_champion.jpg',
      title: 'Campeón Mortal Kombat 1',
      description: 'El guerrero más letal del torneo - Sub-Zero Master'
    },
    {
      url: '/champions/fc25_champion.jpg',
      title: 'Campeón FC 25',
      description: 'El estratega del fútbol virtual - GoalMaster Pro'
    },
    {
      url: '/champions/tekken8_champion.jpg',
      title: 'Campeón Tekken 8',
      description: 'El maestro de las artes marciales - Iron Fist Legend'
    },
    {
      url: '/champions/sf6_champion.jpg',
      title: 'Campeón Street Fighter 6',
      description: 'El luchador más rápido - Hadouken Master'
    },
    {
      url: '/champions/kofxv_champion.jpg',
      title: 'Campeón The King of Fighters XV',
      description: 'El rey de los combates - Team Leader Elite'
    },
    {
      url: '/champions/general_champion.jpg',
      title: 'Campeón General',
      description: 'El mejor de todos los juegos - Ultimate Champion'
    },
    {
      url: '/champions/legendary_champion.jpg',
      title: 'Campeón Legendario',
      description: 'El legendario de la Liga ROO - Eternal Warrior'
    }
  ]

  // Datos de ranking por juego
  const rankings = {
    mk1: [
      { position: 1, user: 'DragonSlayer', city: 'Buenos Aires', points: 2850 },
      { position: 2, user: 'NinjaWarrior', city: 'Córdoba', points: 2720 },
      { position: 3, user: 'ShadowKick', city: 'Rosario', points: 2650 },
      { position: 4, user: 'FireFist', city: 'Mendoza', points: 2580 },
      { position: 5, user: 'ThunderPunch', city: 'La Plata', points: 2510 }
    ],
    fc25: [
      { position: 1, user: 'GoalMaster', city: 'Buenos Aires', points: 3200 },
      { position: 2, user: 'StrikerPro', city: 'Córdoba', points: 3080 },
      { position: 3, user: 'MidfieldKing', city: 'Rosario', points: 2950 },
      { position: 4, user: 'DefenderElite', city: 'Mendoza', points: 2820 },
      { position: 5, user: 'GoalkeeperGod', city: 'La Plata', points: 2750 }
    ],
    tekken8: [
      { position: 1, user: 'IronFist', city: 'Buenos Aires', points: 3100 },
      { position: 2, user: 'SteelKick', city: 'Córdoba', points: 2980 },
      { position: 3, user: 'ComboMaster', city: 'Rosario', points: 2850 },
      { position: 4, user: 'RageMode', city: 'Mendoza', points: 2720 },
      { position: 5, user: 'PowerStrike', city: 'La Plata', points: 2650 }
    ],
    sf6: [
      { position: 1, user: 'HadoukenPro', city: 'Buenos Aires', points: 2950 },
      { position: 2, user: 'ShoryukenKing', city: 'Córdoba', points: 2830 },
      { position: 3, user: 'TatsumakiElite', city: 'Rosario', points: 2700 },
      { position: 4, user: 'KikokenMaster', city: 'Mendoza', points: 2570 },
      { position: 5, user: 'DragonPunch', city: 'La Plata', points: 2500 }
    ],
    kofxv: [
      { position: 1, user: 'TeamLeader', city: 'Buenos Aires', points: 2800 },
      { position: 2, user: 'ComboChain', city: 'Córdoba', points: 2680 },
      { position: 3, user: 'MaxMode', city: 'Rosario', points: 2550 },
      { position: 4, user: 'RushCombo', city: 'Mendoza', points: 2420 },
      { position: 5, user: 'PowerGeyser', city: 'La Plata', points: 2350 }
    ]
  }

  const games = [
    { id: 'mk1', name: 'Mortal Kombat 1', icon: '🥊' },
    { id: 'fc25', name: 'FC 25', icon: '⚽' },
    { id: 'tekken8', name: 'Tekken 8', icon: '👊' },
    { id: 'sf6', name: 'Street Fighter 6', icon: '🔥' },
    { id: 'kofxv', name: 'The King of Fighters XV', icon: '👑' }
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

      <div className="content-section">
        <div className="ranking-content">
          <h2 className="section-title">Ranking de la Liga ROO</h2>
          
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
