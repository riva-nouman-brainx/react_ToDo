import React from "react";
import { useState, useEffect } from "react";
import password_icon from "./Assets/password.png";
import { isValidPasswordRegex } from "../config.js";
import "../style/ResetPass.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSuccess, resetPass } from "../slices/UserSlice.js";
import { forgotPass } from "../slices/UserSlice.js";
import { isForgotValid } from "../services/authService";

function ResetPass() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmValid, setConfirmValid] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const success = useSelector(getSuccess);

  useEffect(() => {
    !isForgotValid() && navigate("/");
  }, [navigate]);

  function handlePassword(e) {
    setPassword(e.target.value);
    setPasswordValid(isValidPasswordRegex.test(e.target.value));
  }

  function handleConfirm(e) {
    setConfirm(e.target.value);
    if (e.target.value === password) {
      setConfirmValid(true);
    } else {
      setConfirmValid(false);
    }
  }
  function handleResetClick(e) {
    e.preventDefault();
    if (password && confirm) {
      console.log(password, confirm);
      dispatch(resetPass({ password }));
      if (success) {
        navigate("/");
      }
    }
  }

  return (
    <div className="container">
      <form action="">
        <div className="header">
          <div className="text">Re-set Password</div>
          <div className="line"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            {!passwordValid && (
              <div className="error-message">Password is not valid</div>
            )}
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => handleConfirm(e)}
            />
            {!confirmValid && (
              <div className="error-message">Password does not match</div>
            )}
          </div>
        </div>
        <div className="login">
          Back to{" "}
          <span>
            <Link to="/"> Login</Link>
          </span>{" "}
        </div>
        <div className="submit-container">
          <button className="submit" onClick={handleResetClick}>
            {" "}
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPass;
