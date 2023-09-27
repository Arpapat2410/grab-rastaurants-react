import  React ,{ useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
  return (
    <div className='container'>
      <h1>Grab Reataurant</h1>
      <div className='row form'>
        <div className='card-add'>
        <div className='col-12 justify-content-center'>
          <h5 className='card-header'>SingUp Restaurant</h5>
          <div className='card-body'>
            <form>
            <div className='form-grop'>
                <label htmlFor="name">Username</label>
                <input 
                  type="text"
                  className='form-control'
                  name="Username"
                  placeholder='Username'
                />
              </div>

              <div className='form-grop'>
                <label htmlFor="name">E-mail</label>
                <input 
                  type="text"
                  className='form-control'
                  name="E-mail"
                  placeholder='E-mail'
                />
              </div>

              <div className='form-grop'>
                <label htmlFor="type">Password</label>
                <input 
                  type="text"
                  className='form-control'
                  name="type"
                  placeholder='Password'
                />
              </div>

              <div className='form-grop'>
                <label htmlFor="img">Confirm Password</label>
                <input 
                  type="text"
                  className='form-control'
                  name="img"
                  placeholder='Confirm Password'
                  />
              </div>

              <Link to="" className="btn btn-success px-2" >SingUp</Link>
              <Link to="" className="btn btn-danger px-2" >Cencal</Link>


            </form>
          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default SignUp;