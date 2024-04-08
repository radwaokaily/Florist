import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import img1 from '../../images/product-1.jpg.webp'
import img2 from '../../images/product-2.jpg.webp'
import img3 from '../../images/product-3.jpg.webp'
import img4 from '../../images/product-4.jpg.webp'
import img5 from '../../images/product-5.jpg.webp'
import img6 from '../../images/product-6.jpg.webp'
import img7 from '../../images/product-7.jpg.webp'
import img8 from '../../images/product-8.jpg.webp'
import img9 from '../../images/product-9.jpg.webp'
import img10 from '../../images/product-10.jpg.webp'
import './home.css'

const NewArraival = () => {
  return (
    <Fragment>
      <section className="new">
      <div className="text">
        <h6>OUR FLOWER</h6>
        <h3>New Arrivals</h3>
        <div className="links">
          <Link href="#">All</Link>
          <Link href="#">Bouquet</Link>
          <Link href="#">Flower box</Link>
          <Link href="#">Flower shelf</Link>
          <Link href="#">Basket of flower</Link>
          <Link href="#">Gift combos</Link>
        </div>
      </div>
      <div className="our-product">
        <div className="product">
          <img src={img1} alt=""/>
          <div className="product-details">
            <h5>Fly Me To The Moon</h5>
            <div className="price">200$</div>
            <div className="new-item">
              <h5>NEW</h5>
            </div>
          </div>
        </div>
        <div className="product">
          <img src={img2} alt=""/>
          <div className="product-details">
            <h5>Fly Me To The Moon</h5>
            <div className="price">200$</div>
          </div>
        </div>
        <div className="product">
          <img src={img3} alt=""/>
          <div className="product-details">
            <h5>Fly Me To The Moon</h5>
            <div className="price">200$</div>
            <div className="new-item">
              <h5>SALE</h5>
            </div>
          </div>
        </div>
        <div className="product">
          <img src={img4} alt=""/>
          <div className="product-details">
            <h5>Fly Me To The Moon</h5>
            <div className="price">200$</div>
          </div>
        </div>
        <div className="product">
          <img src={img5} alt=""/>
          <div className="product-details">
            <h5>Fly Me To The Moon</h5>
            <div className="price">200$</div>
          </div>
        </div>
        <div className="product">
          <img src={img6} alt=""/>
          <div className="product-details">
            <h5>Fly Me To The Moon</h5>
            <div className="price">200$</div>
          </div>
        </div>
        <div className="product">
          <img src={img7} alt=""/>
          <div className="product-details">
            <h5>Fly Me To The Moon</h5>
            <div className="price">200$</div>
            <div className="new-item">
              <h5>OUT OF STOCK</h5>
            </div>
          </div>
        </div>
        <div className="product">
          <img src={img8} alt=""/>
          <div className="product-details">
            <h5>Fly Me To The Moon</h5>
            <div className="price">200$</div>
            <div className="new-item">
              <h5>NEW</h5>
            </div>
          </div>
        </div>
        <div className="product">
          <img src={img9} alt=""/>
          <div className="product-details">
            <h5>Fly Me To The Moon</h5>
            <div className="price">200$</div>
          </div>
        </div>
        <div className="product">
          <img src={img10} alt=""/>
          <div className="product-details">
            <h5>Fly Me To The Moon</h5>
            <div className="price">200$</div>
            <div className="new-item">
              <h5>NEW</h5>
            </div>
          </div>
        </div>

      </div>
      <NavLink className="btn-new" to={"/products"}>VIEW ALL PRODUCTS</NavLink>
        {/* <a href="#">VIEW ALL PRODUCTS</a> */}
    </section>
    </Fragment>
  )
}

export default NewArraival
