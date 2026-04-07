import '../App.css'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <Card className="custom-card shadow-lg">
        <Card.Body className="text-center">
          <h1 className="mb-4 text-primary">Welcome</h1>

          <div className="d-flex flex-column align-items-center gap-3">
            <Button
              className="menu-button"
              variant="secondary"
              onClick={() => navigate('/about')}
            >
              About
            </Button>

            <Button
              className="menu-button"
              variant="outline-dark"
              onClick={() => navigate('/artwork')}
            >
              Art Gallery
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}