import React from 'react'
import {email_icon} from "../config.js"
import "../style/EmailConfirm.css"

function EmailConfirm() {
  return (
    <div className='container'>
    <form action="">
      <div className="header">
        <div className="text">Email Confirmation</div>
        <div className="line"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email'/>
        </div>
      </div>
      <div className="forgot-password">Forgot your password? <span>Click here</span> </div>
      <div className="submit-container">
        <button className="submit"> Confirm </button>
      </div>
    </form>
  </div>
  )
}

export default EmailConfirm