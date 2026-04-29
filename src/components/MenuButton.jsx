import { motion } from "framer-motion"

export default function MenuButton({ text, onClick, variants }) {
  return (
    <motion.button
      className="menu-button"
      onClick={onClick}
      variants={variants}
      transition={{ duration: 0.3 }}
      whileHover={{ 
        scale: 1.05, 
        boxShadow: "0px 0px 15px rgba(255, 73, 137, 0.6)" 
      }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  )
}