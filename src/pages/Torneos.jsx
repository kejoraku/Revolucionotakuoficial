import React from 'react'
import Carousel from '../components/Carousel'
import './Torneos.css'

const Torneos = () => {
  const tournamentImages = [
    { 
      url: 'https://www.egames.news/__export/1684616059726/sites/debate/img/2023/05/20/mortal_kombat_1_pc.jpg_172596871.jpg', 
      title: 'Mortal Kombat 1 Championship', 
      description: 'El torneo más sangriento del año con premios de $30,000' 
    },
    { 
      url: 'https://phantom-marca.unidadeditorial.es/d08f4af1ed60b2ee65b70c61080a613d/resize/660/f/webp/assets/multimedia/imagenes/2024/09/17/17265788212503.jpg', 
      title: 'FIFA 2025 Tournament', 
      description: 'Compite en nuestro torneo de FIFA con equipos profesionales' 
    },
    { 
      url: 'https://powerwave83.com/wp-content/uploads/2024/04/t8-title.jpg', 
      title: 'Tekken 8 Championship', 
      description: 'Torneo de Tekken 8 con los mejores jugadores de lucha' 
    },
    { 
      url: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_1100/ncom/software/switch-2/70010000095203/12d36a4c9bbf43a4babba2f203e1e271ef08de143349e08231dff56fd2bef70e', 
      title: 'Street Fighter 6 Cup', 
      description: 'Torneo de Street Fighter 6 para todos los niveles' 
    },
    { 
      url: 'https://f.rpp-noticias.io/2022/02/24/kof15_1222266.jpg', 
      title: 'The King of Fighters XV', 
      description: 'Festival de The King of Fighters XV con cosplay y premios' 
    }
  ]

  const activeTournaments = [
    { id: 1, title: 'Mortal Kombat 1 Championship', game: 'Mortal Kombat 1', date: '15-20 Marzo 2025', prize: '$30,000', participants: '64 jugadores', status: 'Inscripciones Abiertas', image: 'https://www.egames.news/__export/1684616059726/sites/debate/img/2023/05/20/mortal_kombat_1_pc.jpg_172596871.jpg', description: 'El torneo más sangriento del año con premios de $30,000 y la participación de jugadores profesionales de Mortal Kombat 1.' },
    { id: 2, title: 'FIFA 2025 Tournament', game: 'FIFA 2025', date: '25-30 Marzo 2025', prize: '$25,000', participants: '32 equipos', status: 'Próximamente', image: 'https://phantom-marca.unidadeditorial.es/d08f4af1ed60b2ee65b70c61080a613d/resize/660/f/webp/assets/multimedia/imagenes/2024/09/17/17265788212503.jpg', description: 'Compite en nuestro torneo de FIFA 2025 con equipos profesionales y premios increíbles.' },
    { id: 3, title: 'Tekken 8 Championship', game: 'Tekken 8', date: '5-10 Abril 2025', prize: '$20,000', participants: '48 jugadores', status: 'Inscripciones Abiertas', image: 'https://powerwave83.com/wp-content/uploads/2024/04/t8-title.jpg', description: 'Torneo de Tekken 8 con los mejores jugadores de lucha del mundo.' },
    { id: 4, title: 'Street Fighter 6 Cup', game: 'Street Fighter 6', date: '12-15 Abril 2025', prize: '$18,000', participants: '64 jugadores', status: 'Próximamente', image: 'https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_1100/ncom/software/switch-2/70010000095203/12d36a4c9bbf43a4babba2f203e1e271ef08de143349e08231dff56fd2bef70e', description: 'Torneo de Street Fighter 6 para todos los niveles de jugadores.' },
    { id: 5, title: 'The King of Fighters XV', game: 'The King of Fighters XV', date: '20-25 Abril 2025', prize: '$15,000', participants: '32 jugadores', status: 'Inscripciones Abiertas', image: 'https://f.rpp-noticias.io/2022/02/24/kof15_1222266.jpg', description: 'Festival de The King of Fighters XV con cosplay y premios especiales.' }
  ]

  return (
    <div className="torneos-page">
      {/* Floating elements for dynamic background */}
      <div className="torneos-floating-elements">
        <div className="torneos-floating-element"></div>
        <div className="torneos-floating-element"></div>
        <div className="torneos-floating-element"></div>
        <div className="torneos-floating-element"></div>
        <div className="torneos-floating-element"></div>
        <div className="torneos-floating-element"></div>
      </div>

      <div className="hero-section">
        <Carousel
          images={tournamentImages}
          title="Torneos de Gaming"
          autoPlayInterval={5000}
        />
      </div>

      <div className="content-section">
        <div className="tournaments-content">
          <h2 className="section-title">Torneos Activos</h2>
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
                  </div>
                  <p className="tournament-description">{tournament.description}</p>
                  <button
                    className="tournament-button"
                    onClick={() => {
                      const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                      if (isMobile) {
                        window.open('https://www.instagram.com/revolucionotakuoficial/', '_blank');
                      } else {
                        window.open('https://www.instagram.com/direct/t/17845492661911069', '_blank');
                      }
                    }}
                  >
                    {tournament.status === 'Inscripciones Abiertas' ? 'Inscribirse' : 'Más Información'}
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
