import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
import { Link } from "react-router-dom";
import img from "../../Assets/haha1.png";
import "./login.scss";

const Login = () => {





  

  return (
    <section className="body">
      {/* <div className='icon'>
        <Link to={'/'}>
          <img src={img} alt="" />
        </Link>
      </div>
      <div className="register">
        <Link to={'/register'}>
          <button className="register">Sign up</button>
        </Link>
      </div> */}
      <div className="parent-box">
        <p className="head">Sign in to Trippy</p>
        <div className="login-box">
          <form >
            <div className="input-box">
              <label htmlFor="email" className="label">
                Username or email address
              </label>
              <input
                type="text"
                name="email"
                id="email"
          
                
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="password" className="label">
                <span>Password</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
              />
              <a href="#" className="forget">
                Forgot Password?
              </a>
            </div>
           
              
           
              <input
                type="submit"
                value="Log in"
                className="butt"
                
              />
            
          </form>
        </div>

        <div className="signDiv">
          <p className="google">Sign in with google </p>
          <br />
          <div className="lines">
            <p className="dont">Don't have account? </p>{" "}
           
              <p className="create"> Create an account</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
