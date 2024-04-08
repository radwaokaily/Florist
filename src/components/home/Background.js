import React, { Fragment } from 'react'
import './home.css'
import bg from '../../images/hero-2.jpg.webp'
import { NavLink } from 'react-router-dom'
const Background = () => {
  return (
    <Fragment>
      <div className='bg-container'>
          <img src={bg} alt=''/>
          <div class="text">
          <p>Fresh Flower & Gift Shop</p>
          <h2>Making beautiful flowers a part of your life.</h2>
        </div>
        <NavLink to={"/products"}>SHOP NOW</NavLink>
      </div>
     
    </Fragment>
  )
}

export default Background
