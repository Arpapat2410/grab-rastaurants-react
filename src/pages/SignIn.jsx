import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import authService from '../services/auth.service.js'
import { useAuthContext } from '../context/AuthContext.jsx'

const SignIn = () => {
  const [user, setUser] = useState({
    //ต้องใช้ให้เหมือนกันหลังบ้าน
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const {login} = useAuthContext();
  const [error, setError] = useState();

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClear = (e) => {
      setUser({
      username: "",
      password: "",
    });
    setError(false);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const currentUser = await authService.login(user.username,user.password);
      login(currentUser)
      navigate("/")
    } catch (error) {
      console.log(error);
      setError(true);      
    }
  }
  return (

    <div className='container'>
      <h1>Grab Reataurant</h1>
      <div className='row form'>
        <div className='card-add'>
          <div className='col-12 justify-content-center'>
            <h5 className='card-header'>SignIn Restaurant</h5>
            <div className='card-body'>
              <form>
                <div className='form-grop'>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    className='form-control'
                    name="username"
                    placeholder='username'
                    value={user.username} 
                    onChange={handleChange}
                  />
                </div>

                <div className='form-grop'>
                  <label htmlFor="password">password</label>
                  <input
                    type="password"
                    className='form-control'
                    name="password"
                    placeholder='password'
                    value={user.password} 
                    onChange={handleChange}
                  />
                </div>
                <Link to="" className="btn btn-success px-2" onClick={handleClick} >Sign In</Link>
                <Link to="" className="btn btn-danger px-2" onClick={handleClear} >Cencal</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;