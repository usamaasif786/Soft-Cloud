// import React from 'react';
import Contact_Menu from '../Contact-Menu/Contact_Menu';
import about_s1_1 from '../Images/about_s1_1.png'
import about_s1_2 from '../Images/about_s1_2.png'
import about_s2_left from '../Images/about_s2_l.png'
import about_s2_center from '../Images/about_s2_c.png'
import about_s2_right from '../Images/about_s2_r.png'
import about_s4_1 from '../Images/about_s4_1.png'
import about_s4_2 from '../Images/about_s4_2.png'
import about_s4_3 from '../Images/about_s4_3.png'
import about_s4_4 from '../Images/about_s4_4.png'
import about_s4_5 from '../Images/about_s4_5.png'
import about_s4_6 from '../Images/about_s4_6.png'
import about_s4_7 from '../Images/about_s4_7.png'
import about_s4_8 from '../Images/about_s4_8.png'
import "../CSS/component.css"
import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function About() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
  return (
    <>
      <header className='about-header'>
        <div className='row d-flex justify-content-center  '>
          <div className='col-9 mt-4 p-2 align-items-center'>
            <div className='row'>
              <h2 className='col-4 d-flex d-none d-sm-block justify-content-start' to="/">
                <Link className="nav-link" style={{color: 'white'}} to="/">Soft Kloud</Link>
              </h2>
              {(toggleMenu || screenWidth > 576) &&(
              <ul className="col list m-0 p-0 nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link active" to="/about">ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/services">SERVICES</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link" to="/contact">CONTACT</Link>
                </li>
              </ul>)}
              <button onClick={toggleNav} className="nav-btn">
                <i class="bi bi-list"></i>
              </button>
            </div>
          </div> 
        </div>
        <div className='row d-flex justify-content-center mt-4'>
          <div className='col-11 col-md-8'>
            <div className='row mt-4 '>
              <div className='col-11 col-md-8'>
              <h1>About Us</h1>
              <p className='mt-4 p-1'>We pride ourselves in our ability to deliver our client’s vision. Customer satisfaction is our number one priority. We understand that our work is our expression to the outside world and we make sure that we produce high-quality solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

         {/* ////// Section 1 //// */}

      <div className='about-s1'>
        <div className='row'>
          <h3 className='mt-4 text-center'>Our Mission</h3>
          <div className='row d-flex justify-content-center'>
            <div className='col-11 col-md-7 mt-2'>
             <p className='text-center'>We aim high at being focused on building relationships with our clients and community.  The time has come to bring those ideas and plans to life. This is where we really begin to visualize your napkin sketches and make them into beautiful pixels.</p>
            </div> 
          </div>
        </div>
        <div className='row p-0 m-0'>
            <div className='col- m-0 p-0 d-flex justify-content-between'>
              <div></div>
              <img className='img-fluid mt-4 about-s1-1' src={about_s1_1} alt="" />
              <img className='img-fluid align-self-center d-none d-md-block mt-4 about-s1-2 ' src={about_s1_2} alt="" />
            </div>
        </div>
      </div>
        
         {/* ////// Section 2 //// */}
        
      <div className='about-s2'>
        <div className='row d-flex justify-content-center'>
          <div className='col-12'>
            <div className='row d-flex justify-content-between'>
              <div className='col-1 align-self-start'>
                <img className='img-fluid d-none d-md-block' src={about_s2_left} alt="" />
              </div>
              <div className='col-12 col-md-6 about-s2-1 justify'>
                <h4>What we do</h4>
                <ul className='mt-4'>
                  <li>UI UX Design</li>
                  <li>Website Development</li>
                  <li>Mobile App Development</li>
                  <li>Sales & Marketing</li>
                  <li>Social Media</li>
                  <li>eCommerce Store</li>
                  <li>Tech Support</li>
                  <li>Architecture Solution</li>
                </ul>
              </div>
              <div className='col-12 col-md p-2 '>
                <img className='img-fluid mt-4' width={250} src={about_s2_center} alt="" />
              </div>
              <div className='col-1 align-self-end'>
                <img className='img-fluid d-none d-md-block' src={about_s2_right} alt="" />
              </div>
            </div>
          </div>
         
        </div>
      </div>

         {/* ////// Section 3 //// */}

      <div className='about-s3 section-4 mt-4 mb-4 row d-flex justify-content-center '>
        <div className='col-10 section-4 mt-4 mb-4 p-4  section-4-1'>
          <div className='row p-3 d-flex align-items-center'>
            <div className='col-12 col-md mt-4 mb-4 p-2'>
              <p>Our Company Achievements</p>
            </div>
            <div className='col-12 col-md mt-4 mb-4 p-2'>
              <h2>127</h2>
              <h6>Satisfied Clients</h6>
            </div>
            <div className='col-12 col-md mt-4 mb-4 p-2'>
              <h2>242</h2>
              <h6>Projects Completed</h6>
            </div>
            <div className='col-12 col-md mt-4 mb-4 p-2'>
              <h2>3,268</h2>
              <h6>Support Hours</h6>
            </div>
            <div className='col-12 col-md mt-4 mb-4 p-2'>
              <h2>7,800</h2>
              <h6>Development Hours</h6>
            </div>
          </div>
        </div>
      </div>

         {/* ////// Section 4 //// */}

      <div className='about-s4 mb-4'>
        <h3 className='mt-4 text-center'>Life at Soft Kloud</h3>
        <div className='row d-flex justify-content-center'>
          <div className='col-11 col-md-10 mt-4'>
            <div className='row d-flex justify-content-between'>
              <div className='col-6 col-md p-2'>
                <img className='img-fluid' src={about_s4_1} alt="" />
              </div>
              <div className='col-6 col-md p-2'>
                <img className='img-fluid' src={about_s4_2} alt="" />
              </div>
              <div className='col-6 col-md p-2'>
                <img className='img-fluid' src={about_s4_3} alt="" />
              </div>
              <div className='col-6 col-md p-2'>
                <img className='img-fluid' src={about_s4_4} alt="" />
              </div>
            </div>
            <div className='row d-flex justify-content-between'>
              <div className='col-6 col-md p-2'>
                <img className='img-fluid' src={about_s4_5} alt="" />
              </div>
              <div className='col-6 col-md p-2'>
                <img className='img-fluid' src={about_s4_6} alt="" />
              </div>
              <div className='col-6 col-md p-2'>
                <img className='img-fluid' src={about_s4_7} alt="" />                
              </div>
              <div className='col-6 col-md p-2'>
                <img className='img-fluid' src={about_s4_8} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>

         {/* ////// Section 1 //// */}

     <Contact_Menu/>
    </>
  )
}
export default About
