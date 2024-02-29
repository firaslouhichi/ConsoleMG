import React from 'react'
import './footer.css'
import fb from '../../Assets/fbicon.png'
import twitter from '../../Assets/twittericon.png'
import insta from '../../Assets/instaicon.png'
import linkedin from '../../Assets/linkedinicon.png'
import { PiCopyright } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="footer-links-div">
        <div className="footer-links">
          <h4>For Business</h4>
          <a href="#">
            <p>Employer</p>
          </a>
          <a href="#">
            <p>Health Plan</p>
          </a>
          <a href="#">
            <p>Individual</p>
          </a>
        </div>


        <div className="footer-links">
          <h4>Resources</h4>
          <a href="#">
            <p>Resource Center</p>
          </a>
          <a href="#">
            <p>Testimonials</p>
          </a>
          <a href="#">
            <p>STV</p>
          </a>

        </div>

          <div className="footer-links">
            <h4>Company</h4>
            <a href="#">
            <p> About</p>
          </a>
          <a href="#">
            <p>Press</p>
          </a>
          <a href="#">
            <p>Career</p>
          </a>
          <a href="#">
            <p>Contact</p>
          </a>
          </div>

          <div className="footer-links">
            <h4>Coming Soon On</h4>
            <div className="social-media">
              <p><img src={fb} alt="" /></p>
              <p><img src={twitter} alt="" /></p>
              <p ><img src={linkedin} alt="" className='linked' /></p>
              <p><img src={insta} alt="" /></p>
            </div>
          </div>
          </div>
        <hr />
           
          <div className="footer-below">
            <div className="footer-copyright">
              <p>
              DotStore. <PiCopyright className='cr'/>
{new Date().getFullYear()}  All rights reserved.
              </p>
            </div>
            <div className="footer-below-links">
              <a href="#"><div><p>Terms & Conditions</p></div></a>
              <a href="#"><div><p>Privacy</p></div></a>
              <a href="#"><div><p>Security</p></div></a>
              <a href="#"><div><p>Cookie Declaration</p></div></a>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Footer
