import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateForm = () => {
    const fullName = useRef()
    const abbreviation = useRef()
    
    const navigateObject = new useNavigate()

    const user = {
        username: useParams().username,
        role: useParams().role,
      }
    const bankid = useParams().bankid
    const [bank,setBank] = useState({})
    const getBankById= async(bankid)=>{
        
        let resp = await axios.get(`http://localhost:8081/bank/get/${bankid}`).catch(err=>{
          alert("cannot find the bank")
          return
        })

       if(!resp.data)
       {
        alert("cannot fetch data")
        return
       }
       fullName.current.value = resp.data.fullName
       abbreviation.current.value = resp.data.abbreviation
    }
    
    useEffect(()=>{
        getBankById(bankid)
    },[])

    

    
    //   console.log(fullName.current,abbreviation.current)

    
    const updateBank = async (e)=>{
        
        e.preventDefault();
        console.log("inside update bank");
        let resp = await axios.put(`http://localhost:8081/bank/update/${bankid}`,{
            "fullName": fullName.current.value,
            "abbreviation": abbreviation.current.value
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
        navigateObject(`/bank/${user.username}/${user.role}`)
    }

  return (
    <div className="card mt-3 bg-primary text-black" style={{width: "30rem"}}>
        <h1>UpdateForm</h1>
        <form>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Bank Id</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={bankid}/>
        </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={fullName}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Abbreviation</label>
    <input type="text" class="form-control" id="exampleInputPassword1" ref={abbreviation}/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={updateBank}>Update</button>
</form>

    </div>
  )
}

export default UpdateForm