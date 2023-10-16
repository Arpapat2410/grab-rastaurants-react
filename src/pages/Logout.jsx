import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom"
import authService from '../services/auth.service.js'

const Logout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        authService.logout;
        navigate("/");
    }
    setTimeout(()=>{
        handleLogout();
        
    },3 * 1000);
  return 
    <div>Logout</div>
  
}

export default Logout