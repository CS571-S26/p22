import { useParams, useNavigate } from 'react-router-dom'
import '../App.css'
import bg from '../assets/Page.png'

export default function ProjectDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const projectData = {
    "strung-along": {
      title: "Strung Along",
      subtitle: "Game Jam Submission",
      image: "https://picsum.photos/800/400?1",
      tech: ["Unity", "C#", "Game Design"],
      description:
        "A puzzle-based game created during a game jam. Focused on mechanics and player experimentation.",
      details:
        "This project explores interaction through string-based mechanics and environmental puzzles. Designed and implemented core gameplay systems."
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
      tech: ["Unity", "Narrative Design"],
      description:
        "A narrative-driven experience focused on atmosphere and immersion.",
      details:
        "This project explores storytelling through environment and pacing, with emphasis on player emotion and exploration."
    }
  }

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

      </div>
    </div>
  )
}