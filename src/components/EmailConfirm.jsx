import React from 'react'
import password_icon from "./Assets/password.png"
import "../style/EmailConfirm.css"
import { Link } from 'react-router-dom';

function EmailConfirm() {
  return (
  <div className='container'>
    <form action="">
      <div className="header">
        <div className="text">Email Confirmation</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="email" placeholder='OTP'/>
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

export default EmailConfirm