import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ListOfCustomer = () => {
    const [customers,setCustomers] = useState([])
    const navigate = new useNavigate()
    const userDetails = {
        username: useParams().username,
        role: useParams().role,
      }
      const getAllCustomers = async()=>{
        let resp = await axios.get(`http://localhost:8081/customer/get`).catch(err=>{
            alert("Something went wrong")
            return
        })
        setCustomers(resp.data)
      }

      const handleDelete = async (custid)=>{
        let resp = await axios.delete(`http://localhost:8081/customer/delete/${custid}`)
        .catch(err=>{
          alert("Invalid request")
          return
        })
        getAllCustomers();
      }

      const handleUpdate =async(custid)=>{
        
        navigate(`/customer/update/${userDetails.username}/${userDetails.role}/${custid}`)
        

      }

      const userRows = customers.map((customer,index)=>{
        return(
            <tr>
                <td>{customer.customerId}</td>
                <td>{customer.firstName} {customer.lastName}</td>
                <td>{customer.user.role}</td>
                <td>{customer.accounts.length}</td>
                <td><button type="submit" onClick={()=>handleUpdate(customer.customerId)}>Update</button></td>
                <td><button type="submit" onClick={()=>handleDelete(customer.customerId)}>Delete</button></td>
            </tr>
            
                // console.log(customer.accounts.length())
            
        )
        })

      useEffect(()=>{
        getAllCustomers()
    },[])
  return (
    <table className="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">Sr no.</th>
                <th scope="col">Name</th>
                <th scope="col">Role</th>
                <th scope="col">Total Accounts</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {userRows}
            </tbody>
        </table>
  )
}

export default ListOfCustomer