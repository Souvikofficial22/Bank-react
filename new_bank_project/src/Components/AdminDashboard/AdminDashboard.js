import React from 'react'
import NavBar from '../../Layouts/NavigationBar/NavBar'
import { useParams } from 'react-router-dom'

const AdminDashboard = () => {
    const userDetails = {
        username: useParams().username,
        role: useParams().role,
      }
  return (
    <div>
        <h1>Admin Dashboard</h1>
        <NavBar user={userDetails}/>
    </div>
  )
}

export default AdminDashboard