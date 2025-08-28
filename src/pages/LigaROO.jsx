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

  // Datos de ranking por juego (hasta 20 participantes)
  const rankings = {
    mk1: [
      { position: 1, user: 'DragonSlayer', city: 'Buenos Aires', points: 2850 },
      { position: 2, user: 'NinjaWarrior', city: 'Córdoba', points: 2720 },
      { position: 3, user: 'ShadowKick', city: 'Rosario', points: 2650 },
      { position: 4, user: 'FireFist', city: 'Mendoza', points: 2580 },
      { position: 5, user: 'ThunderPunch', city: 'La Plata', points: 2510 },
      { position: 6, user: 'IceBlade', city: 'Tucumán', points: 2440 },
      { position: 7, user: 'WindStrike', city: 'Salta', points: 2370 },
      { position: 8, user: 'EarthShaker', city: 'Neuquén', points: 2300 },
      { position: 9, user: 'LightningBolt', city: 'Bahía Blanca', points: 2230 },
      { position: 10, user: 'StormRider', city: 'Mar del Plata', points: 2160 },
      { position: 11, user: 'FrostGiant', city: 'San Juan', points: 2090 },
      { position: 12, user: 'VolcanoKing', city: 'San Luis', points: 2020 },
      { position: 13, user: 'TornadoFury', city: 'Entre Ríos', points: 1950 },
      { position: 14, user: 'TsunamiWave', city: 'Chaco', points: 1880 },
      { position: 15, user: 'Avalanche', city: 'Río Negro', points: 1810 },
      { position: 16, user: 'Blizzard', city: 'Santa Cruz', points: 1740 },
      { position: 17, user: 'Cyclone', city: 'Tierra del Fuego', points: 1670 },
      { position: 18, user: 'Hurricane', city: 'La Pampa', points: 1600 },
      { position: 19, user: 'Typhoon', city: 'Formosa', points: 1530 },
      { position: 20, user: 'Monsoon', city: 'Misiones', points: 1460 }
    ],
    fc25: [
      { position: 1, user: 'GoalMaster', city: 'Buenos Aires', points: 3200 },
      { position: 2, user: 'StrikerPro', city: 'Córdoba', points: 3080 },
      { position: 3, user: 'MidfieldKing', city: 'Rosario', points: 2950 },
      { position: 4, user: 'DefenderElite', city: 'Mendoza', points: 2820 },
      { position: 5, user: 'GoalkeeperGod', city: 'La Plata', points: 2750 },
      { position: 6, user: 'WingerSpeed', city: 'Tucumán', points: 2680 },
      { position: 7, user: 'Playmaker', city: 'Salta', points: 2610 },
      { position: 8, user: 'BoxToBox', city: 'Neuquén', points: 2540 },
      { position: 9, user: 'TargetMan', city: 'Bahía Blanca', points: 2470 },
      { position: 10, user: 'FalseNine', city: 'Mar del Plata', points: 2400 },
      { position: 11, user: 'Sweeper', city: 'San Juan', points: 2330 },
      { position: 12, user: 'Libero', city: 'San Luis', points: 2260 },
      { position: 13, user: 'Regista', city: 'Entre Ríos', points: 2190 },
      { position: 14, user: 'Trequartista', city: 'Chaco', points: 2120 },
      { position: 15, user: 'Mezzala', city: 'Río Negro', points: 2050 },
      { position: 16, user: 'Carrilero', city: 'Santa Cruz', points: 1980 },
      { position: 17, user: 'InvertedWing', city: 'Tierra del Fuego', points: 1910 },
      { position: 18, user: 'ShadowStriker', city: 'La Pampa', points: 1840 },
      { position: 19, user: 'Enganche', city: 'Formosa', points: 1770 },
      { position: 20, user: 'Pivot', city: 'Misiones', points: 1700 }
    ],
    tekken8: [
      { position: 1, user: 'IronFist', city: 'Buenos Aires', points: 3100 },
      { position: 2, user: 'SteelKick', city: 'Córdoba', points: 2980 },
      { position: 3, user: 'ComboMaster', city: 'Rosario', points: 2850 },
      { position: 4, user: 'RageMode', city: 'Mendoza', points: 2720 },
      { position: 5, user: 'PowerStrike', city: 'La Plata', points: 2650 },
      { position: 6, user: 'CounterHit', city: 'Tucumán', points: 2580 },
      { position: 7, user: 'WallSplat', city: 'Salta', points: 2510 },
      { position: 8, user: 'BoundMove', city: 'Neuquén', points: 2440 },
      { position: 9, user: 'ScrewAttack', city: 'Bahía Blanca', points: 2370 },
      { position: 10, user: 'TailSpin', city: 'Mar del Plata', points: 2300 },
      { position: 11, user: 'HeatBurst', city: 'San Juan', points: 2230 },
      { position: 12, user: 'RageArt', city: 'San Luis', points: 2160 },
      { position: 13, user: 'HeatSmash', city: 'Entre Ríos', points: 2090 },
      { position: 14, user: 'PowerCrush', city: 'Chaco', points: 2020 },
      { position: 15, user: 'ArmorMove', city: 'Río Negro', points: 1950 },
      { position: 16, user: 'ParryKing', city: 'Santa Cruz', points: 1880 },
      { position: 17, user: 'LowCrush', city: 'Tierra del Fuego', points: 1810 },
      { position: 18, user: 'HighCrush', city: 'La Pampa', points: 1740 },
      { position: 19, user: 'MidCrush', city: 'Formosa', points: 1670 },
      { position: 20, user: 'ThrowBreak', city: 'Misiones', points: 1600 }
    ],
    sf6: [
      { position: 1, user: 'HadoukenPro', city: 'Buenos Aires', points: 2950 },
      { position: 2, user: 'ShoryukenKing', city: 'Córdoba', points: 2830 },
      { position: 3, user: 'TatsumakiElite', city: 'Rosario', points: 2700 },
      { position: 4, user: 'KikokenMaster', city: 'Mendoza', points: 2570 },
      { position: 5, user: 'DragonPunch', city: 'La Plata', points: 2500 },
      { position: 6, user: 'HurricaneKick', city: 'Tucumán', points: 2430 },
      { position: 7, user: 'SonicBoom', city: 'Salta', points: 2360 },
      { position: 8, user: 'FlashKick', city: 'Neuquén', points: 2290 },
      { position: 9, user: 'PsychoPower', city: 'Bahía Blanca', points: 2220 },
      { position: 10, user: 'VTrigger', city: 'Mar del Plata', points: 2150 },
      { position: 11, user: 'CriticalArt', city: 'San Juan', points: 2080 },
      { position: 12, user: 'DriveRush', city: 'San Luis', points: 2010 },
      { position: 13, user: 'DriveImpact', city: 'Entre Ríos', points: 1940 },
      { position: 14, user: 'DriveParry', city: 'Chaco', points: 1870 },
      { position: 15, user: 'DriveCancel', city: 'Río Negro', points: 1800 },
      { position: 16, user: 'PerfectParry', city: 'Santa Cruz', points: 1730 },
      { position: 17, user: 'CounterDrive', city: 'Tierra del Fuego', points: 1660 },
      { position: 18, user: 'Overdrive', city: 'La Pampa', points: 1590 },
      { position: 19, user: 'Burnout', city: 'Formosa', points: 1520 },
      { position: 20, user: 'Recovery', city: 'Misiones', points: 1450 }
    ],
    kofxv: [
      { position: 1, user: 'TeamLeader', city: 'Buenos Aires', points: 2800 },
      { position: 2, user: 'ComboChain', city: 'Córdoba', points: 2680 },
      { position: 3, user: 'MaxMode', city: 'Rosario', points: 2550 },
      { position: 4, user: 'RushCombo', city: 'Mendoza', points: 2420 },
      { position: 5, user: 'PowerGeyser', city: 'La Plata', points: 2350 },
      { position: 6, user: 'BusterWolf', city: 'Tucumán', points: 2280 },
      { position: 7, user: 'TerryBogard', city: 'Salta', points: 2210 },
      { position: 8, user: 'AndyBogard', city: 'Neuquén', points: 2140 },
      { position: 9, user: 'JoeHigashi', city: 'Bahía Blanca', points: 2070 },
      { position: 10, user: 'MaiShiranui', city: 'Mar del Plata', points: 2000 },
      { position: 11, user: 'KyoKusanagi', city: 'San Juan', points: 1930 },
      { position: 12, user: 'IoriYagami', city: 'San Luis', points: 1860 },
      { position: 13, user: 'ChizuruKagura', city: 'Entre Ríos', points: 1790 },
      { position: 14, user: 'LeonaHeidern', city: 'Chaco', points: 1720 },
      { position: 15, user: 'RalfJones', city: 'Río Negro', points: 1650 },
      { position: 16, user: 'ClarkStill', city: 'Santa Cruz', points: 1580 },
      { position: 17, user: 'AthenaAsamiya', city: 'Tierra del Fuego', points: 1510 },
      { position: 18, user: 'SieKensou', city: 'La Pampa', points: 1440 },
      { position: 19, user: 'ChinGentsai', city: 'Formosa', points: 1370 },
      { position: 20, user: 'ShingoYabuki', city: 'Misiones', points: 1300 }
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
