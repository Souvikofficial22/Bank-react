import React from 'react'
import ListOfCustomer from './ListOfCustomer/ListOFCustomer'
import { useParams } from 'react-router-dom'
import NavBar from '../../../Layouts/NavigationBar/NavBar'
import ButtonComponent from './ButtonComponent/ButtonComponent'


const Customer = () => {
    const userDetails = {
        username: useParams().username,
        role: useParams().role,
    }
  return (
    <>
        <NavBar user={userDetails}/>
        <ListOfCustomer />
        <ButtonComponent user={userDetails} />
    </>
  )
}

export default Customer


