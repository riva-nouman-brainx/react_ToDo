import React, { useState, useEffect } from "react";
import password_icon from "./Assets/password.png";
import "../style/EmailConfirm.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { isForgotValid } from "../services/authService";

function EmailConfirm() {
  const [OTP, setOTP] = useState("");
  const [OtpInput, setOtpInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    !isForgotValid() && navigate("/");
  }, [navigate]);

  function handleGenClick(e) {
    setError("");
    const min = 1000; // Minimum 4-digit number
    const max = 9999; // Maximum 4-digit number
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const updatedVal = randomNum.toString();
    setOTP(updatedVal);
  }

  function handleOtpInput(e) {
    setOtpInput(e.target.value);
  }

  function handleConfirmClick() {
    if (OtpInput !== " " && OtpInput === OTP) {
      navigate("/ResetPass");
      setError("");
    } else if (OtpInput === "") {
      setError("Do not leave field empty");
    } else {
      setError("OTP does not match");
    }
  }

  return (
    <div className="container">
      <form>
        <div className="header">
          <div className="text">Email Confirmation</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="text" placeholder="OTP" onChange={handleOtpInput} />
            <div>{error}</div>
          </div>
        </div>
        <div className="back">
          Back to{" "}
          <span>
            <Link to="/"> Login </Link>
          </span>{" "}
        </div>
        <div className="submit-container">
          <div>{OTP}</div>
          <button className="submit" type="button" onClick={handleGenClick}>
            {" "}
            Generate OTP{" "}
          </button>
          <button className="submit" type="button" onClick={handleConfirmClick}>
            {" "}
            Confirm{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EmailConfirm;
