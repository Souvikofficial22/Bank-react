import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ListOfAccount = ({user}) => {
    const [accounts,setAccounts] = useState([])
    const navigate = new useNavigate()
    const getAllAccounts = async()=>{
        let resp = await axios.get(`http://localhost:8081/customer/user/${user.userid}`).catch(err=>{
            alert("Something went wrong")
            return
        })
        setAccounts(resp.data.accounts)
      }

      const handleTransaction =(accnum)=>{
        navigate(`/transaction/${user.userid}/${user.username}/${user.role}/${accnum}`)
      }

     const handlePassbook = (accnum)=>{
        navigate(`/passbook/${user.userid}/${user.username}/${user.role}/${accnum}`)
     } 
      const userRows = accounts.map((account,index)=>{
        return(
            <tr>
                <td>{account.accountNum}</td>
                <td>{account.bank.bankId}</td>
                <td>{account.bank.fullName}</td>
                <td>{account.balance}</td>
                <td><button type="submit" onClick={()=>handleTransaction(account.accountNum)}>Transaction</button></td>
                <td><button type="submit" onClick={()=>handlePassbook(account.accountNum)}>Show</button></td>
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
                <th scope="col">Bank Name</th>
                <th scope="col">Balance</th>
                <th scope="col">Transaction</th>
                <th scope="col">Passbook</th>
                </tr>
            </thead>
            <tbody>
                {userRows}
            </tbody>
        </table>
  )
}

export default ListOfAccount