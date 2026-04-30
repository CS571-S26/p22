import '../App.css'
import { useParams, useNavigate } from 'react-router-dom'
import bg from '../assets/Page.png'

import proj1MI from '../assets/ArtworkSA.png'
import Carousel from '../components/Carousel'
import sa1 from '../assets/SAImg1.png'
import sa2 from '../assets/SAImg2.png'
import sa3 from '../assets/SAImg3.png'
import sa4 from '../assets/SAImg4.png'
import websiteimg from '../assets/Homepage.png'
import itp1 from '../assets/ArtworkITP1.png'
import itp2 from '../assets/Hero.png'
import itp3 from '../assets/Elm.png'
import itp4 from '../assets/Mavia.png'
import itp5 from '../assets/Mycelia.png'
import itp6 from '../assets/Karmila.png'
import itp7 from '../assets/ITPImg1.png'
import itp8 from '../assets/ITPImg2.png'
import itp9 from '../assets/ITPImg3.png'
import itp10 from '../assets/ITPImg4.png'


const projectData = {
  "strung-along": {
    title: "Strung Along",
    subtitle: "Game Jam Submission",
    link: "https://wucke.itch.io/strung-along",
    image: proj1MI,
    images: [sa1, sa2, sa3, sa4],
    tech: ["Godot", "GDScript", "Game Design", "Pixsquare"],
    description:
      "A puzzle-based game created during a game jam. Focused on mechanics and player experimentation. Additionally, the game represents the indigenous themes (Nahua-Pipil.)",

    details:
      "This project explores interaction through string-based mechanics and environmental puzzles. Designed and implemented core gameplay systems. Worked with another teammate to ultimately complete this game jam in about 3-4 days. We ended up winning 2nd place and $200. I focused mainly on sprite creation, design, and the main menu."
  },

  "website": {
    title: "Personal Website",
    subtitle: "Portfolio Project",
    image: websiteimg,
    tech: ["React", "CSS", "Framer Motion"],
    description:
      "You're looking at it :)! Explore and have fun!",
    details:
      "Built using React with reusable components and animation to create a modern, interactive UI with my own style."
  },

  "into-the-pit": {
    title: "Into the Pit",
    subtitle: "Game Design Project",
    image: itp1,
    images: [itp2, itp3, itp4, itp5, itp6, itp7, itp8, itp9, itp10],
    tech: ["Godot", "GDScript", "Game Design", "Pixsquare", "Narrative Design"],
    description:
      "A fantasty, medieval, Metroidvania video game in the works. It is a narrative-driven experience focused on atmosphere and immersion.",
    details:
      "You follow the main character, Lunae, into a mysterious town known for their infamous pit fights. You're hoping to experience this for yourself in order to win some cash due to your financial situation. You participate in this tournament like style fight that traverses in the underground world. As you explore, you find secrets about the townfolk, mysterious cave rot, and more."
  }
}

export default function ProjectDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const project = projectData[id]

  if (!project) return <h2>Project not found</h2>

  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="project-detail-card">

        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <img src={project.image} className="project-hero" />

        <h1 className="project-title">{project.title}</h1>
        <h3 className="project-subtitle">{project.subtitle}</h3>

        <div className="project-tech">
          {project.tech.map((t, i) => (
            <span key={i} className="tech-badge">{t}</span>
          ))}
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-section">
          <h2>Details</h2>
          <p>{project.details}</p>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project →
          </a>
        )}

        {project.images && (
          <>
            <h2 className="project-section">Gallery</h2>
            <Carousel images={project.images} />
          </>
        )}

      </div>
    </div>
  )
}