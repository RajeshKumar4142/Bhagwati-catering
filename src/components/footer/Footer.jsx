// import React from 'react'
import "./footer.css";
import { FaRegHeart } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <div className="container-fluid mt-5 end">
        <div className="image_footer col-md-12   d-flex">
          <div className="text_section_footer col-md-7  ">
            <h1 className="footer_text  ">
              You Bring The Guests. Let Us Do The Rest.
            </h1>
          </div>
          <div className="footer_button col-md-5 mt-5 py-5 m-5 ">
            <a href="/contact">
              <button className="contact_button_footer">
                Let’s talk About Your Event
              </button>
            </a>
          </div>
        </div>
        <div className="footer col-md-12 mt-5  ">
          <div className="row mt-5">
            <div className="col-md-3">
              <h4 className="text_h1_footer py-4">GET IN TOUCH</h4>
              <p className="text_p_footer m">First Floor, F426, Phase 8B</p>
              <p className="text_p_footer">Industrial Area, Sector 91,</p>
              <p className="text_p_footer">+91 77079-34521</p>
              <p>info@mitishasoftech.in</p>
            </div>
            <div className="col-md-3">
              <h4 className="text_h1_footer py-4 ">About Us</h4>
              <p className="text_p_footer">Our Story</p>
              <p className="text_p_footer">Our Special Menu</p>
              <p className="text_p_footer">Our Clients</p>
              <p>Contact Us</p>
            </div>
            <div className="col-md-3">
              <h4 className="text_h1_footer py-4">OUR SERVICES</h4>
              <p className="text_p_footer">Contact Us</p>
              <p className="text_p_footer">Corporate Events</p>
              <p className="text_p_footer">Birthday Parties</p>
              <p>Bar Services</p>
            </div>
            <div className="col-md-3 bhagwati">
              <h4 className="text_h1_footer py-4"><img src="http://localhost:5173/src/assets/Bhagwati_bg.png" alt="" />Bhagwati Catering</h4>
              <p className="mt-4 ">
              First Floor, F426, Phase 8B, Industrial Area, Sector 91, Sahibzada Ajit Singh Nagar, Punjab 160055
              </p>
              <a href="#">
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/color/48/000000/instagram-new.png" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/color/48/000000/twitter-squared.png" />
              </a>
              <a href="#">
                <img src="https://img.icons8.com/color/48/000000/linkedin-circled.png" />
              </a>
            </div>
            <hr />
            <div className="social_media col-md-12 d-flex justify-content-center">
              <div className="footer-bottom">
                <p>© 2024  <FaRegHeart className="icon_heart"/> Mitishasoftech. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
