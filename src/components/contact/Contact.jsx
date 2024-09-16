import './contact.css';
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // backend integration can go here
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <div className="about">
        <h3 className="about_text_h3">Contact</h3>
        <p className="about_text_p">
        For queries or bookings, please contact Bhagwati Catering. We're here to make it memorable with customized service and outstanding cuisine. Contact us now to discuss your catering requirements!
        </p>
      </div>
      <div className="container">
        <div className="about_contact">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-container">
                  <h1 className='contact_h1'>Send a Message</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="name">Name <span>*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email <span>*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                       
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject <span>*</span></label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                       
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message <span>*</span></label>
                      <textarea
                        id="message"
                        name="message"
                     
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" className="btn-submit">Send Message</button>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <div className="info-container">
                  <h1 className="cont_h1">Get In Touch</h1>
                  <p>Get in touch with Bhagwati Catering today to discuss your event needs and receive a personalized quote!</p>
                  <div className="contact-info mt-4"> <hr />
                    <div className="info-item ">
                    <i className="fas fa-phone"><FaLocationDot /><IoIosArrowForward /></i>
                     {/* <div className="icon">.</div> */}
                      <span>Our Location</span>
                      <p>First Floor, F426, Phase 8B, Industrial Area, Sector 91, Sahibzada Ajit Singh Nagar, Punjab 160055</p>
                    </div>
                    <div className="info-item ">
                      <i className="fas fa-phone"><PiPhoneCallFill /><IoIosArrowForward /></i>
                      <span>Call us</span>
                      <p>+91 9465-654521</p>
                    </div>
                    <div className="info-item ">
                      <i className="fas fa-envelope"><IoMailSharp /><IoIosArrowForward /></i>
                      <span>Email us</span>
                      <p>info@mitishasoftech.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="conatact_map mt-5">
  <div className="map">
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13722.311912505842!2d76.6829928!3d30.702148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8c87691c2b%3A0x1e625b93fab0a93a!2sMitisha%20Softech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1724828871697!5m2!1sen!2sin"
      allowfullscreen
    ></iframe>
  </div>
</div>

    </>
  );
}

export default Contact;


