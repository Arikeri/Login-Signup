import React, { useState } from 'react'
import './loginsignup.css';

import email from '../Assets/email.png';
import password from '../Assets/password.png';
import user from '../Assets/user.png';
const LoginSignUp = () => {
  const [action,setAction]=useState("Login");
  return (
    <div>
      <div className="container">
        <div className="header">
         <div className="text">{action}</div>
         <div className="underline"></div>
         <div className="inputs">
          {action==="Login"? <div></div>:<div className="input">
            <img src={email}   alt="" />
            <input type="text"  placeholder='Name' />
            </div>}
            
            <div className="input">
            <img src={user} alt="" />
            <input type="text" placeholder='email'/>
            </div>
            <div className="input">
            <img src={password} alt=""  />
            <input type="text" placeholder='password' />
            </div>
         </div>
         {action==="Sign Up"? <div></div>: <div className="forget-password">Forgetpassword?<span>Click Here</span></div>}
        
         <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
          
         </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
