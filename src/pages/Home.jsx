import React, { useRef, useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import './Home.css'

import nuevas_temporadas from '../../contenido/nuevas_temporadas.jpg';
import manga_exclusivo from '../../contenido/mangas.jpg';
import gaming_news from '../../contenido/gaming_news.jpeg';
import bienvenida from '../../contenido/inicio/bienvenida.jpg';
import ultimos_lanzamientos from '../../contenido/inicio/inicio_ultimos_lanzamientos.jpg';
import comunidad from '../../contenido/inicio/comunidad.jpg';
import gaming_anime from '../../contenido/inicio/gaming_anime.jpg';
import eventos_especiales from '../../contenido/inicio/eventos_especiales.jpg';
import inicio_espacio_publicitario_1 from '../../contenido/inicio/inicio_espacio_publicitario_1.png';
import inicio_espacio_publicitario_2 from '../../contenido/inicio/inicio_espacio_publicitario_2.jpg';

const Home = () => {
  const homeImages = [
    {
      url: bienvenida,
      title: 'Bienvenido a Revolución Otaku',
      description: 'Tu destino definitivo para todo lo relacionado con anime, manga y gaming'
    },
    {
      url: ultimos_lanzamientos,
      title: 'Últimos Lanzamientos',
      description: 'Descubre las nuevas series y películas que están causando sensación'
    },
    {
      url: inicio_espacio_publicitario_1,
      title: 'AliExpress',
      description: '¡No te pierdas nuestras novedades y promociones exclusivas!'
    },
    {
      url: comunidad,
      title: 'Comunidad Otaku',
      description: 'Conecta con otros fans y comparte tu pasión por el anime'
    },
    {
      url: gaming_anime,
      title: 'Gaming y Anime',
      description: 'Explora el mundo de los videojuegos inspirados en anime'
    },
    {
      url: inicio_espacio_publicitario_2,
      title: 'msi',
      description: '¡Participa en sorteos y eventos especiales de la comunidad!'
    },
    {
      url: eventos_especiales, 
      title: 'Eventos Especiales',
      description: 'No te pierdas nuestros eventos exclusivos y convenciones'
    }
  ]

  const slideRef = useRef(null);
  const [slideVisible, setSlideVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!slideRef.current) return;
      const rect = slideRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setSlideVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-page dynamic-bg">
      {/* Floating elements for dynamic background */}
      <div className="home-floating-elements">
        <div className="home-floating-element"></div>
        <div className="home-floating-element"></div>
        <div className="home-floating-element"></div>
        <div className="home-floating-element"></div>
      </div>
      <div className="hero-section" style={{marginTop: 0, paddingTop: 0}}>
        <Carousel 
          images={homeImages} 
          title="Destacados de la Semana" 
          autoPlayInterval={5000}
        />
      </div>
      {/* Slide + Reseña entre carrusel y tarjetas */}
      <div ref={slideRef} className={`home-slide-review${slideVisible ? ' visible' : ''}`}>
        <div className="slide-image">
          <img src={comunidad} alt="Grupo de Anime" />
        </div>
        <div className="slide-review-text">
          <h3>Grupo de Anime Revolución Otaku</h3>
          <p>Únete a nuestro grupo de anime donde compartimos noticias, recomendaciones, memes y organizamos eventos para todos los fans. ¡Vive la pasión otaku con nosotros y haz nuevos amigos que comparten tu afición!</p>
        </div>
      </div>

      <div className="content-section">
        <div className="featured-content">
          <h2 className="section-title">Contenido Destacado</h2>
          <div className="content-grid">
            <div className="content-card">
              <div className="card-image">
                <img src={nuevas_temporadas}/>
              </div>
              <div className="card-content">
                <h3>Nuevas Temporadas</h3>
                <p>Descubre las últimas temporadas de tus series favoritas</p>
                <button className="card-button" onClick={() => window.open('https://www.crunchyroll.com/videos/new', '_blank')}>Ver Más</button>
              </div>
            </div>

            <div className="content-card">
              <div className="card-image">
                <img src={manga_exclusivo}/>
              </div>
              <div className="card-content">
                <h3>Manga Exclusivo</h3>
                <p>Lee los últimos capítulos de los mangas más populares</p>
                <button className="card-button" onClick={() => window.open('https://inmanga.com/', '_blank')}>Leer Ahora</button>
              </div>
            </div>

            <div className="content-card">
              <div className="card-image">
                <img src={gaming_news}/>
              </div>
              <div className="card-content">
                <h3>Gaming News</h3>
                <p>Las últimas noticias del mundo de los videojuegos</p>
                <button className="card-button" onClick={() => window.open('https://www.levelup.com/noticias/', '_blank')}>Explorar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
