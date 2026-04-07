import '../App.css'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <Card className="custom-card shadow-lg">
        <Card.Body className="text-center">
          <h1 className="mb-4 text-primary">Welcome</h1>

          <div className="d-flex flex-column align-items-center gap-3">
            <button
              className="menu-button"
              onClick={() => navigate('/about')}
            >
              About
            </button>

            <button
              className="menu-button"
              onClick={() => navigate('/artwork')}
            >
              Art Gallery
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}