// import React from 'react';
import ContactMenu from "../Contact-Menu/Contact_Menu";

import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import about_s5 from "../Images/about_s5.png";

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
  const linkedinUrl = "https://www.linkedin.com/in/usamaasif786";
  const gitHubUrl = "https://github.com/usamaasif786";

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
      <div className="section-6 row p-4 mt-4 d-flex justify-content-center ">
        <div className="col-10">
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-md-5 mt-4 section-6-2">
              <h4 className="mb-4">Contact Us</h4>
              <p>
                Would you like to start a project with us? We are just one click
                away from hearing you, Do not wait{" "}
              </p>
              <p className="mb-1">
                Email: <span className="bold">softcloud@gmail.com</span>
              </p>
              <p className="mb-1">
                Linkedin:{" "}
                <span className="bold">
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://www.linkedin.com/in/usamaasif786
                  </a>
                </span>
              </p>
              <p className="mb-4">
                GitHub:{" "}
                <span className="bold">
                  <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
                    https://github.com/usamaasif786
                  </a>
                </span>
              </p>
              <img
                className="img-fluid d-none d-md-block"
                src={about_s5}
                alt=""
              />
            </div>
            <div className="col-12 col-md-6 mt-4 section-6-1">
              <h4 className="mb-4">Submit Your Request</h4>
              <ContactMenu />
              {/* <div>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="form-control mt-4"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Your Email"
                />
                <input
                  type="number"
                  className="form-control mt-4"
                  id="exampleInputEmail1"
                  placeholder="Your Phone Number"
                />
                <textarea
                  className="mt-4"
                  name="message"
                  placeholder="Your message"
                ></textarea>
                <button className="btn btn-danger mt-4 mb-4 p-3">
                  SUBMIT REQUEST
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* 
      <ContactMenu /> */}
    </>
  );
}

export default Contact;
