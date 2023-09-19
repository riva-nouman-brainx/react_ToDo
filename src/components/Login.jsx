import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {getError, login, logout, getSuccess} from "../slices/UserSlice.js"
import email_icon from "./Assets/email.png"
import password_icon from "./Assets/password.png"
import "../style/Login.css"
import { useNavigate } from 'react-router-dom';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(getError);
  const success = useSelector(getSuccess);
  

  function handleEmail(e){
    setEmail(e.target.value);
  }
  function handlePassword(e){
    setPassword(e.target.value);
  }
  function handleLoginClick(e) {
    e.preventDefault();
    
    if (email && password) {
      dispatch(login({email, password}))
      console.log(success);
      if(success===true){
        navigate('/todo');
      }
    }
  }
  
  return (
    <div className='container'>
      <form onSubmit={handleLoginClick}>
        <div className="header">
          <div className="text">Login</div>
          <div className="line"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email' onChange={handleEmail} required/>
            {error && <div> {error}</div>}
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' onChange={handlePassword} required/>
            {error && <div> {error}</div>}
          </div>
        </div>
        <div className="forgot-password">Forgot your password? <span><Link to="/ForgotPass">Click here</Link></span> </div>
        <div className="forgot-password">Create a new account <span><Link to="/SignUp"> Sign Up</Link> </span></div>
        <div className="submit-container">
          <button className="submit" type='submit'> Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
