import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ListOfAccount = () => {
    const [accounts,setAccounts] = useState([])
    const navigate = new useNavigate()
    const userDetails = {
        username: useParams().username,
        role: useParams().role,
      }
      const getAllAccounts = async()=>{
        let resp = await axios.get(`http://localhost:8081/account/get`).catch(err=>{
            alert("Something went wrong")
            return
        })
        setAccounts(resp.data)
      }

      const handleDelete = async (accnum)=>{
        let resp = await axios.delete(`http://localhost:8081/account/delete/${accnum}`)
        .catch(err=>{
          alert("Invalid request")
          return
        })
        getAllAccounts();
      }

      // const handleUpdate =async(accnum)=>{
        
      //   // navigate(`/account/update/${userDetails.username}/${userDetails.role}/${custid}`)
        

      // }

      const userRows = accounts.map((account,index)=>{
        return(
            <tr>
                <td>{account.accountNum}</td>
                <td>{account.bank.bankId}</td>
                <td>{account.customer.customerId}</td>
                <td>{account.balance}</td>
                {/* <td><button type="submit" onClick={()=>handleUpdate(account.accountNum)}>Update</button></td> */}
                <td><button type="submit" onClick={()=>handleDelete(account.accountNum)}>Delete</button></td>
            </tr>
            
                // console.log(account.accounts.length())
            
        )
        })

      useEffect(()=>{
        getAllAccounts()
    },[])
  return (
    <table className="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">Account No.</th>
                <th scope="col">Bank Id</th>
                <th scope="col">Customer Id</th>
                <th scope="col">Balance</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {userRows}
            </tbody>
        </table>
  )
}

export default ListOfAccount