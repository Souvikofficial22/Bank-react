import React, { useEffect, useState } from 'react'
import NavBar from '../../../../../Layouts/NavigationBar/NavBar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ListOfTransaction from './ListOfTransaction/ListOfTransaction'

const Passbook = () => {
    const [balance,setBalance] = useState()
    const navigate = new useNavigate()
    const userDetails = {
        username: useParams().username,
        role: useParams().role,
        userid: useParams().userid,
        accnum: useParams().accnum
    }
    const getCustomer = async()=>{
        let resp = await axios.get(`http://localhost:8081/customer/user/${userDetails.userid}`).catch(err=>{
            alert("Something went wrong jdjdkask")
            return
        })
        setBalance(resp.data.totalBalance)
      }
      useEffect(()=>{
        getCustomer()
    },[])
  return (
    <div>
        <h1>Passbook</h1>
        <NavBar user={userDetails} />
        <br></br>
        <button type="button" class="btn btn-success d-flex" disabled>Total Balance: {balance}</button>
        <br/>
        <ListOfTransaction accnum={userDetails.accnum} />
    </div>
  )
}

export default Passbook