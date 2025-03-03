import React from "react";
import "./Signup.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";


const Signup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>{" "}
      <div className="inputs">
        <div className="input">
        <FaUser className="icon" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
        <FaEnvelope className="icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
        <FaLock className="icon" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="input">
        <FaLock className="icon" />
          <input type="password" placeholder="Confirm Password" />
        </div>
      </div>
      <div className="forgot-password">
        Forget Password? <span>Click Here!</span>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit red">Sign In</div>
      </div>
    </div>
  );
};

export default Signup;
