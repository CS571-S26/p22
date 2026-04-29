import { useState } from 'react'
import '../App.css'

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="carousel">

      <img
        src={images[index]}
        alt={`slide-${index}`}
        className="carousel-img"
      />

      {images.length > 1 && (
        <>
          <button className="carousel-btn left" onClick={prev}>
            ‹
          </button>
          <button className="carousel-btn right" onClick={next}>
            ›
          </button>
        </>
      )}

      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

    </div>
  )
}