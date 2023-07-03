// import React from 'react';
import ContactMenu from "../Contact-Menu/Contact_Menu";

import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";

function Contact() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <>
      <header className="contact-header">
        <div className="row d-flex justify-content-center  ">
          <div className="col col-sm-12 col-md-9 mt-4 p-2 align-items-center">
            <div className="row d-flex align-items-center">
              <h2
                className="col-4 d-flex d-none d-sm-block justify-content-start"
                to="/"
              >
                <Link className="nav-link" style={{ color: "white" }} to="/">
                  SoftCloud
                </Link>
              </h2>
              {(toggleMenu || screenWidth > 576) && (
                <ul className="col list m-0 p-0 nav justify-content-end">
                  <li className="nav-item">
                    <Link className="nav-link bold" aria-current="page" to="/">
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link bold" to="/about">
                      ABOUT
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link bold" to="/services">
                      SERVICES
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link bold active" to="/contact">
                      CONTACT
                    </Link>
                  </li>
                </ul>
              )}
              <button onClick={toggleNav} className="nav-btn">
                <i class="bi bi-list"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-11 col-md-8">
            <div className="row mt-4 ">
              <div className="col-11 col-md-8">
                <h1>Contact Us</h1>
                <p className="mt-4" style={{ textAlign: "justify" }}>
                  We provide a wide array of professional and efficient software
                  solutions that result in extraordinary digital experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <ContactMenu />
    </>
  );
}

export default Contact;
