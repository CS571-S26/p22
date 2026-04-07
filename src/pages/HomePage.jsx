import '../App.css'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
        <Card.Body className="text-center">
          <div className="d-flex flex-column align-items-center gap-3">
            <motion.div
              className="d-flex flex-column align-items-center gap-3" initial="hidden" animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              <motion.button
                className="menu-button"
                onClick={() => navigate('/projects')}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: [0, 1, 0.3, 1],
                    x: [0, -6, 6, -3, 0],
                    y: [0, 3, -3, 2, 0]
                  }
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 73, 137, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                Project Portfolio
              </motion.button>

              <motion.button
                className="menu-button"
                onClick={() => navigate('/artwork')}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: [0, 1, 0.3, 1],
                    x: [0, -6, 6, -3, 0],
                    y: [0, 3, -3, 2, 0]
                  }
                }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 73, 137, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                Art Gallery
              </motion.button>

              <motion.button
                className="menu-button"
                onClick={() => navigate('/about')}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: [0, 1, 0.3, 1],
                    x: [0, -6, 6, -3, 0],
                    y: [0, 3, -3, 2, 0]
                  }
                }}
                transition={{ duration: 0.3}}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(255, 73, 137, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.button>
            </motion.div>
          </div>
        </Card.Body>
    </div>
  )
}