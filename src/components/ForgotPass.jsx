import React from 'react'
import {email_icon} from "../config.js"
import "../style/ForgotPass.css"


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
      <div className="back">Back to <span> Login </span>  </div>
      <div className="submit-container">
        <button className="submit"> Confirm </button>
      </div>
    </form>
  </div>
  )
}

export default ForgotPass