import React from 'react'
import './Login.css'
import { useState } from 'react'
import logo from '../../assets/logo.jpg'

const Login = () => {


  const [signState, setSignState] = useState("Sign In")

  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState ==="Sign Up"?<input type="text" placeholder='Your name' />:<></>}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState ==="Sign In"?<p>New to Netflix? <span>Sign Up Now</span></p>:<p>Already have account? <span>Sign In Now</span></p>}
          
        </div>
      </div>


    </div>
  )
}

export default Login