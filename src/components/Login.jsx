import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import email_icon from "./Assets/email.png"
import password_icon from "./Assets/password.png"
import "../style/Login.css"

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passValid, setPassValid]=useState(false);
  const [emailValid, setEmailValid]=useState(false);
  const [errorEmail, setErrorEmail]=useState('');
  const [errorPassword, setErrorPassword]=useState('');

  function handleEmail(e){
    setEmail(e.target.value);
    if(localStorage.getItem(email)!=null){
      setEmailValid(true);
      setErrorEmail('');
    }
    else{
      setEmailValid(false);
      setErrorEmail("Account across this email does not exist");
    }

  }
  function handlePassword(e){
    setPassword(e.target.value);
    const userData = JSON.parse(localStorage.getItem(email));
    if(userData.password===password){
      setPassValid(true);
      setErrorPassword('');
    }else{
      setPassValid(false);
      setErrorPassword("Incorrect Password")
    }
  }

  function handleLoginClick(e){
    e.preventDefault();

    if (emailValid !== true || passValid !== true) {
      alert('Check your crendials again');
    } else {
      setEmail("");
      setPassword("")
      
      window.location.href="/todo";

    }

  }
  
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
            <input type="email" placeholder='Email' onChange={handleEmail} required/>
            <div>{errorEmail}</div>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' onChange={handlePassword} required/>
            <div>{errorPassword}</div>
          </div>
        </div>
        <div className="forgot-password">Forgot your password? <span><Link to="/ForgotPass">Click here</Link></span> </div>
        <div className="forgot-password">Create a new account <span><Link to="/SignUp"> Sign Up</Link> </span></div>
        <div className="submit-container">
          <button className="submit" onClick={handleLoginClick}> Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
