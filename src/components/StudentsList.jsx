import { useEffect, useState } from 'react'

function StudentsList() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:5000/students')
      .then((res) => res.json())
      .then((data) => {
        setStudents(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  if (loading) {
    return <p className="status">Loading students...</p>
  }

  return (
    <div className="card">
      <h2>Registered Students</h2>
      <div className="student-list">
        {students.map((student) => (
          <article key={student.id} className="student-card">
            <img src={student.imageUrl} alt={`${student.firstName} ${student.secondName}`} />
            <div>
              <h3>{student.firstName} {student.secondName}</h3>
              <p><strong>Admission:</strong> {student.admissionNumber}</p>
              <p><strong>Email:</strong> {student.email}</p>
              <p><strong>Course:</strong> {student.course}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default StudentsList
