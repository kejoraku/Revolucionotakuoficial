import React from 'react'
import Carousel from '../components/Carousel'
import './Eventos.css'
import convencion_anime_2025 from '../../contenido/eventos/convencion_anime_2025.jpg';
import gaming_tournament from '../../contenido/eventos/gaming_tournament.jpg';
import manga_reading_club from '../../contenido/eventos/manga_reading_club.jpg';
import anime_movie_night from '../../contenido/eventos/anime_movie_night.jpg';
import cosplay_workshop from '../../contenido/eventos/cosplay_workshop.jpg';



const Eventos = () => {
  const eventImages = [
    {
      url: convencion_anime_2025,
      /*url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',*/
      title: 'Convención Anime 2025',
      description: 'El evento más grande del año con cosplay, paneles y mucho más'
    },
    {
      url: gaming_tournament,
      /*url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',*/
      title: 'Gaming Tournament',
      description: 'Compite en nuestro torneo de videojuegos con premios increíbles'
    },
    {
      url: manga_reading_club,
      /*url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',*/
      title: 'Manga Reading Club',
      description: 'Únete a nuestro club de lectura de manga semanal'
    },
    {
      url: anime_movie_night,
      /*url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',*/
      title: 'Anime Movie Night',
      description: 'Proyecciones especiales de las mejores películas de anime'
    },
    {
      url: cosplay_workshop,
      /*url: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',*/
      title: 'Cosplay Workshop',
      description: 'Aprende técnicas de cosplay con expertos del mundo otaku'
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Convención Anime 2025',
      date: '15-17 Marzo 2025',
      location: 'Centro de Convenciones',
      image: convencion_anime_2025,
      /*image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',*/
      description: 'El evento más grande del año con cosplay, paneles, artistas y mucho más.'
    },
    {
      id: 2,
      title: 'Gaming Tournament',
      date: '22 Marzo 2025',
      location: 'Arena Gaming',
      image: gaming_tournament,
      /*image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',*/
      description: 'Compite en nuestro torneo de videojuegos con premios increíbles.'
    },
    {
      id: 3,
      title: 'Manga Reading Club',
      date: 'Cada Sábado',
      location: 'Biblioteca Otaku',
      image: manga_reading_club,
      /*image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',*/
      description: 'Únete a nuestro club de lectura de manga semanal.'
    },
    {
      id: 4,
      title: 'Anime Movie Night',
      date: '28 Marzo 2025',
      location: 'Cine Otaku',
      image: anime_movie_night,
      /*image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',*/
      description: 'Proyecciones especiales de las mejores películas de anime.'
    }
  ]

  return (
    <div className="eventos-page">
      {/* Floating elements for dynamic background */}
      <div className="eventos-floating-elements">
        <div className="eventos-floating-element"></div>
        <div className="eventos-floating-element"></div>
        <div className="eventos-floating-element"></div>
        <div className="eventos-floating-element"></div>
        <div className="eventos-floating-element"></div>
      </div>

      <div className="hero-section">
        <Carousel 
          images={eventImages} 
          title="Próximos Eventos" 
          autoPlayInterval={5000}
        />
      </div>

      <div className="content-section">
        <div className="events-content">
          <h2 className="section-title">Calendario de Eventos</h2>
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-content">
                  <span className="event-date">{event.date}</span>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-location">{event.location}</p>
                  <p className="event-description">{event.description}</p>
                  <button className="event-button" onClick={() => {
                    if (event.title === 'Convención Anime 2025') {
                      window.open('https://animeconar.com/', '_blank');
                    }
                  }}>Más Información</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Eventos
