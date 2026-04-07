import '../App.css'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
        <Card.Body className="text-center">
          <div className="d-flex flex-column align-items-center gap-3">
            <button
              className="menu-button"
              onClick={() => navigate('/projects')}
            >Project Portfolio</button>
            <button
              className="menu-button"
              onClick={() => navigate('/artwork')}
            >Art Gallery</button>
            <button
              className="menu-button"
              onClick={() => navigate('/about')}
            >About</button>
          </div>
        </Card.Body>
    </div>
  )
}