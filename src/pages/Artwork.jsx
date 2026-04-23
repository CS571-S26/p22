import '../App.css'
import { useEffect, useState, useRef } from 'react'
import bg from '../assets/Page.png'

export default function ArtworkPage() {
  const [images, setImages] = useState([])
  const loaderRef = useRef(null)

const MAX_IMAGES = 18

const loadMore = () => {
  if (images.length >= MAX_IMAGES) return

  const remaining = MAX_IMAGES - images.length
  const count = Math.min(9, remaining)

  const newImages = Array.from({ length: count }, (_, i) => ({
    id: images.length + i,
    src: `https://picsum.photos/400/400?random=${images.length + i}`
  }))

  setImages(prev => [...prev, ...newImages])
}
  useEffect(() => {
    loadMore()
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        loadMore()
      }
    })

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => observer.disconnect()
  }, [images])

  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="gallery-container">
        <h1 className="gallery-title">Art Gallery</h1>

        <div className="gallery-grid">
          {images.map(img => (
            <div key={img.id} className="gallery-item">
              <img src={img.src} alt="art" />
            </div>
          ))}
        </div>
        <div ref={loaderRef} className="loading-text">
          Loading more...
        </div>
      </div>
    </div>
  )
}