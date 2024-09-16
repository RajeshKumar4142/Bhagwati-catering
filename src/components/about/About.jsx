import './about.css';
// import { FaYoutube } from 'react-icons/fa';
import { FaCirclePlay } from "react-icons/fa6";
import CountUp from 'react-countup';
import { FaQuoteLeft } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaGlassCheers } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="about">
        <h3 className="about_text_h3">About Us</h3>
        <p className="about_text_p">
        Bhagwati Catering is dedicated to providing outstanding culinary experiences for all events.Our various meals and great service make your special occasions genuinely memorable.
        </p>
      </div>
  <div className="container">
    <div className="about_img">
        <a href="https://youtu.be/tlPubZVcQjo?si=lxh8_0E47EozITDM"><FaCirclePlay className="youtube_icon" /></a>
        </div>
      <div className="text mt-5 py-4">
        <div className="row">
          <div className="col-md-4">
            <h4  className='cont_h1'>Our Story</h4>
          
          </div>
          <div className="col-md-8">
            <p className='abous_section_p'>Bhagwati Catering was founded out of a sincere desire to bring people together through the joy of cuisine. We were founded on a commitment to quality and tradition, and we have since grown to become a trusted name in catering services.
            </p>
            <p className='p_about'>Our journey began with a simple goal: to create outstanding culinary experiences that honor life's greatest moments. Today, we continue to provide individualized service, diversified menus, and flawless presentation, elevating every event.</p>
          </div>
        </div>
      </div>

      <div className="counter-section mt-5 d-flex gap-5">
      <div className="counter-item">
        <CountUp end={2000} duration={10} suffix="+" className="count" />
        <h2>Established</h2>
      </div>
      <div className="counter-item">
        <CountUp end={100} duration={10} suffix="+" className="count" />
        <h2>Dishes</h2>
      </div>
      <div className="counter-item">
        <CountUp end={16} duration={10} suffix="+" className="count" />
        <h2>Chefs</h2>
      </div>
      <div className="counter-item">
        <CountUp end={60} duration={10} suffix="+" className="count" />
        <h2>Staff</h2>
      </div>
    </div>  
    <div className="content d-flex flex-wrap">
     <div className="col-md-5 image_section_2">
      <img src="https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/event-catering-service-owner.png" alt="Image" />
     </div>
     <div className="col-md-6  text_section">
     
      <p className='text_section_p'><FaQuoteLeft className='icon_section' />   As the proprietor of Bhagwati Catering, providing outstanding culinary experiences is my passion. Our committed staff puts out endless effort to make every occasion unforgettable by offering individualized care and delectable meals that perfectly capture our dedication to excellence and client happiness...</p>
      <p className='Owner'>Elena Miles</p>
      <p className='Owner_2'>Owner of mamam</p>
     </div>
     </div>
     <div className="container mt-5">
     <div className="service d-flex">
   <div className="col-md-7">
   <h1 className='cont_h1'>Our Service</h1>
   <p className='text_p_service'>Bhagwati Catering provides exceptional catering services for weddings, corporate events, and private parties, ensuring memorable experiences.</p>
   </div>
   <div className=" col-md-5 mt-5 service_button">
   <a href="/contact"><button className='contact_button'>VIEW ALL SERVICE</button></a>
   </div>
     </div>
     <div className="cards d-flex mt-5">
     <div className="custom-card">
      <div className="card-icon">
        <i className="fas fa-building"><FaBuilding /></i> {/* Replace with the appropriate FontAwesome icon */}
      </div>
      <h3 className="card-title">Corporate Events</h3>
      <p className="card-description">
      You may make a lasting impression by enhancing your meetings and conferences with delectable meals thanks to our expert catering services.
      </p>
      <a href="#" className="card-link">Learn More &rarr;</a>
    </div>
    <div className="custom-card">
      <div className="card-icon">
        <i className="fas fa-building"><FaGlassCheers /></i> {/* Replace with the appropriate FontAwesome icon */}
      </div>
      <h3 className="card-title">Wedding Meals</h3>
      <p className="card-description">
      We build customized menus and offer dedicated care to create a magical culinary experience for your special day. We offer excellent catering for weddings.
      </p>
      <a href="#" className="card-link">Learn More &rarr;</a>
    </div>
    <div className="custom-card">
      <div className="card-icon">
        <i className="fas fa-building"><FaBirthdayCake /></i> {/* Replace with the appropriate FontAwesome icon */}
      </div>
      <h3 className="card-title">Birthday Parties</h3>
      <p className="card-description">
      In honor of your special day, choose from a variety of personalized birthday meal selections that are sure to make your guests feel loved and inspired.
      </p>
      <a href="#" className="card-link">Learn More &rarr;</a>
    </div>
     </div>
  
    </div>
  </div>
    </>
  );
}

export default About;
