import './people.css';
import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

function People() {
  return (
    <>
    <div className="container mt-5">
    <div className="service d-flex">
   <div className="col-md-7">
   <h1 className='cont_h1'>What People Say</h1>
   <p className='text_p_service  mt-4'>Our clients rave about Bhagwati Catering's exceptional service, delicious food, and unforgettable experiences that elevate every event.</p>
   </div>
   <div className=" col-md-5 mt-5 service_button">
   <a href="/contact"><button className='contact_button'>VIEW ALL REVIEW</button></a>
   </div>
     </div>    
     <div className="about_us_2 d-flex  ">
          
        <div className="col-md-4 border text-center biiing">
        <div className="round ">< img src='https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/wedding-event-caterer-customer-review-1.jpg' className='icon_billing mt-2'/></div>
       
         <p><FaQuoteLeft className='icon' /> Bhagwati Catering well beyond our wedding expectations! The service was excellent and the food was great. Our visitors are still gushing about it! <FaQuoteRight className='icon' /></p>
        </div>
        <div className="col-md-4 border text-center biiing">
        <div className="round ">< img src='https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/wedding-event-caterer-customer-review-2.jpg' className='icon_billing mt-2'/></div>
       
        <p><FaQuoteLeft className='icon' /> We hired Bhagwati Catering for a corporate event, and they did not disappoint." The meal was broad, and the presentation was exceptional. <FaQuoteRight  className='icon' /></p>
        </div>
        <div className="col-md-4 border text-center biiing">
        <div className="round ">< img src='https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/wedding-event-caterer-customer-review-3.jpg' className='icon_billing mt-2'/></div>
       
        <p> <FaQuoteLeft className='icon' /> I celebrated my birthday with Bhagwati Catering, and they planned a special feast for me,and everyone had a great time! <FaQuoteRight className='icon' /></p>
        </div>
     
        </div>  
    </div>
    </>
  )
}

export default People