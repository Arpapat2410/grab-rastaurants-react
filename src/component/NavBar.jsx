import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../services/auth.service.js';
import { useAuthContext } from '../context/AuthContext.jsx';

const NavBar = () => {
    const {user,logout } = useAuthContext();
    const handleLogout = () => {
        logout();
        const navigate = useNavigate();
        const handleLogout = () => {
            Logout();
            navigate("/signin")
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-tertiary bg-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Grad Restaurant</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                        {user && user.roles.includes("ROLES_ADMIN") &&(
                        <li className="nav-item">
                            <Link className="nav-link" to="/Add">Add</Link>
                        </li>
                        )}

                        <li className="nav-item">
                            <Link className="nav-link" to="/Search">Search</Link>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {!user &&(
                        <li className="nav-item">
                            <Link className="nav-link" to="/SignUp">
                            <button type="button" class="btn btn-success" style={{padding:"2px" , marginLeft : "80px"}} >SignUp</button>
                            </Link>
                        </li>
                    )}
                    {!user &&(
                        <li className="nav-item">
                            <Link className="nav-link" to="/SignIn">
                            <button type="button" class="btn btn-success" style={{padding:"2px"}} >SignIn</button>
                            </Link>
                        </li>
                    )}
                    {user &&(
                       
                        <li className='nav-item'>
                            Wellcome ,
                            <span className='mr-sm2 h4' ><Link to={"/profile"} style={{textDecoration:"none", color : "green"  }}> {user.username} </Link></span>
                            <button type="button" class="btn btn-outline-danger " style={{padding:"2px"}} onClick={handleLogout}>Logout</button>
                        </li>
                       
                    )}
                    </ul>
                      
                    </form>
                </div>
            </div>
        </nav>



    )
}

export default NavBar