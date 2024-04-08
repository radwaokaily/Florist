import React, { Fragment } from 'react'
import './nav.css'
import logo from '../../images/logo.png.webp'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Fragment>
        <div className='container'>
            <img src={logo} alt='logo'/>
            <div className='links'>
                <NavLink to={"/home"}>Home</NavLink>
                <NavLink to={"/products"}>Products</NavLink>
                <NavLink to={"/contact"}>Contact Us</NavLink>
                <NavLink to={'/about'}>About Us</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/register"}>Register</NavLink>
            </div>
            <div className='icon'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </Fragment>
  )
}

export default Navbar
