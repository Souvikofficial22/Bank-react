import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const AddAccount = () => {
    const accNum = useRef()
    const balance = useRef()
    const custid = useRef()
    const bankid = useRef()

    const navigationObject = new useNavigate()

    const user={
        username: useParams().username,
        role: useParams().role
    }
    const addAccount = async(e)=>{
        e.preventDefault();
        let resp = await axios.post(`http://localhost:8081/account/save`,{
            
                "accountNum":accNum.current.value,
                "balance":balance.current.value
            
        }).catch(err=>{
            alert("Error in adding Customer");
            return
        })

        if(!resp.data){
            alert("something has occured")
            return
        }

        let resp2 = await axios.put(`http://localhost:8081/account/update/${accNum.current.value}/bankid/${bankid.current.value}/custid/${custid.current.value}`)
        .catch(err=>{
            alert("error while updating")
            return
        })

        navigationObject(`/account/${user.username}/${user.role}`)
    }
  return (
    <div className="card mt-3 bg-primary text-black" style={{width: "30rem"}}>
    <h1>Add Account</h1>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Account Number</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={accNum}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Balance</label>
    <input type="text" class="form-control" id="exampleInputPassword1" ref={balance}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Bank Id</label>
    <input type="text" class="form-control" id="exampleInputPassword1" ref={bankid}/>
  </div>
  <div class="mb-3"></div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Customer Id</label>
    <input type="text" class="form-control" id="exampleInputPassword1" ref={custid}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={addAccount}>Add</button>
</form>

</div>
  )
}

export default AddAccount