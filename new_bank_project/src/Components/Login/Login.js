import axios from 'axios'
import React, { useRef, useState }  from 'react'
import { useNavigate } from 'react-router-dom'

const Login= () => {
    const navigateObject = new useNavigate()


    const username = useRef()
    const password = useRef()
    const handleMyLogin = async (e)=>{
        e.preventDefault();
        //doing validation
        const user = {
            username: username.current.value,
            password: password.current.value
        }
        if(user.username==="" || user.password===""){
            alert("Username or password is empty")
            return
        }
            let resp= await axios.post(`http://localhost:8081/login/user`,{
                "username":user.username,
                "password":user.password
            }).catch(err=>{
                console.log(err)
                if(err.response.status===400){
                    alert("Invalid Username or Password")
                    return
                }
            })
            

        console.log(resp.data);
        if(!resp.data.username){
            alert("User not found")
            return
        }
        if (resp.data.role == "admin") {
            //navigate to admin dashboard
            navigateObject(`/admindashboard/${user.username}/${resp.data.role}`)
            return
        }
        //navigate to userDashboard
        navigateObject(`/userdashboard/${resp.data.user_id}/${user.username}/${resp.data.role}`)
        return
    
    }

  return (
    <>
        <form >
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="text" className="form-control" id="exampleInputEmail1" ref={username}
                />
                
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" ref={password}
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleMyLogin}>Submit</button>
        </form><br/>
    </>
  )
}

export default Login

