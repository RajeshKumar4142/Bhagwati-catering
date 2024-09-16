import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { bhagwati } from '.';
// import { bhagwati2 } from '.';

function BasicExample() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down - hide the navbar
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show the navbar
        setShowNavbar(true);
      }

      // Update lastScrollY
      setLastScrollY(currentScrollY);

      // Change navbar style when scrolled
      if (currentScrollY > 50) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={`container-fluid ${showNavbar ? '' : 'navbar-hidden'}`} id="navbar">
      <Navbar
        expand="lg"
        className={`navbar ${navbarScrolled ? 'navbar-scrolled' : ''}`}
      >
        <Container>
        <Navbar.Brand href="#home">
              <div className="logo">
                <img src={bhagwati} alt="Logo" /><h5>Bhagwati Catering</h5>
              </div>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/service">Service</Nav.Link>
              <Nav.Link as={Link} to="/testimonials">Testimonials</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Button
                className='whatsapp_button'
                href="https://wa.me/9465654521?text=Hello! I would like to inquire about..."
                variant="success"
                target="_blank">85447-32165
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
