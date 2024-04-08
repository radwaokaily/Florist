import React, { Fragment, useState } from 'react'
import AddProducts from './AddProducts'
import axios from 'axios'
import { useNavigate ,useParams } from 'react-router-dom'


const AdminDashboard = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: ""
  });
  let { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/update/${id}`, product).then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate('/admin');
    return "Product updated successfully";
  };

  return (
    <Fragment>

<div className='product-function-container'>
        <form  onSubmit={(e)=>handleSubmit(e)}>
        <input type='text' placeholder='Product Name' value={product.name} onChange={(e)=>setProduct({...product,name:e.target.value})}/>
        <input type='text' placeholder='Price' value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})}/>
        <input type='text' placeholder='Category' value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})}/>
        <input type="file" name="image" value={product.image} onChange={(e)=>setProduct({...product,image:e.target.value})}/>
        {/* <input type='text' placeholder='Confirm Password' name='confirmPassword'/> */}
        {/* <input type='text' placeholder='Mobile' name='mobile'/> */}
        <input type='submit' value='Update'/>
      </form>
        </div>
        
        {/* <AddProducts/> */}
    </Fragment>
  )
}
export default AdminDashboard
