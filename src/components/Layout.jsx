import { Link, Outlet } from 'react-router-dom'
import '../App.css'

export default function Layout() {
  return (
    <div>
      <nav className="m-3">
        <Link to="/" className="me-3">Home</Link>
        <Link to="/about" className="ms-3">About</Link>
        <Link to="/artwork" className="ms-3">Art Gallery</Link>
        <Link to="/projects" className="ms-3">Project Portfolio</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
