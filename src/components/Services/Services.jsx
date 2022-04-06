// import React from 'react';
import services_s1_1 from '../Images/services_s1_1.jpg'
import services_s1_2 from '../Images/services_s1_2.jpg'
import services_s1_3 from '../Images/services_s1_3.jpg'
import services_s2_1 from '../Images/services_s2_1.jpg'
import services_s2_2 from '../Images/services_s2_2.jpg'
import services_s2_3 from '../Images/services_s2_3.jpg'
import services_s2_4 from '../Images/services_s2_4.jpg'
import services_s2_5 from '../Images/services_s2_5.jpg'
import services_s2_6 from '../Images/services_s2_6.jpg'
import services_s3_1 from '../Images/services_s3_1.jpg'
import services_s3_2 from '../Images/services_s3_2.jpg'
import services_s3_3 from '../Images/services_s3_3.jpg'

import "../CSS/component.css"

import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Services() {
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
      <header className='services-header'>
        <div className='row d-flex justify-content-center  '>
          <div className='col-11 col-md-9 mt-4 p-2 align-items-center'>
            <div className='row d-flex align-items-center'>
              {/* <h2 className='col-4 d-flex d-none d-sm-block justify-content-start'>Soft Kloud</h2> */}
              <h2 className='col-4 d-flex d-none d-sm-block justify-content-start' to="/">
                <Link className="nav-link" style={{color: 'white'}} to="/">Soft Kloud</Link>
              </h2>
              {(toggleMenu || screenWidth > 576) &&(
              <ul className="col list m-0 p-0 nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link bold" aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link bold" to="/about">ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link bold active" to="/services">SERVICES</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link bold" to="/contact">CONTACT</Link>
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
              <h1>Services</h1>
              <p className='mt-4 p-1'>The software solutions developed by our company are numerously recognized for usability and innovative features.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
         {/* ///////  Section 1  //// */}

      <div className='services-s1 '>
        <div className='row'>
          <h3 className='mt-4'>Software Development</h3>
          <div className='row d-flex justify-content-center'>
            <div className='col-11 col-md-7 mt-2'>
             <p className='text-center'>We provide software development, maintenance, support, deployment and implementation services as well as Web Development and Mobile Apps for both Android and iOS.</p>
            </div> 
          </div>
        </div>
        <div className='row mt-4 p-4 d-flex justify-content-center'>
          <div className='col-11 col-md-10'>
            <div className='row'>
            <div className="col-12 col-md services-s1-1 m-2 p-4  d-flex flex-column bd-highlight ">
              <div className=" mb-auto text-center p-2 bd-highlight">
                <img className='img-fluid mb-4 ' width={200} src={services_s1_1} alt="" />
              </div>
              <div className="p-2 bd-highlight">
                <h5 className='justify'>Web Development</h5>
              </div>
              <div className="p-2 bd-highlight">
                <p className='justify'>Having been into the business for over a decade, We love to convert your ideas into reality & full filling your needs by offering responsive .</p>
              </div>
            </div>

            <div className="col-12 col-md services-s1-1 m-2 p-4 d-flex flex-column bd-highlight ">
              <div className="mb-auto text-center p-2 bd-highlight">
                <img className='img-fluid mb-4' width={200} src={services_s1_2} alt="" />
              </div>
              <div className="p-2 bd-highlight">
                <h5 className='justify'>Mobile Development</h5>
              </div>
              <div className="p-2 bd-highlight">
                <p className='justify'>We provide 360 solutions ranging from communication, social networking and entertainment mobile apps for Android and iOS.</p>
              </div>
            </div>
            
            <div className="col-12 col-md services-s1-1 m-2 p-4 d-flex flex-column bd-highlight ">
              <div className="mb-auto text-center p-2 bd-highlight">
                <img className='img-fluid mb-4' width={200} src={services_s1_3} alt="" />
              </div>
              <div className="p-2 bd-highlight">
                <h5 className='justify'>Web Development</h5>
              </div>
              <div className="p-2 bd-highlight">
                <p className='justify'>We offer unmatched eCommerce services to our users that help businesses expand & deliver value to their customers.</p>
              </div>
            </div>
            </div>
          </div>  
        </div>
      </div>
        
         {/* ///////  Section 2  //// */}

      <div className='services-s2'>
        <div className='row'>
          <h3 className='mt-4'>What We Offer</h3>
          <div className='row d-flex justify-content-center'>
            <div className='col-11 col-md-7 mt-2'>
             <p className='text-center'>Our team is trained to solve problems and provide innovative solutions tailored carefully to meet client needs.</p>
            </div> 
          </div>
        </div>
        <div className='row mt-4 p-4 d-flex justify-content-center'>
          <div className='col-11 col-md-10'>
            <div className='row'>
            <div className="col-12 col-md services-s2-1 m-2 p-4 d-flex justify-content-center flex-column bd-highlight ">
              <div className="mb-auto text-center p-2 bd-highlight">
                <img className='img-fluid mb-4' width={200} src={services_s2_1} alt="" />
              </div>
              <div className="p-2 bd-highlight">
                <h5 className='justify'>UI/UX Design</h5>
              </div>
              <div className="p-2 bd-highlight">
                <p className='justify'>Our bunch of professional designers and developers assists you in building successful and quality products.</p>
              </div>
            </div>

            <div className="col-12 col-md services-s2-1 m-2 p-4 d-flex justify-content-center flex-column bd-highlight ">
              <div className="mb-auto text-center p-2 bd-highlight">
                <img className='img-fluid mb-4' width={200} src={services_s2_2} alt="" />
              </div>
              <div className="p-2 bd-highlight">
                <h5 className='justify'>Q/A & Testing</h5>
              </div>
              <div className="p-2 bd-highlight">
                <p className='justify'>Our enthusiastic squad of well equipped personals helps you build reliable products by offering Performance and Security Testing, Mobile and Manual Testing.</p>
              </div>
            </div>
            
            <div className="col-12 col-md services-s2-1 m-2 p-4 d-flex justify-content-center flex-column bd-highlight ">
              <div className="mb-auto text-center p-2 bd-highlight">
                <img className='img-fluid mb-4' width={200} src={services_s2_3} alt="" />
              </div>
              <div className="p-2 bd-highlight">
                <h5 className='justify'>Architecture Solution</h5>
              </div>
              <div className="p-2 bd-highlight">
                <p className='justify'>Our richly experienced team will provide you with the best possible back-end and front-end architect solution for your business requirements.</p>
              </div>
            </div>
            </div>
          </div>  
        </div>

        <div className='row mt-4 p-4 d-flex justify-content-center'>
          <div className='col-11 col-md-10'>
            <div className='row'>
            <div className="col-12 col-md services-s2-2 m-2 p-4 d-flex flex-column bd-highlight ">
              <div className="mb-auto text-center p-2 bd-highlight">
                <img className='img-fluid mb-4' width={200} src={services_s2_4} alt="" />
              </div>
              <div className="p-2 bd-highlight">
                <h5 className='justify'>Web Development</h5>
              </div>
              <div className="p-2 bd-highlight">
                <p className='justify'>Having been into the business for over a decade, We love to convert your ideas into reality & full filling your needs by offering responsive .</p>
              </div>
            </div>
            <div className="col-12 col-md services-s2-2 m-2 p-4 d-flex flex-column bd-highlight ">
              <div className="mb-auto text-center p-2 bd-highlight">
                <img className='img-fluid mb-4' width={200} src={services_s2_5} alt="" />
              </div>
              <div className="p-2 bd-highlight">
                <h5 className='justify'>Sales & Marketing</h5>
              </div>
              <div className="p-2 bd-highlight">
                <p className='justify'>Digital Marketing, Marketing Analysis, Marketing Coordination, Designing Marketing Material, Sales Development etc.</p>
              </div>
            </div>
            <div className="col-12 col-md services-s2-2 m-2 p-4 d-flex flex-column bd-highlight ">
              <div className="mb-auto text-center p-2 bd-highlight">
                <img className='img-fluid mb-4' width={200} src={services_s2_6} alt="" />
              </div>
              <div className="p-2 bd-highlight">
                <h5 className='justify'>Business Analysts</h5>
              </div>
              <div className="p-2 bd-highlight">
                <p className='justify'>We offer best practices of fulfilling all your business needs by providing through analysis of your requirement and coming up with the best solution.</p>
              </div>
            </div>
            </div>
          </div>  
        </div>
      </div>

         {/* ///////  Section 3  //// */}

      <div className='services-s3 '>
        <div className='row'>
          <h3 className='mt-4'>Emerging Fields</h3>
          <div className='row d-flex justify-content-center'>
            <div className='col-11 col-md-7 mt-2'>
             <p className='text-center'>Our team is trained to solve problems and provide innovative solutions tailored carefully to meet client needs.</p>
            </div> 
          </div>
        </div>
        <div className='row mt-4 p-4 d-flex justify-content-center'>
          <div className='col-11 col-md-10'>
            <div className='row'>
            <div className="col-12 col-md services-s3-1 m-2 p-4 d-flex flex-column bd-highlight ">
              <div className="mb-auto text-center p-2 bd-highlight">
                <img className='img-fluid mb-4' width={200} src={services_s3_1} alt="" />
              </div>
              <div className="p-2 bd-highlight">
                <h5 className='justify'>Machine Learning & AI</h5>
              </div>
              <div className="p-2 bd-highlight">
                <p className='justify'>With the advancement in technology, We set our goals by training machines to get better at a task without explicit programming</p>
              </div>
            </div>

            <div className="col-12 col-md services-s3-1 m-2 p-4 d-flex flex-column bd-highlight ">
              <div className="mb-auto text-center p-2 bd-highlight">
                <img className='img-fluid mb-4' width={200} src={services_s3_2} alt="" />
              </div>
              <div className="p-2 bd-highlight">
                <h5 className='justify'>Internet of Things</h5>
              </div>
              <div className="p-2 bd-highlight">
                <p className='justify'>Global infrastructure for the information society, enabling advanced services by interconnecting physical and virtual devices.</p>
              </div>
            </div>
            
            <div className="col-12 col-md services-s3-1 m-2 p-4 d-flex flex-column bd-highlight ">
              <div className="mb-auto text-center p-2 bd-highlight">
                <img className='img-fluid mb-4' width={200} src={services_s3_3} alt="" />
              </div>
              <div className="p-2 bd-highlight">
                <h5 className='justify'>Block Chain Technique</h5>
              </div>
              <div className="p-2 bd-highlight">
                <p className='justify'>Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system.</p>
              </div>
            </div>
            </div>
          </div>  
        </div>
      </div>
    </>
  )
}
export default Services