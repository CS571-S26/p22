import '../App.css'
import bg from '../assets/Page.png'
import ProjectCard from '../components/ProjectCard'
import PageWrapper from '../components/PageWrapper'
import proj1 from '../assets/ArtworkSA.png'
import proj2 from '../assets/Homepage.png'
import proj3 from '../assets/ArtworkITP1.png'

export default function ProjectPage() {
  const projects = [
    {
      id: "strung-along",
      title: "Strung Along",
      description: "A game jam submission focused on indegenous aspects and problem solving with another teammate.",
      image: proj1
    },
    {
      id: "website",
      title: "Personal Website",
      description: "A portfolio site showcasing my work (it's actually this project!)",
      image: proj2
    },
    {
      id: "into-the-pit",
      title: "Into the Pit",
      description: "A Metroidvania game design project exploring storytelling, immersive characters, familiar mechanics and more.",
      image: proj3
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