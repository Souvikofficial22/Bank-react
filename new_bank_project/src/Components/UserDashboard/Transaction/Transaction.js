import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Transaction = () => {
    const accnum = useParams().accnum
    const userDetails = {
        username: useParams().username,
        role: useParams().role,
        userid: useParams().userid
    }
    const navigate = new useNavigate()
    const [transactionType, setTransactionType] = useState("");
  const [selfAmount, setSelfAmount] = useState("");
  const [otherAccount, setOtherAccount] = useState("");
  const [otherAmount, setOtherAmount] = useState("");

  const handleClick =async()=>{
    if(transactionType=="transfer"){
        let resp = await axios.put(`http://localhost:8081/account/transfer/${accnum}/reciever/${otherAccount}/amount/${otherAmount}`)
        .catch(err=>{
            if(err.response.status==500)
            alert("Invalid account number")
            return
        })
    }
    if(transactionType=="deposit"){
        let resp = await axios.put(`http://localhost:8081/transaction/deposit/${accnum}/${selfAmount}`).
        catch(err=>{
            alert("Some Error while depositing")
        })
    }
    if(transactionType=="withdraw"){
        let resp = await axios.put(`http://localhost:8081/transaction/withdraw/${accnum}/${selfAmount}`).
        catch(err=>{
            alert("Some Error while withdraw")
        })
    }
    navigate(`/passbook/${userDetails.userid}/${userDetails.username}/${userDetails.role}/${accnum}`)
  }


  return (
    <div>
      <label>
        Select transaction type:
        <select value={transactionType} onChange={(event) => {
    setTransactionType(event.target.value);
  }}>
          <option value="">--Select--</option>
          <option value="deposit">Deposit</option>
          <option value="withdraw">Withdraw</option>
          <option value="transfer">Transfer</option>
        </select>
      </label>
      <br/>
      <br></br>
      {transactionType === "deposit" && (
        <>
        <label>
          Enter amount for self-deposit:
          <input type="number" value={selfAmount} onChange={(e)=>{
            setSelfAmount(e.target.value);
          }} />
        </label>
        <button type="button" class="btn btn-success" onClick={handleClick}>Submit</button>
        </>
      )}
      {transactionType === "withdraw" && (
        <>
        <label>
          Enter amount for self-withdraw:
          <input type="number" value={selfAmount} onChange={(e)=>{
            setSelfAmount(e.target.value);
          }} />
        </label>
        <button type="button" class="btn btn-success" onClick={handleClick}>Submit</button>
        </>
      )}
      {transactionType === "transfer" && (
        <div>
          <label>
            Enter reciever account number:
            <input type="text" value={otherAccount} onChange={(event) => {
    setOtherAccount(event.target.value);
  }} />
          </label>
          <label>
            Enter amount:
            <input type="number" value={otherAmount} onChange={(event) => {
    setOtherAmount(event.target.value);
  }} />
          </label>
          <button type="button" class="btn btn-success" onClick={handleClick}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default Transaction