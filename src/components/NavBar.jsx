import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from '../assets/img/tom.ico';
import { User } from './User';
import { BrowserRouter, Router, Route, NavLink } from 'react-router-dom';
import Gallery from './Gallery';
import { createBrowserHistory } from 'history';
import { FaFileAlt } from 'react-icons/fa';

export const NavBar = () => {

  // Create a browser history
  const history = createBrowserHistory();
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // user related
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <>
    {/* <BrowserRouter> */}
        <div className="center">
        <Navbar  expand='md' className={scrolled ? "scrolled center" : "center" }>
          <Container className="navbar-container">
            <Navbar.Brand href="/">
              <img src={logo} style={{width: '40px', height: '40px'}}alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="nav-bar-collapse">
              <Nav className="ms-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                {/* <Nav.Link href="#reviews" className={activeLink === 'reviews' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Reviews')}>Reviews</Nav.Link> */}

                <Nav.Link href="#projects" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Projects</Nav.Link>
                <Nav.Link href="#view-posts" className={activeLink === 'view-posts' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('view-posts')}>Posts</Nav.Link>
                <Nav.Link href="#connect" className={activeLink === 'contact-us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact-us')}>ContactUs</Nav.Link>
                <Nav.Link href="">
                  <div className="cv-container">
                  < FaFileAlt className="cv-icon" size={50}/>
                  <div className="cv-text"> CV </div>
                  </div>
                </Nav.Link>
                <Nav.Link  className={activeLink === 'view-posts' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('gallery')}>
                </Nav.Link>
                {/* <Link to='/gallery' href="#gallery" className={activeLink === 'gallery' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('gallery')}>Gallery</Link> */}
                <Nav.Link href="#user" className="nav-bar-user"> <User /></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>


    </>
  )
}
