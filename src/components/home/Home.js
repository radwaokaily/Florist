import React, { Fragment } from 'react'
import Background from './Background'
import Section from './Section'
// import Navbar from '../Nav-component/Navbar'
import Footer from './../Footer-component/Footer';
import Section2 from './Section2';
import AboutSection from './AboutSection';
import NewArraival from './NewArraival';
import Order from './Order';

const Home = () => {
  return (
    <Fragment>
      <Background/>
      <Section/>
      <Section2/>
      <AboutSection/>
      <NewArraival/>
      <Order/>
      <Footer/>
    </Fragment>
  )
}

export default Home
