import { useState } from 'react'

const initialForm = {
  firstName: '',
  secondName: '',
  admissionNumber: '',
  email: '',
  course: '',
  imageUrl: '',
}

function AddStudentForm() {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('Saving student...')

    try {
      const response = await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Unable to save student')
      }

      setStatus('Student saved successfully!')
      setFormData(initialForm)
    } catch (error) {
      setStatus(error.message)
    }
  }

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Register Student</h2>
      <p className="subtitle">Add a new learner to the school database.</p>

      <div className="grid">
        <label>
          First Name
          <input name="firstName" value={formData.firstName} onChange={handleChange} required />
        </label>
        <label>
          Second Name
          <input name="secondName" value={formData.secondName} onChange={handleChange} required />
        </label>
        <label>
          Admission Number
          <input name="admissionNumber" value={formData.admissionNumber} onChange={handleChange} required />
        </label>
        <label>
          Email
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Course
          <input name="course" value={formData.course} onChange={handleChange} required />
        </label>
        <label>
          Image URL
          <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} required />
        </label>
      </div>

      <button type="submit">Save Student</button>
      {status ? <p className="status">{status}</p> : null}
    </form>
  )
}

export default AddStudentForm
