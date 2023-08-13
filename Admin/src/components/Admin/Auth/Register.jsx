import React, { useState } from 'react'
import WhiteLogo from '../../Logo/WhiteLogo'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createUser } from '../../../features/auth/authApiSlice'
import { sweetalertStandard } from '../../../utility/sweetAlert'

const Register = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: ''
  })


  // hanfle form submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.email || !input.password ||!input.name || !input.cpassword) {
      return sweetalertStandard({
        title : 'Oh no !',
        msg : "All fields are required!"
      }, 'warning')
    }
    dispatch(createUser({
      name : input.name,
      email : input.email,
      password : input.password
    }))
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
                <WhiteLogo />
              </div>
              <div className="login-right">
                <div className="login-right-wrap">
                  <h1>Register</h1>
                  <p className="account-subtitle">Access to our dashboard</p>
                  {/* Form */}
                  <form action="#">
                    <div className="form-group">
                      <input className="form-control"
                        onChange={handleInputChange}
                        value={input.name}
                        name='name'
                        type="text"
                        placeholder="Name" />
                    </div>
                    <div className="form-group">
                      <input className="form-control"
                        value={input.email}
                        onChange={handleInputChange}
                        name='email'
                        type="text"
                        placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input className="form-control"
                        value={input.password}
                        onChange={handleInputChange}
                        name='password'
                        type="text"
                        placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <input className="form-control"
                        value={input.cpassword}
                        onChange={handleInputChange}
                        name='cpassword'
                        type="text"
                        placeholder="Confirm Password" />
                    </div>
                    <div className="form-group mb-0">
                      <button onClick={handleSubmit} className="btn btn-primary btn-block" type="submit">Register</button>
                    </div>
                  </form>
                  {/* /Form */}
                  <div className="login-or">
                    <span className="or-line" />
                    <span className="span-or">or</span>
                  </div>
                  {/* Social Login */}
                  <div className="social-login">
                    <span>Register with</span>
                    <a href="#" className="facebook"><i className="fa fa-facebook" /></a><a href="#" className="google"><i className="fa fa-google" /></a>
                  </div>
                  {/* /Social Login */}
                  <div className="text-center dont-have">Already have an account? <Link to="/login">Login</Link></div>
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

export default Register