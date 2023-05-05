import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Paginate from '../../../Layouts/Pagination/Paginate'

const ListOfBanks = () => {
    const [banks,setBanks] = useState([])
    const [limit, setLimit] = useState(1);
    const [offset, setOffset] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const navigate = new useNavigate()
    const userDetails = {
        username: useParams().username,
        role: useParams().role,
      }
      const getAllBanks = async()=>{
        let size=limit
        let page=offset-1
        let resp = await axios.get(`http://localhost:8081/bank/get?page=${page}&size=${size}`).catch(err=>{
            alert("Something went wrong")
            return
        })
        setTotalCount(resp.data.length)
        setBanks(resp.data)
        // console.log(banks.fullName)
      }

      const handleDelete = async (bankid)=>{
        let resp = await axios.delete(`http://localhost:8081/bank/delete/${bankid}`)
        .catch(err=>{
          alert("Invalid request")
          return
        })
        getAllBanks();
      }

      const handleUpdate =async(bankid)=>{
        
        navigate(`/bank/update/${userDetails.username}/${userDetails.role}/${bankid}`)
        

      }

      const userRows = banks.map((bank,index)=>{
        return(
            <tr>
                <td>{bank.bankId}</td>
                <td>{bank.fullName}</td>
                <td>{bank.abbreviation}</td>
                <td>{bank.accounts.length}</td>
                <td><button type="submit" onClick={()=>handleUpdate(bank.bankId)}>Update</button></td>
                <td><button type="submit" onClick={()=>handleDelete(bank.bankId)}>Delete</button></td>
            </tr>
            
                // console.log(bank.accounts.length())
            
        )
        })

      useEffect(()=>{
        getAllBanks()
    },[limit, offset])
  return (
    <>
    <table className="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">Sr no.</th>
                <th scope="col">Name</th>
                <th scope="col">Abbv.</th>
                <th scope="col">Total Accounts</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {userRows}
            </tbody>
        </table>
        <div className="card-footer white-background">
            {totalCount > 0 &&
              <Paginate totalCount={totalCount} limit={limit} offset={offset} setLimit={setLimit} setOffset={setOffset} />
            }
          </div>
          </>
  )
}

export default ListOfBanks