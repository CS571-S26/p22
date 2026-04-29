import '../App.css'
import bg from '../assets/Page.png'
import ProjectCard from '../components/ProjectCard'

export default function ProjectPage() {
  const projects = [
    {
      id: "strung-along",
      title: "Strung Along",
      description: "A game jam submission focused on puzzle mechanics.",
      image: "https://picsum.photos/400/300?1"
    },
    {
      id: "website",
      title: "Personal Website",
      description: "A portfolio site showcasing my work.",
      image: "https://picsum.photos/400/300?2"
    },
    {
      id: "into-the-pit",
      title: "Into the Pit",
      description: "A game design project exploring storytelling.",
      image: "https://picsum.photos/400/300?3"
    }
  ]

  return (
    <div
      className="page-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="project-container">
        <h1 className="project-title">Projects</h1>

        <div className="project-grid">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
  )
}