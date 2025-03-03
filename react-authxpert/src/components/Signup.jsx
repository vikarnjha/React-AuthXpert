import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>{" "}
      <div className="inputs">
        <div className="input">
          <img src="" alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src="" alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Forget Password? <span>Click Here!</span>
      </div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit gray">Sign In</div>
      </div>
    </div>
  );
};

export default Signup;
