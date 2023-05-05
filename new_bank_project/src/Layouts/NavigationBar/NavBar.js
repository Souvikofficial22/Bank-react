import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavBar = ({user}) => {
    // let adduserurl = `/adduser/${user.username}/${user.role}`
    // const amountToDisplay = useSelector(state => state.storedAmount);
    const navigate = new useNavigate()
    let bankurl = `/bank/${user.username}/${user.role}`
    let customerurl =`/customer/${user.username}/${user.role}`

    const handleLogout = ()=>{
        navigate(`/`)
    }

  if(user.role !="admin"){
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Welcome,{user.username}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={`/account/${user.userid}/${user.username}/${user.role}`}>Accounts</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
    }

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h3>Welcome,{user.username}</h3>
    {/* <a className="navbar-brand" href="#">{user.username}</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={bankurl}>Bank</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={customerurl}>Customer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={`/account/${user.username}/${user.role}`}>Accounts</a>
        </li>
      </ul>
      <div class="d-flex">
        <button class="btn btn-outline-success" type="submit" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}

export default NavBar