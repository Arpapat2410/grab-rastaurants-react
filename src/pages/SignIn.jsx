import  React ,{ useState } from 'react'
import { Link, useNavigate } from "react-router-dom"


const SignIn = () => {

  const handleClear = (e) => {
    setRestaurant({
      name: "",
      type: "",
      img: "",
    })
    setError(false);
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
                <label htmlFor="name">E-mail</label>
                <input 
                  type="E-mail"
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
                  name="Password"
                  placeholder='Password'
                  
                />
              </div>
              <Link to="" className="btn btn-success px-2" >SingIn</Link>
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