import React from 'react'
import NavBar from '../../Layouts/NavigationBar/NavBar'
import { useParams } from 'react-router-dom'

const UserDashboard = () => {
    const userDetails = {
        username: useParams().username,
        role: useParams().role,
        userid:useParams().userid
      }
  return (
    <div>
        <h1>UserDashboard</h1>
        <NavBar user={userDetails}/>
    </div>
  )
}

export default UserDashboard