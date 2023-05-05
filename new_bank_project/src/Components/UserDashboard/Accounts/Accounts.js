import React from 'react'
import NavBar from '../../../Layouts/NavigationBar/NavBar'
import ListOfAccount from './ListOfAccount/ListOfAccount'
import { useParams } from 'react-router-dom'

const Accounts = () => {
    const userDetails = {
        username: useParams().username,
        role: useParams().role,
        userid: useParams().userid
    }

  return (
    <div>
        <NavBar user={userDetails} />
        <ListOfAccount user={userDetails} />
    </div>
  )
}

export default Accounts