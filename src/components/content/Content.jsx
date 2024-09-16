import './content.css';
import { FaArrowRightLong } from "react-icons/fa6";
import  Card from './card.jsx';
import { FaQuoteLeft } from "react-icons/fa";
import { GoPlus } from "react-icons/go";


function Content() {
  return (
 <>
 <div className="project">
 <div className="container mt-5">
      <div className="content d-flex flex-wrap ">
        <div className="col-md-6 image_section ">
          <img src="https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/wedding-event-caterer-food-img.png" alt="Image" />
        </div>
        <div className="col-md-6 text_section  mt-5">
            <h1 className='cont_h1'>About Us</h1>
            <div className="text_p mt-4 m-5">
            <p>
            Bhagwati Catering offers a rich legacy of flavor and hospitality along with culinary perfection for your special events. With our diverse culinary expertise, we guarantee that each dish embodies our dedication to excellence and taste, turning your event into a memorable experience. Put your trust in us to make sure you and your guests have a wonderful day.
            </p>
           
           <div className="button_section mt-5">
           <a href="/about" className="btton">READ MORE <FaArrowRightLong className='icon' /></a>
           </div>
            </div>
    
        </div>
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
     <Card/>
     <div className="content d-flex flex-wrap">
     <div className="col-md-5 image_section_2">
      <img src="https://websitedemos.net/catering-services-04/wp-content/uploads/sites/716/2020/10/event-catering-service-owner.png" alt="Image" />
     </div>
     <div className="col-md-6  text_section">
     
      <p className='text_section_p'><FaQuoteLeft className='icon_section' />  As the proprietor of Bhagwati Catering, providing outstanding culinary experiences is my passion. Our committed staff puts out endless effort to make every occasion unforgettable by offering individualized care and delectable meals that perfectly capture our dedication to excellence and client happiness..</p>
      <p className='Owner'>Elena Miles</p>
      <p className='Owner_2'>Owner of mamam</p>
     </div>
     </div>
    </div>
 </div>
 <div className="container">
  <div className="menu mt-5 d-flex flex-wrap ">
    <div className="col-md-6 menu_section ">
      <h1 className="cont_h1">Our Menu</h1>
      <p className="text_p">
      We offer a wide variety of delectable appetizers, main courses, and desserts on our menu. Every piece is carefully designed to accommodate a wide range of preferences and elevate any event, including business gatherings and weddings.
      </p>
   <div className="list d-flex flex-wrap  mt-4">
   <div className="col-md-5 list_1 ">
     <li>Wedding Meals</li>
     <li className='mt-2'>Corporate Events</li>
     </div>
     <div className="col-md-5 list_2  ">
     <li>Birthday Party</li>
     <li className='mt-2'>Custom Menu</li>
     </div>
     <a href="/contact"><button className='contact_button_menu mt-5'>Contact Us</button></a>
   </div>
    </div>
   <div className="col-md-6  image-section">
  <div className="image_section">
    <div
      className="image_1"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU2MzR8MHwxfHNlYXJjaHw4fHx3ZWRkaW5nJTIwbWVhbHMlMjBiYWNrZ3JvdW5kJTIwZGFya3xlbnwwfHx8fDE3MjQzOTQ2MTJ8MA&ixlib=rb-4.0.3&q=80&w=400')`,
      }}
    >
      <div className="menu_type">
        <h1>01.</h1>
        <p className='p_type'>Wedding Meals</p>
        <p className='p_type_2'>Fine dining wedding receptions designed to immortalize your big day.</p>
        <p>Viverra egestas</p>
        <hr />
        <a href="/service" className="card_link">Customize Menu &rarr;</a>
      </div>
    </div>
    <div
      className="image_2 mt-5"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/man-woman-cheers-with-champagne-glasses_8353-6771.jpg?ga=GA1.1.325952049.1714993842&semt=ais_hybrid')`,
      }}
    >
        <div className="menu_type">
        <h1>02.</h1>
        <p className='p_type'>Corporate Events</p>
        <p className='p_type_2'> High-end catering services that are sure to dazzle at your corporate events.</p>
        <p>Viverra egestas</p>
        <hr />
        <a href="/service" className="card_link">Customize Menu &rarr;</a>
      </div>
    </div>
  </div>
  <div className="image_section_2">
    <div
      className="image_3"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1653936392747-cbbf97f8d45c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDU2MzR8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYmxhY2slMjBjYWtlfGVufDB8fHx8MTcyNDM5MzI2OHww&ixlib=rb-4.0.3&q=80&w=400')`,
      }}
    >
        <div className="menu_type">
        <h1>03.</h1>
        <p className='p_type'>Birthday Party</p>
        <p className='p_type_2'>Celebrate with a customized buffet that will thrill each guest.</p>
        <p>Viverra egestas</p>
        <hr />
        <a href="/service" className="card_link">Customize Menu &rarr;</a>
      </div>
    </div>
    <div
      className="image_4 mt-5"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/person-squeezing-lemon-soup-black-bowl-with-dark-wall_181624-4772.jpg?ga=GA1.1.325952049.1714993842&semt=ais_hybrid')`,
      }}
    >
        <div className="menu_type">
        <h1><GoPlus /></h1>
        <p className='p_type'>Custom Menu</p>
        <p className='p_type_2'>Dishes designed to fit your specific preferences and occasion.</p>
        <p>Viverra egestas</p>
        <hr />
        <a href="/service" className="card_link">Customize Menu &rarr;</a>
      </div>
    </div>
  </div>
</div>

  </div>
</div>

 </>
  );
}

export default Content;
