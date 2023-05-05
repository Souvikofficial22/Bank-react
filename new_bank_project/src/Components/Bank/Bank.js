import React, { useState } from 'react'
import NavBar from '../../Layouts/NavigationBar/NavBar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ListOfBanks from './ListOfBanks/ListOfBanks'
import ButtonComponent from './BankAddButton/ButtonComponent'

const Bank = () => {
    const userDetails = {
        username: useParams().username,
        role: useParams().role,
    }
  return (
    <>
        <NavBar user={userDetails}/>
        <ListOfBanks />
        <ButtonComponent user={userDetails} />
    </>
  )
}

export default Bank