import React, { useState } from 'react'
import WhiteLogo from '../../Logo/WhiteLogo'
import { Link } from 'react-router-dom'
const Login = () => {


  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  // hanfle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.email || !input.password) {
      return alert('All fields required')
    }

    console.log('ok');
  }
  // handle input change
  const handleInputChange = (e) => {
    setInput((state) => ({
      ...state, [e.target.name]: e.target.value
    }))
  }
  return (
    <>


      {/* Main Wrapper */}
      <div className="main-wrapper login-body">
        <div className="login-wrapper">
          <div className="container">
            <div className="loginbox">
              <div className="login-left">
                <WhiteLogo />        </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Login</h1>
                  <p className="account-subtitle">Access to our dashboard</p>
                  {/* Form */}
                  <form action="#">
                    <div className="form-group">
                      <input
                      onChange={handleInputChange}
                      value={input.email}
                      name='email'
                        className="form-control"
                        type="text"
                        placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input
                      onChange={handleInputChange}
                      value={input.password}
                      name='password'
                        className="form-control"
                        type="text"
                        placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <button
                      onClick={handleSubmit}
                      className="btn btn-primary btn-block" type="submit">Login</button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="text-center forgotpass"><Link to="/forgot-password" href="forgot-password.html">Forgot Password?</Link></div>
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <span>Login with</span>
                    <a href="#" className="facebook"><i className="fa fa-facebook" /></a><a href="#" className="google"><i className="fa fa-google" /></a>
                  </div>
                  {/* /Social Login */}
                  <div className="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}



    </>
  )
}

export default Login