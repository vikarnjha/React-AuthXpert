import React, { useState } from "react";
import "./Signup.css";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>{" "}
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <FaUser className="icon" />
            <input type="text" placeholder="Username" />
          </div>
        )}
        <div className="input">
          <FaEnvelope className="icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <FaLock className="icon" />
          <input type="password" placeholder="Password" />
        </div>
        {action === "Sign Up" && (
          <div className="input">
            <FaLock className="icon" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        )}
      </div>
      {action === "Sign In" && (
        <div className="forgot-password">
          Forget Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Sign Up" ? "submit red" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign In" ? "submit red" : "submit"}
          onClick={() => setAction("Sign In")}
        >
          Sign In
        </div>
      </div>
    </div>
  );
};

export default Signup;
