import React from 'react'
import { useState } from 'react';
import "../style/SignUp.css"
import {user_icon, email_icon, password_icon} from "../config.js"
import {isValidUsernameRegex, isValidPasswordRegex, isValidEmailRegex} from "../config.js"
import {Link} from 'react-router-dom'


function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [usernameValid, setUsernameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmValid, setConfirmValid] = useState(false);
  const [errorUsername, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirm, setErrorConfirm] = useState("");



  function handleUsername(e) {
    setUsername(e.target.value);
    setUsernameValid(isValidEmailRegex.test(e.target.value));
    if(usernameValid==true){
      setErrorUsername("")
    }else{
      setErrorUsername("Username is not valid")
    }
  }
  
  function handleEmail(e) {
    setEmail(e.target.value);
    setEmailValid(isValidUsernameRegex.test(e.target.value));
    if(emailValid==true){
      setErrorUsername("")
    }else{
      setErrorUsername("Email is not valid")
    }
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    setPasswordValid(isValidPasswordRegex.test(e.target.value));
    if(passwordValid==true){
      setErrorUsername("")
    }else{
      setErrorUsername("Password is not valid")
    }
  }

  function handleConfirm(e) {
    setConfirm(e.target.value)
    if(e.target.value===password){
      setConfirmValid(true);
      setErrorConfirm("")
    }
    else{
      setConfirmValid(false);
      setErrorConfirm("Password does not match")
    }
  }
  function handleSignUpClick(e) {
    e.preventDefault();

    if (usernameValid !== true || emailValid !== true || passwordValid !== true || confirmValid !== true) {
      alert('Please check your input fields for errors.');
    } else {
      setEmail("");
      setUsername("");
      setPassword("")
      setConfirm("");
      alert('Sign up successful!');

    }
  }

  return (
    <div className='container'>
      <form action="">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="line"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder='Name' value={username} onChange={handleUsername} required/>
            <div>{errorUsername}</div>
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email' value={email} onChange={handleEmail} required/>
            <div>{errorEmail}</div>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" id="pass" placeholder='Password' value={password} onChange={handlePassword} required/>
            <div>{errorPassword}</div>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Confirm Password' value={confirm} onChange={e=>handleConfirm(e)} required/>
            <div>{errorConfirm}</div>
          </div>
        </div>
        <div className="login">Already have an account? <span><Link to="/">Login</Link></span> </div>
        <div className="submit-container">
          <button className="submit" onClick={handleSignUpClick}> Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
