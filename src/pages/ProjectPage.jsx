import '../App.css'
import bg from '../assets/Page.png'
import ProjectCard from '../components/ProjectCard'
import PageWrapper from '../components/PageWrapper'

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
    <PageWrapper>
    <div
      className="page-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="project-container">
        <h1 className="project-title">Current Projects</h1>

        <p className="project-description-text">
          Here are some of the projects I’ve been working on recently, including game design,
          web dev, and other creative projects. Click on any project to learn
          more about the process, tools, and ideas behind it.
        </p>

        <div className="project-grid">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </div>
    </PageWrapper>
  )
}