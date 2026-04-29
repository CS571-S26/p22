import '../App.css'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

import MenuButton from '../components/MenuButton'
import { containerVariants, buttonVariants } from '../components/menuVariants'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="home-container">
      <Card.Body className="text-center">
        <motion.div
          className="d-flex flex-column align-items-center gap-3"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <MenuButton
            text="About Me"
            onClick={() => navigate('/about')}
            variants={buttonVariants}
          />

          <MenuButton
            text="Art Gallery"
            onClick={() => navigate('/artwork')}
            variants={buttonVariants}
          />

          <MenuButton
            text="Project Portfolio"
            onClick={() => navigate('/projects')}
            variants={buttonVariants}
          />

        </motion.div>
      </Card.Body>
    </div>
  )
}