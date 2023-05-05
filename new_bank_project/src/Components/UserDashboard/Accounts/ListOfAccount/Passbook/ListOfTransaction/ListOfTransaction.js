import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ListOfTransaction = ({accnum}) => {
    const [trans,setTrans] = useState([])
    const navigate = new useNavigate()
    const getAllTransactions = async()=>{
        let resp = await axios.get(`http://localhost:8081/transaction/transactions/${accnum}`).catch(err=>{
            alert("Something went wrong")
            return
        })
        console.log(resp);
        setTrans(resp.data)
      }
 
      const userRows = trans.map((transaction,index)=>{
        return(
            <tr>
                <td>{index+1}</td>
                <td>{transaction.transactionId}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.account.accountNum}</td>
                <td>{transaction.recieverAccNum}</td>
                <td>{transaction.transactionType}</td>
                <td>{transaction.date}</td>

            </tr>
            
                // console.log(account.accounts.length())
            
        )
        })
      useEffect(()=>{
        getAllTransactions()
    },[])

  return (
    <table className="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">Sr No.</th>
                <th scope="col">Transaction Id</th>
                <th scope="col">Amount</th>
                <th scope="col">Sender</th>
                <th scope="col">Reciever</th>
                <th scope="col">Type</th>
                <th scope="col">Date</th>
                </tr>
            </thead>
            <tbody>
                {userRows}
            </tbody>
        </table>
  )
}

export default ListOfTransaction