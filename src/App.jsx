import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import AddStudentForm from './components/AddStudentForm'
import StudentsList from './components/StudentsList'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsList />} />
          <Route path="/add-student" element={<AddStudentForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
