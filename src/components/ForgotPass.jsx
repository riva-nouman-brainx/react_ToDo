import React from 'react'
import email_icon from "./Assets/email.png"
import "../style/ForgotPass.css"
import { Link } from 'react-router-dom';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {getEmailError, getSuccess, forgotPass} from "../slices/UserSlice.js"




function ForgotPass() {
  const [email, setEmail]=useState('');

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const success=useSelector(getSuccess);
  const errorEmail=useSelector(getEmailError);


  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handleConfirmClick(e){
    e.preventDefault();
    if (email) {
      dispatch(forgotPass({email}))
      if (success){
        navigate('/EmailConfirm')
      }
    }
  }

  return (
    <div className='container'>
      <form action="">
        <div className="header">
          <div className="text">Forgot Password</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email'onChange={handleEmail}/>
            {errorEmail && <div> {errorEmail}</div>}
          </div>
        </div>
        <div className="back">Back to <span><Link to="/"> Login </Link></span>  </div>
        <div className="submit-container">
          <button className="submit" onClick={handleConfirmClick}> Confirm </button>
        </div>
      </form>
    </div>
  )
}

export default ForgotPass