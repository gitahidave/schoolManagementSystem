import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>School Management</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/students">Students</Link>
        <Link to="/add-student">Add Student</Link>
      </div>
    </nav>
  )
}

export default Navbar
