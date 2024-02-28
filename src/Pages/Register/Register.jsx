import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import img from '../../Assets/haha1.png';
import './register.scss';
import {message} from "antd"



const Register = () => {


 

  return (
    <section className='body'>
     
      <div className="parent-box">
        <p className="head">Create new account</p>
        <div className="register-box">
          <form >
            <div className="input-box">
              <div className="label">Firstname</div>
              <input type="text" name='firstname' id='firstname' />
            </div>
            <div className="input-box">
              <div className="label">Lastname</div>
              <input type="text" name='lastname' id='lastname'  />
            </div>
            <div className="input-box">
              <div className="label">Email address</div>
              <input type="email" name='email' id='email'  />
            </div>
            <div className="input-box">
              <div className="label">
                <span>Password</span>
              </div>
              <input type="password" name='password' id='password'  />
              <a href="" className='forget'>Forgot Password?</a>
            </div>
            <input type="submit" value="Register" className='butt' />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
