import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="card hero-card">
      <h2>Welcome to the School Management System</h2>
      <p>Use the navigation to register students and review the current learner list.</p>
      <Link className="button-link" to="/add-student">Register a Student</Link>
    </div>
  )
}

export default HomePage
