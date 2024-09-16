// import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {food_2,food_3 } from '.';

function header() {
  return (
    <div className="hero">
      <Carousel controls={false} indicators={true}>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src="https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/wedding-event-caterer-hero-section-bg-img.png"
            alt="First slide"
          />
          <Carousel.Caption className="custom-caption ">
            <h3>New York City’s Finest <br /> Caterer for Events & <br />Parties</h3>
            <p>Bhagwati Catering provides exceptional catering services for <br /> weddings, corporate events, and private parties, ensuring <br /> memorable experiences.</p>
            <div className="button-group ">
              <a href="/about" className="btn btn-primary">About US</a>
              <a href="/contact" className="btn btn-secondary">Contact</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item> 
          <img
            className="d-block w-100 h-100"
            src={food_2}
            alt="Second slide"
          />
          <Carousel.Caption className="custom-caption ">
          <h3>New York City’s Finest <br /> Caterer for Events & <br />Parties</h3>
          <p>Bhagwati Catering provides exceptional catering services for <br /> weddings, corporate events, and private parties, ensuring <br /> memorable experiences.</p>
            <div className="button-group ">
              <a href="/about" className="btn btn-primary">About US</a>
              <a href="/contact" className="btn btn-secondary">Contact</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100"
            src={food_3}
            alt="Third slide"
          />
         <Carousel.Caption className="custom-caption ">
         <h3>New York City’s Finest <br /> Caterer for Events & <br />Parties</h3>
            <p>Bhagwati Catering provides exceptional catering services for <br /> weddings, corporate events, and private parties, ensuring <br /> memorable experiences.</p>
            <div className="button-group ">
              <a href="/about" className="btn btn-primary">About US</a>
              <a href="/contact" className="btn btn-secondary">Contact</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
     
      </Carousel>
    </div>
  );
}

export default header;
