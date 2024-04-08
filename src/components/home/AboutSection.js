import React, { Fragment } from 'react'
import img from '../../images/about-video.jpg.webp'
import { NavLink } from 'react-router-dom'
const AboutSection = () => {
  return (
    <Fragment>
       <section class="about">
      <div class="text-up">
        <div class="left">
          <p>About Us</p>
          <h3>We provide all kinds of fresh flower services</h3>
        </div>
        <div class="right">
          <p>
            For Heather Henson, of Boreal Blooms in Cold Lake, Alberta, Canada,
            growing flowers that can be dried and incorporated into late fall
            and winter floral arrangements has been a game-changer. During her
            growing season, this farmer-florist relies on a vivid palette of
            annuals, perennials and ornamental grasses to supply her studio
          </p>
        </div>
      </div>
      <div class="about-vid">
        <div class="image">
          <img src={img} alt="" />
        </div>
        <div class="contact-us">
          <div class="con-text">
            <p>SLOW FLOWERS’ FLORAL INSIGHTS
            </p>
            <h3>Dried flowers are having a renaissance
            </h3>
            <p>This awareness has been stimulated
              by sustainable sourcing practices 
              and the desire on the part of North
              American flower growers to “extend 
              the season” beyond the last frost.
            </p>
            <NavLink className="btn-contact" to={"/contact"}>CONTACT US</NavLink>

          </div>
          
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default AboutSection
