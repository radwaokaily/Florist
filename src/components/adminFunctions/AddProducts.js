import React, { Fragment , useState} from 'react'
import axios from 'axios'
import './productsFunction.css'
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const navigate = useNavigate();
    const [product, setProduct] =useState({
        name: "",
        price: "",
        category: "",
        image:""
      });
    function handleInputs(e) {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/addproduct',product).then((res)=>navigate("/products")).catch((err)=>console.log(err));
      }
      
  return (
    
    <Fragment>
        <div className='product-function-container'>
        <form  onSubmit={(e)=>handleInputs(e)}>
        <input type='text' placeholder='Product Name' value={product.name} onChange={(e)=>setProduct({...product,name:e.target.value})}/>
        <input type='text' placeholder='Price' value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})}/>
        <input type='text' placeholder='Category' value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}/>
        <input type="file" name="image" value={product.image} onChange={(e)=>setProduct({...product,image:e.target.value})}/>
        {/* <input type='text' placeholder='Confirm Password' name='confirmPassword'/> */}
        {/* <input type='text' placeholder='Mobile' name='mobile'/> */}
        <input type='submit' value='Add'/>
      </form>
        </div>
        
      {/* {console.log(product)} */}
    </Fragment>
  )
}

export default AddProducts