import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {loginState, setLoginState} = useContext(AuthContext)

  const [active,setActive]=useState(false);
  const [open,setOpen]=useState(false);


  const isActive=()=>{
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }
  
  useEffect(()=>{
    window.addEventListener("scroll",isActive);
    return ()=>{
      window.removeEventListener("scroll",isActive);
    };
  },[]);
  return (
    <>
    <div className={(active) ? "navbar active":"navbar"}>
        <div className='navbar-logo'>
          <div className="logo-image">
            {/* <img src="src/assets/images/BG.jpg" alt="logo" /> */}
          </div>
          <div>
            <span className='logo-text'>AJI</span>
          </div>
        </div>
        <div className='navbar-links-con'>
            <ul className='navbar-links'>
                <li className='navbar-link'>Home</li>
                <li className='navbar-link'>About</li>
                <li className='navbar-link'>Get Infomation</li>
                <li className='navbar-link'>Knowledge Management</li>
            </ul>
        </div>
        <Link to={loginState ? "/dashboard":"/Authentication"} className='navbar-link contact-link'>{loginState ? "Dashboard": "Signup / Login"}</Link>
    </div>  
    </>
  )
}

export default Navbar
