import React, { Fragment, useEffect, useState } from 'react'
import './products.css'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import img from '../../images/categories-1.jpg.webp'
// import Update from './../adminFunctions/Update';
const AllProducts = () => {
    const [product,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/getall`)
        .then((res)=>setProducts(res.data))
        .catch((err)=>console.log(err))
    },[])
  return (
    <Fragment>
      <div className='product-container'>
        {
            product.map((el)=>
            <div className='product' key={el.id}>
                <div className='product-img' >
                    <img alt='' src={img}/>
                    <h4>{el.name}</h4>
                    <p>$ {el.price}</p>
                    <Link to={`/update/${el.id}`}>
                      <button>Update</button>
                    </Link>
                    <button>Read More</button>
                    </div>
                </div>
            )
        }
      </div>
      <NavLink className="addProduct" to={"/addproduct"}>Add Product</NavLink>
    </Fragment>
  )
}

export default AllProducts
