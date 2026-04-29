import '../App.css'
import { useParams, useNavigate } from 'react-router-dom'
import bg from '../assets/Page.png'

import proj1MI from '../assets/ArtworkSA.png'
import Carousel from '../components/Carousel'
import sa1 from '../assets/SAImg1.png'
import sa2 from '../assets/SAImg2.png'
import sa3 from '../assets/SAImg3.png'
import sa4 from '../assets/SAImg4.png'

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
    image: "https://picsum.photos/800/400?2",
    tech: ["React", "CSS", "Framer Motion"],
    description:
      "A responsive portfolio website showcasing my projects and artwork.",
    details:
      "Built using React with reusable components and animation to create a modern, interactive UI."
  },

  "into-the-pit": {
    title: "Into the Pit",
    subtitle: "Game Design Project",
    image: "https://picsum.photos/800/400?3",
    tech: ["Godot", "GDScript", "Game Design", "Pixsquare", "Narrative Design"],
    description:
      "A narrative-driven experience focused on atmosphere and immersion.",
    details:
      "This project explores storytelling through environment and pacing."
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