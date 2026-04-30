import '../App.css'
import bg from '../assets/Page.png'
import ArtItem from '../components/ArtItem'
import PageWrapper from '../components/PageWrapper'
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
    { id: 1, src: art1, alt: "Queen & Wolves" },
    { id: 2, src: art2, alt: "Forest Sprite Latest Design" },
    { id: 3, src: art3, alt : "The Queen" },
    { id: 4, src: art4, alt : "Reze FanArt"},
    { id: 5, src: art5, alt : "Evernight"},
    { id: 6, src: art6, alt : "Untitled" },
    { id: 7, src: art7, alt : "Vampire Duchess"},
    { id: 8, src: art8, alt : "Lost in Space"},
    { id: 9, src: art9, alt : "Pitfight WIP" },
    { id: 10, src: art10, alt : "DnD Character" },
    { id: 11, src: art11, alt : "DnD Character 2" },
    { id: 12, src: art12, alt : "DnD Character 3" },
    { id: 13, src: art13, alt : "Infested Body"},
    { id: 14, src: art14, alt : "Train Ride Home" },
    { id: 15, src: art15, alt : "Untitled 2" },
  ]

  return (
    <PageWrapper>
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
            <ArtItem key={img.id} src={img.src} alt={img.alt} />
          ))}
        </div>
      </div>
    </div>
    </PageWrapper>
  )
}