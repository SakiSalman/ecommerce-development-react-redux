import React from 'react'
import WhiteLogo from '../../Logo/WhiteLogo'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <>
    
    <div className="main-wrapper login-body">
  <div className="login-wrapper">
    <div className="container">
      <div className="loginbox">
        <div className="login-left">
          <WhiteLogo></WhiteLogo>
        </div>
        <div className="login-right">
          <div className="login-right-wrap">
            <h1>Forgot Password?</h1>
            <p className="account-subtitle">Enter your email to get a password reset link</p>
            {/* Form */}
            <form action="">
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Email" />
              </div>
              <div className="form-group mb-0">
                <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
              </div>
            </form>
            {/* /Form */}
            <div className="text-center dont-have">Remember your password? <Link to="/login">Login</Link></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default ForgotPassword