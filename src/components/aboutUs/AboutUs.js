import React, { Fragment } from "react";
import "./about.css";
import img1 from '../../images/Allergy-Guide-Flowers-and-Plants.jpg'
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <Fragment>
      <div className="about-container">
        <h1>Our Team</h1>
        <div className="main-card">
        <div className="card">
          <img src={img1} alt="" />
          <h2>Radwa Okaily</h2>
          <h6>CEO & Founder</h6>
          <p>
            Some text that describes me lorem ipsum ipsum lorem.
            jane@example.com
          </p>
          <Link to='/contact' className="card-btn">Contact</Link>
        </div>
        <div className="card">
          <img src={img1}  alt="" />
          <h2>Radwa Okaily</h2>
          <h6>CEO & Founder</h6>
          <p>
            Some text that describes me lorem ipsum ipsum lorem.
            jane@example.com
          </p>
          <Link to='/contact' className="card-btn">Contact</Link>
        </div>
        <div className="card">
          <img src={img1}  alt="" />
          <h2>Radwa Okaily</h2>
          <h6>CEO & Founder</h6>
          <p>
            Some text that describes me lorem ipsum ipsum lorem.
            jane@example.com
          </p>
          <Link to='/contact' className="card-btn">Contact</Link>
        </div>
</div>
        
      </div>
    </Fragment>
  );
};

export default AboutUs;
