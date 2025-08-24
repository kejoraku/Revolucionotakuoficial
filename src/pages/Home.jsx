import React from 'react'
import Carousel from '../components/Carousel'
import './Home.css'

import nuevas_temporadas from '../../contenido/nuevas_temporadas.jpg';
import manga_exclusivo from '../../contenido/mangas.jpg';
import gaming_news from '../../contenido/gaming_news.jpeg';
import bienvenida from '../../contenido/inicio/bienvenida.jpg';
import lanzamientos from '../../contenido/inicio/ultimos_lanzamientos.jpg';
import comunidad from '../../contenido/inicio/comunidad.jpg';
import gaming_anime from '../../contenido/inicio/gaming_anime.jpg';
import eventos_especiales from '../../contenido/inicio/eventos_especiales.jpg';

const Home = () => {
  const homeImages = [
    {
      url: bienvenida,
      /*url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',*/
      title: 'Bienvenido a Revolución Otaku',
      description: 'Tu destino definitivo para todo lo relacionado con anime, manga y gaming'
    },
    {
      url: lanzamientos,
      /*url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',*/
      title: 'Últimos Lanzamientos',
      description: 'Descubre las nuevas series y películas que están causando sensación'
    },
    {
      url: comunidad,
      /*url: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',*/
      title: 'Comunidad Otaku',
      description: 'Conecta con otros fans y comparte tu pasión por el anime'
    },
    {
      url: gaming_anime,
      /*url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',*/
      title: 'Gaming y Anime',
      description: 'Explora el mundo de los videojuegos inspirados en anime'
    },
    {
      url: eventos_especiales, 
      /*url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',*/
      title: 'Eventos Especiales',
      description: 'No te pierdas nuestros eventos exclusivos y convenciones'
    }
  ]

  return (
    <div className="home-page">
      {/* Floating elements for dynamic background */}
      <div className="home-floating-elements">
        <div className="home-floating-element"></div>
        <div className="home-floating-element"></div>
        <div className="home-floating-element"></div>
        <div className="home-floating-element"></div>
      </div>

      <div className="hero-section">
        <Carousel 
          images={homeImages} 
          title="Destacados de la Semana" 
          autoPlayInterval={5000}
        />
      </div>

      <div className="content-section">
        <div className="featured-content">
          <h2 className="section-title">Contenido Destacado</h2>
          <div className="content-grid">
            <div className="content-card">
              <div className="card-image">
                <img src={nuevas_temporadas}/>
                {/*<img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Anime" />*/}
              </div>
              <div className="card-content">
                <h3>Nuevas Temporadas</h3>
                <p>Descubre las últimas temporadas de tus series favoritas</p>
                <button className="card-button">Ver Más</button>
              </div>
            </div>

            <div className="content-card">
              <div className="card-image">
                <img src={manga_exclusivo}/>
                {/*<img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Manga" />*/}
              </div>
              <div className="card-content">
                <h3>Manga Exclusivo</h3>
                <p>Lee los últimos capítulos de los mangas más populares</p>
                <button className="card-button">Leer Ahora</button>
              </div>
            </div>

            <div className="content-card">
              <div className="card-image">
                <img src={gaming_news}/>
                {/*<img src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Gaming" />*/}
              </div>
              <div className="card-content">
                <h3>Gaming News</h3>
                <p>Las últimas noticias del mundo de los videojuegos</p>
                <button className="card-button">Explorar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
