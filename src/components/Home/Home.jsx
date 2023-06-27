import Section_1 from "../Images/section_1.png";
import section_2 from "../Images/section_2.png";
import section_5_1 from "../Images/section_5_1.png";
import section_5_2 from "../Images/section_5_2.png";
import section_6_1 from "../Images/section_6_1.png";
import section_6_2 from "../Images/section_6_2.png";
import "../CSS/component.css";

import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

function Home() {
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
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <header className="home-header">
        <div className="row d-flex justify-content-center  ">
          <div className="col-sm-12 col-md-9  mt-4 p-2 ">
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
                    <Link
                      className="nav-link bold active"
                      aria-current="page"
                      to="/"
                    >
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
                    <Link className="nav-link bold" to="/contact">
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
                <h1>
                  Committed
                  <br />
                  to be creative
                </h1>
                <p className="mt-4">
                  Boost your productivity and streamline development with our
                  cutting-edge React JS solutions. Our software company
                  harnesses the power of React JS to deliver high-performing web
                  applications that engage users and drive business growth. Join
                  numerous satisfied clients who have achieved remarkable
                  success through our innovative and scalable React JS
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* //// Section -1 ///////// */}

      <div className="section-1 home row d-flex justify-content-center ">
        <div className="col-9 m-t-b">
          <div className="row d-flex justify-content-between ">
            <div className="col-12 col-md-5 justify">
              <h4 className="black">Why Choose Us?</h4>
              <p className="mt-4 ">
                We are a full-service software house. Our clients ranges from
                public and private sectors including start-ups. What separates
                us from others is the flexibility of hiring us as a team of
                experts or individual developers. From the start, till the end,
                we have you covered. We provide our clients with successful
                solutions in UI/UX Design, Web Development and Mobile App
                development.
              </p>
            </div>
            <div className="col-5 d-none d-md-block">
              <img
                className="img-fluid"
                src={Section_1}
                width={300}
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* //// Section -2 ///////// */}

      <div className="section-2 row d-flex justify-content-center">
        <div className="col-11 col-md-7 mt-4 mb-4">
          <h3 className="text-center">How we do?</h3>
          <p className="mb-4 text-center">
            Once we join hands, this is what we will take you through from the
            start to a deliver product.
          </p>
          <img className="img-fluid mt-2 mb-4" src={section_2} alt="Logo" />
        </div>
        <div className="row section-2-1 mt-4 mb-4 d-flex justify-content-center">
          <div className="col-12 col-md-7">
            <div className="row" style={{ marginLeft: "" }}>
              <div className="col-12 col-lg p-2">
                <div className="row">
                  <div className="col section-2-1 section-2-0">
                    <h6 style={{ color: "#31b5e9" }}>Meet the user</h6>
                    <ul className="p-0">
                      <li>User demographics</li>
                      <li>Define user goals</li>
                      <li>Define user challenges</li>
                      <li>Defines metrics</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg p-2">
                <div className="row">
                  <div className="col section-2-2 section-2-0">
                    <h6 style={{ color: "#cf2e2e" }}>Be the user</h6>
                    <ul className="p-0">
                      <li>User personas</li>
                      <li>User scenarios</li>
                      <li>User testing</li>
                      <li>User Experience</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg p-2">
                <div className="row">
                  <div className="col section-2-3 section-2-0">
                    <h6 style={{ color: "#ff6900" }}>Make it simple</h6>
                    <ul className="p-0">
                      <li>Wire-frames</li>
                      <li>Mood-board</li>
                      <li>Mock-ups</li>
                      <li>Style Guides</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg p-2">
                <div className="row">
                  <div className="col section-2-4 section-2-0">
                    <h6 style={{ color: " rgb(39 175 156)" }}>
                      Data don’t lie
                    </h6>
                    <ul className="p-0">
                      <li>Usability testings</li>
                      <li>Review metrics</li>
                      <li>Track usage</li>
                      <li>Inform next iteration</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg p-2">
                <div className="row">
                  <div className="col section-2-5 section-2-0">
                    <h6 style={{ color: "#242a56" }}>Stick to the design</h6>
                    <ul className="p-0">
                      <li>Usability testings</li>
                      <li>Review metrics</li>
                      <li>Track usage</li>
                      <li>Inform next iteration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //// Section -4 ///////// */}

      <div className="section-4 row d-flex justify-content-center ">
        <div className="col-10 col-md-8 m-t-b p-2 section-4-1">
          <div className="row d-flex align-items-center">
            <div className="col-12 col-md mt-4 mb-4 p-2">
              <h4>Our Company Achievements</h4>
            </div>
            <div className="col-12 col-md mt-4 mb-4 p-2">
              <h2>57</h2>
              <h6>Satisfied Clients</h6>
            </div>
            <div className="col-12 col-md mt-4 mb-4 p-2">
              <h2>120</h2>
              <h6>Projects Completed</h6>
            </div>
            <div className="col-12 col-md mt-4 mb-4 p-2">
              <h2>3,268</h2>
              <h6>Support Hours</h6>
            </div>
            <div className="col-12 col-md mt-4 mb-4 p-2">
              <h2>7,800</h2>
              <h6>Development Hours</h6>
            </div>
          </div>
        </div>
      </div>

      {/* //// Section -5 ///////// */}

      <div className="section-5 row d-flex justify-content-center ">
        <div className="col-10 mt-4 mb-4">
          <h3 className="mb-4 text-center">Featured Work</h3>
          <div className="row text-center">
            <div className="col-12 col-md-6">
              <img
                className="img-fluid mt-4 mb-4"
                style={{ cursor: "pointer" }}
                src={section_5_1}
                alt=""
              />
            </div>
            <div className="col-12 col-md-6">
              <img
                className="img-fluid mt-4 mb-4"
                style={{ cursor: "pointer" }}
                src={section_5_2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* //// Section -6 ///////// */}

      <div className="section-6 row d-flex justify-content-center justify">
        <div className="col-10 p-4 mt-4 mb-4">
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-md-6 section-6-1">
              <h4>Contact Us</h4>
              <input
                type="text"
                className="form-control mt-4"
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
            </div>
            <div className="col-5 section-6-2">
              <h4 className="d-none d-md-block">Request a Quote</h4>
              <p className="d-none d-md-block">
                Would you like to start a project with us? We are just one click
                away from hearing you, Do not wait{" "}
              </p>
              <p className="mt-4 mb-4 d-none d-md-block">
                Email: <span className="bold">usamaasif885@gmail.com</span>
              </p>
              <h5>Reviewed on</h5>
              <img
                className="img-fluid mt-4"
                width={150}
                src={section_6_1}
                alt=""
              />{" "}
              <br />
              <img
                className="img-fluid mt-4"
                width={100}
                src={section_6_2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* //// Section -7 ///////// */}

      <div className="section-7">
        <h3 className="text-center p-4">Success Stories</h3>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="text-center pb-4"
        >
          <Carousel.Item>
            <div className="row d-flex justify-content-center">
              <div className="col-10 col-md-7 mb-4">
                <p>
                  "I was referred to Soft Cloud by a Series C company and I have
                  been truly impressed. They recruit the top university
                  graduates which is on display with their clear communication
                  and their high quality code."
                </p>
                <h6>CEO: Usama Asif</h6>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row d-flex justify-content-center">
              <div className="col-10 col-md-7 mb-4">
                <p>
                  "I was referred to Soft Cloud by a Series C company and I have
                  been truly impressed. They recruit the top university
                  graduates which is on display with their clear communication
                  and their high quality code."
                </p>
                <h6>CEO: Usama Asif</h6>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row d-flex justify-content-center">
              <div className="col-10 col-md-7 mb-4">
                <p>
                  "I was referred to Soft Cloud by a Series C company and I have
                  been truly impressed. They recruit the top university
                  graduates which is on display with their clear communication
                  and their high quality code."
                </p>
                <h6>CEO: Usama Asif</h6>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
export default Home;
