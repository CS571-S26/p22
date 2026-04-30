import { useState } from 'react'

export default function ArtItem({ src, alt }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <div className="gallery-item" onClick={() => setExpanded(true)}>
        <img src={src} alt={alt} />
      </div>

      {expanded && (
        <div className="overlay" onClick={() => setExpanded(false)}>
          <img src={src} className="overlay-img" />
        </div>
      )}
    </>
  )
}