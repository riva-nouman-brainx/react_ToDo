import React from 'react'
import { useState } from 'react';
import "../style/SignUp.css"
import user_icon from "./Assets/person.png"
import email_icon from "./Assets/email.png"
import password_icon from "./Assets/password.png"

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const isValidUsernameRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const isValidPasswordRegex = /^(?=.*[A-Z]).{8,}$/;
  const isValidEmailRegex = /^[a-zA-Z0-9_-]{3,}$/;
  const [usernameValid, setUsernameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmValid, setConfirmValid] = useState(true);


  function handleUsername(e) {
    setUsername(e.target.value);
    setUsernameValid(isValidEmailRegex.test(e.target.value));
  }
  
  function handleEmail(e) {
    setEmail(e.target.value);
    setEmailValid(isValidUsernameRegex.test(e.target.value));
  }

  function handlePassword(e) {
    setPassword(e.target.value);
    setPasswordValid(isValidPasswordRegex.test(e.target.value));
  }

  function handleConfirm(e) {
    setConfirm(e.target.value)
    if(e.target.value===password){
      setConfirmValid(true);
    }
    else{
      setConfirmValid(false);
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
            <input type="text" placeholder='Name' value={username} onChange={handleUsername}/>
            {!usernameValid && <div className="error-message">Username is not valid</div>}
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email' value={email} onChange={handleEmail}/>
            {!emailValid && <div className="error-message">Email is not valid</div>}
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password' value={password} onChange={handlePassword}/>
            {!passwordValid && <div className="error-message">Password is not valid</div>}
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Confirm Password' value={confirm} onChange={e=>handleConfirm(e)}/>
            {!confirmValid && <div className="error-message">Password does not match</div>}
          </div>
        </div>
        <div className="login">Already have an account? <span>Login</span> </div>
        <div className="submit-container">
          <button className="submit" onClick={handleSignUpClick}> Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
