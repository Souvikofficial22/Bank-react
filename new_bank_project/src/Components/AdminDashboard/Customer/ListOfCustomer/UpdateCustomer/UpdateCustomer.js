import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateCustomer = () => {
    const firstName = useRef()
    const lastName = useRef()
    const role = useRef()
    const username = useRef()
    const password = useRef()
    const userid = useRef()
    
    const navigateObject = new useNavigate()

    const user = {
        username: useParams().username,
        role: useParams().role,
      }
    const custid = useParams().custid
    const [customer,setCustomer] = useState({})
    const getCustomerById= async()=>{
        
        let resp = await axios.get(`http://localhost:8081/customer/get/${custid}`).catch(err=>{
          alert("cannot find the bank")
          return
        })

       if(!resp.data)
       {
        alert("cannot fetch data")
        return
       }
       firstName.current.value = resp.data.firstName
       lastName.current.value = resp.data.lastName
       role.current.value = resp.data.user.role
       username.current.value = resp.data.user.username
       password.current.value = resp.data.user.password
       userid.current.value = resp.data.user.user_id

       console.log(userid.current.value);
    }
    
    useEffect(()=>{
        getCustomerById()
    },[])

    

    
    //   console.log(fullName.current,abbreviation.current)

    
    const updateHandler = async (e)=>{
        
        e.preventDefault();
        console.log("inside update customer");
        let resp = await axios.put(`http://localhost:8081/customer/update/${custid}/user/${userid.current.value}`,{
            "firstName": firstName.current.value,
            "lastName": lastName.current.value,
            "user":{
                "username":username.current.value,
                "role":role.current.value,
                "password":password.current.value
            }
        }).catch(err=>{
            alert("Error while updating")
            return
        })
        // if(!resp.data){
        //     alert("No data returned")
        //     return
        // }
        console.log(resp);
        console.log("updated")
        navigateObject(`/customer/${user.username}/${user.role}`)
    }

  return (
    <div className="card mt-3 bg-primary text-black" style={{width: "30rem"}}>
        <h1>UpdateForm</h1>
        <form>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Customer Id</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={custid} disabled/>
        </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={firstName}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" ref={lastName}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Role</label>
    <input type="text" class="form-control" id="exampleInputPassword1" ref={role}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">User Id</label>
    <input type="text" class="form-control" id="exampleInputPassword1" ref={userid}/>
  </div>
  <div class="mb-3"></div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInputPassword1" ref={username}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="text" class="form-control" id="exampleInputPassword1" ref={password}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={updateHandler}>Update</button>
</form>

    </div>
  )
}

export default UpdateCustomer