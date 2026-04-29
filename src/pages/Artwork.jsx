import '../App.css'
import bg from '../assets/Page.png'
import ArtItem from '../components/ArtItem'

import art1 from '../assets/Artwork1.png'
import art2 from '../assets/Artwork2.png'
import art3 from '../assets/Artwork3.png'
import art4 from '../assets/Artwork4.png'
import art5 from '../assets/Artwork5.png'
import art6 from '../assets/Artwork6.png'
import art7 from '../assets/Artwork7.png'
import art8 from '../assets/Artwork8.png'
import art9 from '../assets/Artwork9.png'
import art10 from '../assets/Artwork10.png'
import art11 from '../assets/Artwork11.png'
import art12 from '../assets/Artwork12.png'
import art13 from '../assets/Artwork13.png'
import art14 from '../assets/Artwork14.png'
import art15 from '../assets/Artwork15.png'

export default function ArtworkPage() {
  const images = [
    { id: 1, src: art1 },
    { id: 2, src: art2 },
    { id: 3, src: art3 },
    { id: 4, src: art4 },
    { id: 5, src: art5 },
    { id: 6, src: art6 },
    { id: 7, src: art7 },
    { id: 8, src: art8 },
    { id: 9, src: art9 },
    { id: 10, src: art10 },
    { id: 11, src: art11 },
    { id: 12, src: art12 },
    { id: 13, src: art13 },
    { id: 14, src: art14 },
    { id: 15, src: art15 },
  ]

  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="gallery-container">
        <h1 className="gallery-title">Art Gallery</h1>
        <p className="art-description-text">
          Here are some of my favorite pieces that I've created over the years,
          ranging from full rendered pieces to some sketches. Each piece holds a special
           place in my heart and represents a different phase of my artistic journey.
        </p>
        <p className="art-warning">
        ⚠ Some pieces may contain gore or mature themes.
        </p>
        <div className="gallery-grid">
          {images.map(img => (
            <ArtItem key={img.id} src={img.src} />
          ))}
        </div>
      </div>
    </div>
  )
}