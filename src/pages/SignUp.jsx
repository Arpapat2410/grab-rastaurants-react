import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import authService from '../services/auth.service.js';

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const navigate = useNavigate();
  const [_error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ message: "" })
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClear = (e) => {
    setUser({
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
    setError(false);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (user.confirmPassword == user.password) {
        const register = await authService.register(
          
            user.username,
            user.email,
            user.password
          
        )
        navigate("/signin")
      } else {
        setError(true)
        setErrorMessage({ message: "Failed! Password mismatched !" })

      }
    } catch (error) {
      console.error(error);
      setError(true)
      // console.log(error.response.data);
      // setErrorMessage(error.response.data)
    }
  }


  return (
    <div className='container'>
      <h1>Grab Reataurant</h1>
      <div className='row form'>
        <div className='card-add'>
          <div className='col-12 justify-content-center'>
            <h5 className='card-header'>SingUp Restaurant</h5>
            <div className="error">{_error && errorMessage.message}</div>
            <div className='card-body'>
              <form>
                <div className='form-grop'>
                  <label htmlFor="name">Username</label>
                  <input
                    type="text"
                    className='form-control'
                    name="username"
                    placeholder='Username'
                    value={user.username}
                    onChange={handleChange}
                  />
                </div>

                <div className='form-grop'>
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="text"
                    className='form-control'
                    name="email"
                    placeholder='E-mail'
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>

                <div className='form-grop'>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className='form-control'
                    name="password"
                    placeholder='Password'
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-grop">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    placeholder="Confirm Password" value={user.confirmPassword}
                    onChange={handleChange}
                  />
                </div>

                <Link type="submit" className="btn btn-success px-2" onClick={handleClick}  >SingUp</Link>
                <Link type="button" className="btn btn-danger px-2" onClick={handleClear} >Cencal</Link>


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;