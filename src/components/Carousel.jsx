import React, { useState, useEffect, useRef } from 'react'
import './Carousel.css'

const Carousel = ({ images, title, autoPlayInterval = 5000, titleClassName = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  // Reinicia el temporizador
  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, autoPlayInterval)
  }

  useEffect(() => {
    resetInterval()
    return () => clearInterval(intervalRef.current)
  }, [images.length, autoPlayInterval, currentIndex])

  const goToSlide = (index) => {
    if (index >= 0 && index < images.length) {
      setCurrentIndex(index)
    }
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleIndicatorClick = (index) => {
    goToSlide(index)
  }

  // Cuando el usuario cambia manualmente, reiniciar el temporizador
  const handleManualChange = (changeFn) => {
    changeFn()
    resetInterval()
  }

  return (
    <div className="carousel-container">
      <h2 className={`carousel-title ${titleClassName}`}>{title}</h2>
      <div className="carousel">
        <button className="carousel-button prev" onClick={() => handleManualChange(goToPrevious)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div className="carousel-slides">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image.url})`,
                transform: `translateX(${(index - currentIndex) * 100}%)`
              }}
            >
              {image.link && (
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir enlace de ${image.title}`}
                  style={{ position: 'absolute', inset: 0, zIndex: 10 }}
                />
              )}
              <div className="slide-content">
                <h3 className="slide-title">{image.title}</h3>
                <p className="slide-description">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button next" onClick={() => handleManualChange(goToNext)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleManualChange(() => goToSlide(index))}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel


