import { Link, Outlet } from 'react-router-dom'
import '../App.css'

export default function Layout() {
  return (
    <div>
      <nav className="m-3">
        <Link to="/" className="me-3">Home</Link>
        <Link to="/about/">About</Link>
        <Link to="/artwork" className="ms-3">Artwork</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
