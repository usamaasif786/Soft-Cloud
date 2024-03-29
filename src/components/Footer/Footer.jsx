import React from "react";
import header_logo from "../Images/header-logo.png";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

import "../CSS/component.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Footer = () => {
  const handleFooterLogoClick = () => {
    scroll.scrollToTop({
      smooth: true,
      duration: 500,
    });
  };
  const handleQuickLinkClick = (section) => {
    scroll.scrollTo(section, {
      smooth: true,
      duration: 500,
      offset: -70,
    });
  };

  return (
    <>
      <footer>
        <div className="row p-4 d-flex justify-content-center">
          <div className="col-11 mt-4 ">
            <div className="row d-flex justify-content-around">
              <div className="col-12 col-md-4 justify">
                <img
                  className="img-fluid mt-4"
                  style={{ width: "150px", cursor: "pointer" }}
                  src={header_logo}
                  alt="Footer Logo"
                  onClick={handleFooterLogoClick}
                />
                <p className="mt-4">
                  We Provide ourselves in our ability to deliver our client’s
                  vision. Customer satisfaction is our number one priority. We
                  understand that our work is our expression to the outside
                  world and we make sure that we produce high-quality solutions.
                </p>
              </div>
              <div className="col-12 col-md-3 col-lg-3 justify">
                <h2
                  className="mb-4 mt-4"
                  style={{ color: "rgb(128, 201, 230)", fontWeight: "bold" }}
                >
                  Quick Links
                </h2>
                <h5>
                  <Link
                    className="nav-link p-0"
                    onClick={() => handleQuickLinkClick("/")}
                    // activeClass="active"
                    to="/"
                    // spy={true}
                    // smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ color: "white" }}
                  >
                    Home
                  </Link>
                </h5>
                <h5>
                  <Link
                    className="nav-link p-0"
                    onClick={() => handleQuickLinkClick("About")}
                    // activeClass="active"
                    to="About"
                    // spy={true}
                    // smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ color: "white" }}
                  >
                    About
                  </Link>
                </h5>
                <h5>
                  <Link
                    className="nav-link p-0"
                    onClick={() => handleQuickLinkClick("Services")}
                    // activeClass="active"
                    to="Services"
                    // spy={true}
                    // smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ color: "white" }}
                  >
                    Services
                  </Link>
                </h5>
                <h5>
                  <Link
                    className="nav-link p-0"
                    onClick={() => handleQuickLinkClick("Contact")}
                    // activeClass="active"
                    to="Contact"
                    // spy={true}
                    // smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ color: "white" }}
                  >
                    Contact
                  </Link>
                </h5>
                {/* <h5><Link className="nav-link p-0" style={{color: 'white'}} to="Booking">Booking</Link></h5> */}
              </div>
              <div className="col-12 col-md-3 col-lg-3 justify">
                <h2
                  className="mb-4 mt-4"
                  style={{ color: "rgb(128, 201, 230)", fontWeight: "bold" }}
                >
                  Get In Touch
                </h2>
                <h5>Phone: +92-307-6570094</h5>
                <h5>softcloud@gmail.com</h5>
                <h5>engusamaasif885@gmail.com</h5>
                <h5>
                  Address: Madina Boys Hostel, Block C 1 Phase 1 Johar Town,
                  Lahore, Punjab
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3">
          <p className="text-center" style={{ fontWeight: "bold" }}>
            Copyright © {new Date().getFullYear()} SoftCloud
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
