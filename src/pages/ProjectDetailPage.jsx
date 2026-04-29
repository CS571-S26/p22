import { useParams } from 'react-router-dom'
import '../App.css'

export default function ProjectDetailPage() {
  const { id } = useParams()

  const projectData = {
    "strung-along": {
      title: "Strung Along",
      content: "Full description of the game, mechanics, tools used..."
    },
    "website": {
      title: "Personal Website",
      content: "Built with React, focuses on UI/UX and interactivity."
    },
    "into-the-pit": {
      title: "Into the Pit",
      content: "A narrative-driven game project exploring atmosphere."
    }
  }

  const project = projectData[id]

  if (!project) return <h2>Project not found</h2>

  return (
    <div className="detail-container">
      <h1>{project.title}</h1>
      <p>{project.content}</p>
    </div>
  )
}