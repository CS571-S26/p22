import { Link, Outlet } from 'react-router-dom'
import '../App.css'

export default function Layout() {
  return (
    <div className="app-layout bg-main">   {/* 👈 ADD bg-main */}

      <nav className="sidebar">
        <h2 className="sidebar-title">Menu</h2>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/artwork">Art Gallery</Link>
        <Link to="/projects">Projects</Link>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>

    </div>
  )
}