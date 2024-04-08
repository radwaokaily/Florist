import React, { Fragment } from 'react'
import img1 from '../../images/call-bg.jpg.webp'
import { NavLink } from 'react-router-dom'
const Order = () => {
  return (
    <Fragment>
        <section class="order">
      <img src={img1} alt=""/>
      <div class="container">
        <div class="text">
          <h4>CUSTOM FLOWER        </h4>
          <br/>
        <p>Let our flowers make 
          your party more perfect.
        </p>
      <NavLink className="btn-order" to={"/products"}>ORDER NOW</NavLink>
      <NavLink className="btn-contact" to={"/contact"}>CONTACT US</NavLink>
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default Order