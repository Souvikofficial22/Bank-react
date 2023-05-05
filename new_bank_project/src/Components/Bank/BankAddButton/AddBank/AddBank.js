import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const AddBank = () => {
    const fullName = useRef()
    const abbreviation = useRef()

    const navigationObject = new useNavigate()

    const user={
        username: useParams().username,
        role: useParams().role
    }
    const addBank = async(e)=>{
        e.preventDefault();
        let resp = await axios.post(`http://localhost:8081/bank/save`,{
            "fullName":fullName.current.value,
            "abbreviation": abbreviation.current.value
        }).catch(err=>{
            alert("Error in adding bank");
            return
        })

        if(!resp.data){
            alert("something has occured")
            return
        }

        navigationObject(`/bank/${user.username}/${user.role}`)
    }
  return (
    <div className="card mt-3 bg-primary text-black" style={{width: "30rem"}}>
    <h1>Add Bank</h1>
    <form>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Full Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={fullName}/>
        </div>
        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Abbreviation</label>
        <input type="text" class="form-control" id="exampleInputPassword1" ref={abbreviation}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={addBank}>Add</button>
        </form>

</div>
  )
}

export default AddBank