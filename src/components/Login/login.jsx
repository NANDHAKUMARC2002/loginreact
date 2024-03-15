import React from 'react'
import '../Login/login.css'
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
function login() {
  return (
    <div>
      <div className="login">
        <div className="row">
            <div className="col-lg-1"></div>

            <div className="col-lg-6">
                <h1>Welcome to our website</h1>
            </div>

            <div className="col-lg-4" >
                <div className="right">
                    <h3>USER LOGIN</h3>
                <FaRegUser  className='user'/>  <input type="text" placeholder=''/> <br /> 
                <MdLockOutline className='lock' /> <input type="password" placeholder='' />
                <input type="radio" className='radio'/> <p >Remember</p>
                <p className='for'>Forgot password?</p>
                
                <a href="/Home"> <p>Login</p></a>
                
                </div>
                
            </div>

            <div className="col-lg-1"></div>
        </div>

      </div>
    </div>
  )
}

export default login
