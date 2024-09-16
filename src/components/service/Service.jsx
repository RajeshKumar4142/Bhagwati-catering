import './service.css';
import People from '../people/People'; 
function Service() {
  return (
    <>
      <div className="about">
        <h3 className="about_text_h3">Services</h3>
        <p className="about_text_p">
        Bhagwati Catering provides tailored catering services for weddings, corporate events, and private parties, with personalized menus and competent staff to make each occasion memorable.
        </p>
      </div>
      <div className="container ">
        {/* First Service Section */}
        <div className="service_img">
          <div className="col-md-6 service_image" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/close-up-hands-holding-food-vessel_23-2148681897.jpg)'}}>
          
          </div>
          <div className="col-md-6  text_service">
            <h3>Wedding Meals</h3>
            <p>We specialize in creating unique wedding dinners that compliment your special day, with personalized menus and exceptional service to provide a memorable experience for you and your guests.</p>
          </div>
        </div>

        {/* Second Service Section */}
        <div className="service_img mt-0">
          <div className="col-md-6  service_image">
          <h3>Corporate Events</h3>
          <p>Our professional catering services for corporate events provide excellent and diversified meals that improve your business gatherings, from meetings to huge conferences, and leave a lasting impression on your guests.</p>
          </div>
          <div className="col-md-6   text_service"  style={{backgroundImage: 'url(https://img.freepik.com/free-photo/man-woman-cheers-with-champagne-glasses_8353-6771.jpg?ga=GA1.1.325952049.1714993842&semt=ais_hybrid)'}}>
        
          </div>
        </div>

        {/* Third Service Section */}
        <div className="service_img mt-0">
          <div className="col-md-6 service_image" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/person-squeezing-lemon-soup-black-bowl-with-dark-wall_181624-4772.jpg?ga=GA1.1.325952049.1714993842&semt=ais_hybrid)'}}>
          </div>
          <div className="col-md-6  text_service ">
            <h3>Custom Order</h3>
            <p> We provide flexible custom order choices, allowing you to personalize your menu to specific tastes and dietary needs, ensuring that your event's catering is exactly what you imagine.</p>
          </div>
        </div>
        <People />
      </div>
    </>
  );
}

export default Service;
