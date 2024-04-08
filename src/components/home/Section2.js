import React, { Fragment } from 'react'
import img1 from '../../images/categories-1.jpg.webp'
import img2 from '../../images/categories-2.jpg.webp'
import img3 from '../../images/categories-3.jpg.webp'
import img4 from '../../images/categories-4.jpg.webp'
import './home.css'
const Section2 = () => {
  return (
    <Fragment>
        <section class="freash">
      <div class="card">
        <img src={img1} alt="" className='img-freash' />
        <div class="text">
          <h1>Fresh Flower</h1>
          <p>( 25 items )</p>
        </div>
      </div>
      <div class="card">
        <img src={img2} alt="" className='img-freash'/>
        <div class="text">
          <h1>Fresh Flower</h1>
          <p>( 25 items )</p>
        </div>
      </div>
      <div class="card">
        <img src={img3} alt="" className='img-freash' />
        <div class="text">
          <h1>Fresh Flower</h1>
          <p>( 25 items )</p>
        </div>
      </div>
      <div class="card">
        <img src={img4} alt="" className='img-freash' />
        <div class="text">
          <h1>Fresh Flower</h1>
          <p>( 25 items )</p>
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default Section2