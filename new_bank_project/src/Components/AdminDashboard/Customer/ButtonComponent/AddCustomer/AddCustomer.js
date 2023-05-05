import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const AddCustomer = () => {
    const firstName = useRef()
    const lastName = useRef()
    const role = useRef()
    const username = useRef()
    const password = useRef()
    const userid = useRef()

    const navigationObject = new useNavigate()

    const user={
        username: useParams().username,
        role: useParams().role
    }
    const addCustomer = async(e)=>{
        e.preventDefault();
        let resp = await axios.post(`http://localhost:8081/customer/save`,{
            "firstName": firstName.current.value,
            "lastName": lastName.current.value,
            "user":{
                "username":username.current.value,
                "role":role.current.value,
                "password":password.current.value
            }
        }).catch(err=>{
          console.log(err)
          if(err.response.status==500)
          alert("username already taken")
          else
          alert("Error in adding Customer");
            return
        })

        if(!resp.data){
            alert("something has occured")
            return
        }

        navigationObject(`/customer/${user.username}/${user.role}`)
    }
  return (
    <div className="card mt-3 bg-primary text-black" style={{width: "30rem"}}>
    <h1>Add Customer</h1>
    <form>
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
  <div class="mb-3"></div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Username</label>
    <input type="text" class="form-control" id="exampleInputPassword1" ref={username}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" ref={password}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={addCustomer}>Add</button>
</form>

</div>
  )
}

export default AddCustomer