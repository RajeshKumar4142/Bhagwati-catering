import './testimonial.css';
import { FaGooglePlusG } from "react-icons/fa";
import { FaYelp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaFoursquare } from "react-icons/fa";
import CountUp from 'react-countup';
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";


function Testimonials() {
  return (
    <>
      <div className="about">
        <h3 className="about_text_h3">Testimonials</h3>
        <p className="about_text_p">
        Clients consistently praise Bhagwati Catering for our delicious food, exceptional service, and ability to make every event memorable.
        </p>
      </div>
      <div className="container review-section">
        <div className="review-box">
          <h1 className="review-score "> <CountUp end={4} duration={2} suffix=".7" className="count" /></h1>
          <p>5k+ reviews</p>
        </div>
        <div className="review-box">
          <FaGooglePlusG className="review-icon" />
          <h4>4.8/5</h4>
          <p>1860 reviews</p>
        </div>
        <div className="review-box">
          <FaYelp className="review-icon" />
          <h4>4.6/5</h4>
          <p>1630 reviews</p>
        </div>
        <div className="review-box">
          <FaFacebookSquare className="review-icon" />
          <h4>4.7/5</h4>
          <p>2100 reviews</p>
        </div>
        <div className="review-box">
          <FaFoursquare className="review-icon" />
          <h4>4.7/5</h4>
          <p>940 reviews</p>
        </div>
      </div>
      <div className="container ">
   
     <div className="about_us_2 d-flex gap-3 ">
          
        <div className="col-md-4 border text-center biiing">
        <div className="round ">< img src='https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/wedding-event-caterer-customer-review-1.jpg' className='icon_billing mt-2'/></div>
       
         <p><FaQuoteLeft className='icon' /> Bhagwati Catering made our wedding unforgettable with their delicious food and top-notch service. Our guests couldn't stop complimenting the meals! <FaQuoteRight className='icon' /></p>
        </div>
        <div className="col-md-4 border text-center biiing">
        <div className="round ">< img src='https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/wedding-event-caterer-customer-review-2.jpg' className='icon_billing mt-2'/></div>
       
        <p><FaQuoteLeft className='icon' /> We hired Bhagwati Catering for a corporate event, and they exceeded all expectations. The food was exquisite, and the staff was incredibly professional. <FaQuoteRight  className='icon' /></p>
        </div>
        <div className="col-md-4 border text-center biiing">
        <div className="round ">< img src='https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/wedding-event-caterer-customer-review-3.jpg' className='icon_billing mt-2'/></div>
       
        <p> <FaQuoteLeft className='icon' /> For my birthday, Bhagwati Catering crafted a custom menu that blew everyone away. The attention to detail was remarkable, from the appetizers to the desserts. <FaQuoteRight className='icon' /></p>
        </div>
     
        </div>  \
        <div className="about_us_2 d-flex gap-3 ">
          
        <div className="col-md-4 border text-center biiing">
        <div className="round ">< img src='https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/event-catering-service-reviews-4.jpg' className='icon_billing mt-2'/></div>
       
         <p><FaQuoteLeft className='icon' /> "Bhagwati Catering turned our event into a culinary experience. The diverse menu options and impeccable presentation were simply outstanding! <FaQuoteRight className='icon' /></p>
        </div>
        <div className="col-md-4 border text-center biiing">
        <div className="round ">< img src='https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/event-catering-service-reviews-6.jpg' className='icon_billing mt-2'/></div>
       
        <p><FaQuoteLeft className='icon' /> Our wedding reception was a success, thanks to Bhagwati Catering. The dishes were wonderfully prepared,The employees were attentive. <FaQuoteRight  className='icon' /></p>
        </div>
        <div className="col-md-4 border text-center biiing">
        <div className="round ">< img src='https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/event-catering-service-reviews-5.jpg' className='icon_billing mt-2'/></div>
       
        <p> <FaQuoteLeft className='icon' /> "From start to finish, Bhagwati Catering provided exceptional service for our corporate event. The food was fresh, delicious, and perfectly timed. <FaQuoteRight className='icon' /></p>
        </div>
     
        </div>  
    </div>
    </>
  );
}

export default Testimonials;
