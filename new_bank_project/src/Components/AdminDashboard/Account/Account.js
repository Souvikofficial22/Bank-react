import React from 'react'

import { useParams } from 'react-router-dom'
import NavBar from '../../../Layouts/NavigationBar/NavBar'
import ListOfAccount from './ListOfAccount/ListOfAccount'
import ButtonComponent from './ButtonComponent/ButtonComponent'


const Account = () => {
    const userDetails = {
        username: useParams().username,
        role: useParams().role,
    }
  return (
    <>
        <NavBar user={userDetails}/>
        <ListOfAccount />
        <ButtonComponent user={userDetails} />
    </>
  )
}

export default Account