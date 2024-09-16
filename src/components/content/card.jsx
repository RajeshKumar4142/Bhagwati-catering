
import './card.css';
import { FaBuilding } from "react-icons/fa";
import { FaGlassCheers } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import { FaBox } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
function Card() {
  return (
    <>
     <div className="cards d-flex mt-5">
     <div className="custom-card">
      <div className="card-icon">
        <i className="fas fa-building"><FaBuilding /></i> {/* Replace with the appropriate FontAwesome icon */}
      </div>
      <h3 className="card-title">Corporate Events</h3>
      <p className="card-description">
      You may make a lasting impression by enhancing your meetings and conferences with delectable meals thanks to our expert catering services. 
      </p>
      <a href ="/service" className="card-link">Learn More &rarr;</a>
    </div>
    <div className="custom-card">
      <div className="card-icon">
        <i className="fas fa-building"><FaGlassCheers /></i> {/* Replace with the appropriate FontAwesome icon */}
      </div>
      <h3 className="card-title">Wedding Meals</h3>
      <p className="card-description">
      We build customized menus and offer dedicated care to create a magical culinary experience for your special day. We offer excellent catering for weddings.  
      </p>
      <a href ="/service" className="card-link">Learn More &rarr;</a>
    </div>
    <div className="custom-card">
      <div className="card-icon">
        <i className="fas fa-building"><FaBirthdayCake /></i> {/* Replace with the appropriate FontAwesome icon */}
      </div>
      <h3 className="card-title">Birthday Parties</h3>
      <p className="card-description">
      In honor of your special day, choose from a variety of personalized birthday meal selections that are sure to make your guests feel loved and inspired.  
      </p>
      <a href ="/service" className="card-link">Learn More &rarr;</a>
    </div>
     </div>
     <div className="cards d-flex">
     <div className="custom-card">
      <div className="card-icon">
        <i className="fas fa-building"><LiaGlassMartiniAltSolid /></i> {/* Replace with the appropriate FontAwesome icon */}
      </div>
      <h3 className="card-title">Bar Services</h3>
      <p className="card-description">
      To make sure your guests have an unforgettable time, we provide full-service bar catering with a large assortment of drinks that are designed to go with the theme of your event.  
      </p>
      <a href="/service" className="card-link">Learn More &rarr;</a>
    </div>
    <div className="custom-card">
      <div className="card-icon">
        <i className="fas fa-building"><FaBox /></i> {/* Replace with the appropriate FontAwesome icon */}
      </div>
      <h3 className="card-title">Drop Off Catering</h3>
      <p className="card-description">
      Take advantage of our convenient drop-off catering services, which transport delicious meals straight to your location.
      </p>
      <a href ="/service" className="card-link">Learn More &rarr;</a>
    </div>
    <div className="custom-card">
      <div className="card-icon">
        <i className="fas fa-building"><IoIosPeople /></i> {/* Replace with the appropriate FontAwesome icon */}
      </div>
      <h3 className="card-title">Staffing Services</h3>
      <p className="card-description">
      Our knowledgeable and welcoming team is committed to making sure everything runs well at your event and to giving you and your guests a first-rate experience.
      </p>
      <a href ="/service" className="card-link">Learn More &rarr;</a>
    </div>
     </div>
    </>
  );
}

export default Card;
