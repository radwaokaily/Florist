import React, { Fragment } from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <Fragment>
      <div className='foot-container'>
        <div>
            <h4>My account</h4>
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/register"}>Create Account</NavLink>
        </div>
        <div>
            <h4>Quick Links</h4>
            <NavLink to={'/about'}>About Us</NavLink>
            <a href='#c'>Contact Us</a>
        </div>
        <div>
            <h4>Contact Us</h4>
            <p>UAE, Türkiye, Egypt</p>
            <a href='#c'>+971 452 307 13</a>
            <a href='#c'>+90 534 683 1310</a>
            <a href='#c'>+20 2252 11044</a>
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
