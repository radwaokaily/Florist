import { Fragment } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeComponent from './Routing/HomeComponent';
import ProductsComponents from './Routing/ProductsComponent'
import RegisterComponent from './Routing/RegisterComponent';
import LoginComponent from './Routing/LoginComponent';
import AboutComponent from './Routing/AboutComponent';
// import Footer from './components/Footer-component/Footer';
import Contact from './components/contactUs/Contact';
import Navbar from './components/Nav-component/Navbar';
import AdminDashboard from './components/adminFunctions/AdminDashboard';
import AddProducts from './components/adminFunctions/AddProducts';
// import Loding from './components/loader/Loding';

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/home" element={<HomeComponent/>}/>
        <Route path="/products" element={<ProductsComponents/>}/>
        <Route path="/register" element={<RegisterComponent/>}/>
        <Route path="/login" element={<LoginComponent/>}/>
        <Route path="/about" element={<AboutComponent/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/update/:id" element={<AdminDashboard/>}/>
        <Route path="/addproduct" element={<AddProducts/>}/>
        

      </Routes>
      {/* <Footer/> */}
    </Fragment>
  );
}

export default App;
