import React from 'react'
import email_icon from "./Assets/email.png"
import "../style/ForgotPass.css"
import { Link } from 'react-router-dom';
import {useState} from 'react'

function ForgotPass() {
  const [email, setEmail]=useState('');
  const [emailValid, setEmailValid]=useState(false);
  const [errorEmail, setErrorEmail] = useState("");


  function handleEmail(e){
    setEmail(e.target.value);
  }

  function handleConfirmClick(e){
    e.preventDefault();
    if(localStorage.getItem(email)!=null){
   
      setEmailValid(true);
      setErrorEmail('');
      window.location.href="/EmailConfirm";
    }
    else{
      setEmailValid(false);
      setErrorEmail("Invalid email");
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
            <div>{errorEmail}</div>
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