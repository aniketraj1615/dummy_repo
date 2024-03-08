import React,{ useState,useEffect }from "react";
// import logo from "./Images/logo1.png";
import "./NavBar.css";
// import Landingpage from "./LandingPage"
// import CCNA from "./CCNA"
// import MainPage from "./MainPage";
// import ICMP from "./ICMP";
// import About from "./About";
// import MasterClasses from "./MasterClasses";
import {Link,useLocation} from 'react-router-dom';
// import Help_center from "./Help_center";
// import Events from "./Events";

export default function NavBar() {
  const closeMobileMenu = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
      // console.log("aniket");
      navbarToggler.click(); // Simulate a click on the mobile menu toggle button
    }
  };
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary bg-light">
        <div className="container-fluid">
          <a className="navbar-brand mx-4">
            <Link to="/">
            {/* <img src={logo} id="logo" /> */}
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
           
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0 mx-4"
              id="ulContainer"
            >
              <li className="nav-item navbarlink">
                <a
                  className="nav-link active font "
                  id="navlink"
                  aria-current="page"
                  href="#"
                >
                  Courses<i className='bx bx-caret-down'></i>
                </a>
                <ul className="dropdown" id="dropdown_text">
                  <li>
                    <Link to="CCNA"onClick={closeMobileMenu}>CCNA 200-301</Link>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>CCNA Enterprises</a>
                  </li>
                  <li>
                    <a href="#"onClick={closeMobileMenu}>OSPF|BGP|MPLS</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item navbarlink">
                <a
                  className="nav-link active font"
                  id="freeVersity"
                  aria-current="page"
                  href="#"onClick={closeMobileMenu}
                >
                 FreeVersity
                </a>
              </li>
              <li className="nav-item navbarlink">
                <a
                  className="nav-link active font"
                  id="navlink"
                  aria-current="page"
                  href="#"
                >
                  Blogs<i className='bx bx-caret-down'></i>
                </a>
                <ul className="dropdown" id="dropdown_text">
                  <li className="ccna_drop">
                    <a href="#">CCNA<i className='bx bx-caret-right'></i></a>
                    <ul className="dropdown1" id="dropdown_text">
                  <li>
                    <a href="#">Network Fundamentals<i className='bx bx-caret-right'></i></a>
                    <ul className="dropdown2" id="dropdown_text">
                  <li>
                   
                    <Link to="ICMP"onClick={closeMobileMenu}>ICMP – Internet Control Message Protocol</Link>
                    
                  </li>
                  
                  
                </ul>
                   
                  </li>
                  
                  
                </ul>
                  </li>
                  <li>
                    <a href="#">Python<i className='bx bx-caret-right'></i></a>
                  <ul className="dropdown3" id="dropdown_text">
                  <li>
                    <a href="#"onClick={closeMobileMenu}>What is Programming?</a>
                    
                   
                  </li>
                  
                  
                </ul>
                  </li>
                  
                  
                </ul>

              </li>
            

              <li className="nav-item navbarlink">
                <Link
                  className="nav-link active font "
                  id="navlink"
                  aria-current="page"
                to="MasterClasses"onClick={closeMobileMenu}
                >
                  MasterClasses
                </Link>
              </li>
              <li className="nav-item navbarlink">
                <Link
                  className="nav-link active font "
                  id="navlink"
                  aria-current="page"
                to="Events"onClick={closeMobileMenu}
                >
                  Events
                </Link>
              </li>
              <li className="nav-item navbarlink">
                <Link to="#"
                  className="nav-link active font"
                  id="more"
                  aria-current="page"
                  
                >
                  More<i className='bx bx-caret-down'></i>
                </Link>
                <ul className="dropdown" id="dropdown_text">
                  <li>
                    <Link to="#"onClick={closeMobileMenu}>My Profile</Link>
                  </li>
                  <li>
                    <Link to="About"onClick={closeMobileMenu}>About Us</Link>
                  </li>
                  <li>
                    <Link to="Help_center"onClick={closeMobileMenu}>Help Center</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          
        </div>
      </nav>
      
    </>
  );
}