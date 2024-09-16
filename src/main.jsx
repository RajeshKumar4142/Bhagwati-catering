import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App.jsx'
import './index.css'
import Home from './components/home/Home.jsx';
import Layout from './layout.jsx';
import About from './components/about/About.jsx';
import Service from './components/service/Service.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Contact from './components/contact/Contact.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} /> 
          <Route path="service" element={<Service />} /> 
          <Route path="testimonials" element={<Testimonials />} /> 
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
