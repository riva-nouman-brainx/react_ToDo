import React from 'react'
import email_icon from "./Assets/email.png"
import "../style/ForgotPass.css"
import { Link } from 'react-router-dom';

function ForgotPass() {
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
          <input type="email" placeholder='Email'/>
        </div>
      </div>
      <div className="back">Back to <span><Link to="/"> Login </Link></span>  </div>
      <div className="submit-container">
        <button className="submit"> Confirm </button>
      </div>
    </form>
  </div>
  )
}

export default ForgotPass