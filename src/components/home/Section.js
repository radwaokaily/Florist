import React, { Fragment } from 'react'
import img1 from '../../images/categories-1.jpg.webp'
import img2 from '../../images/categories-2.jpg.webp'
import img3 from '../../images/categories-3.jpg.webp'
import img4 from '../../images/categories-4.jpg.webp'
import './home.css'

const Section = () => {
  return (
    <Fragment>
      <section class="section2">
      <div class="main">
        <img src={img1} alt="" />
        <div class="text">
          <h3>100% Freshness</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="main">
        <img src={img2} alt="" />
        <div class="text">
          <h3>Made by artist</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="main">
        <img src={img3} alt="" />
        <div class="text">
          <h3>Own courier</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div class="main">
        <img src={img4} alt="" />
        <div class="text">
          <h3>100% Freshness</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default Section
