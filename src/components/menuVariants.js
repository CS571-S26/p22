export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export const buttonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1, 0.3, 1],
    x: [0, -6, 6, -3, 0],
    y: [0, 3, -3, 2, 0]
  }
}