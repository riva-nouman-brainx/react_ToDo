import React from 'react'
import { useState } from 'react';
import "../style/Login.css"
import user_icon from "./Assets/person.png"
import email_icon from "./Assets/email.png"
import password_icon from "./Assets/password.png"

function SignUp() {
  
  return (
    <div className='container'>
      <form action="">
        <div className="header">
          <div className="text">Login</div>
          <div className="line"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email'/>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password'/>
          </div>
        </div>
        <div className="forgot-password">Forgot your password? <span>Click here</span> </div>
        <div className="submit-container">
          <button className="submit"> Login</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
