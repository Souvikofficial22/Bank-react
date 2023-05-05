import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonComponent = ({user}) => {

    const userDetails ={
        username: user.username,
        role: user.role
    }
    const navigate = new useNavigate()

    const handleClick = (e)=>{
        e.preventDefault();
        navigate(`/bank/add/${userDetails.username}/${userDetails.role}`)
    }

  return (
    <div>
        <button type="button" class="btn btn-primary" onClick={handleClick}>Add Bank</button>
    </div>
  )
}

export default ButtonComponent