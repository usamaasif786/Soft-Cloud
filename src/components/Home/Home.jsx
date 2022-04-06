import Section_1 from '../Images/section_1.png'
import section_2 from '../Images/section_2.png'
import section_5_1 from '../Images/section_5_1.png'
import section_5_2 from '../Images/section_5_2.png'
import section_6_1 from "../Images/section_6_1.png";
import section_6_2 from "../Images/section_6_2.png";
import "../CSS/component.css"

import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
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
      <header className='home-header'>
        <div className='row d-flex justify-content-center  '>
          <div className='col-12 col-md-9 mt-4 p-2 '>
            <div className='row d-flex align-items-center'>
              <h2 className='col-4 d-flex d-none d-sm-block justify-content-start' to="/">
                <Link className="nav-link" style={{color: 'white'}} to="/">Soft Kloud</Link>
              </h2>
              {(toggleMenu || screenWidth > 576) &&(
              <ul className="col list m-0 p-0 nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link bold active" aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link bold" to="/about">ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link bold" to="/services">SERVICES</Link>
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
              <h1>Committed<br />to be creative</h1>
              <p className='mt-4'>We create beautiful experiences that drive successful businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </header>

          {/* //// Section -1 ///////// */}

      <div className='section-1 row d-flex justify-content-center '>
        <div className='col-9'>
          <div className='row d-flex justify-content-between'>
            <div className='col-12 col-md-5  justify'>
            <h4 className='black'>Why Choose Us?</h4>
            <p className='mt-4 mb-4 '>We are a full-service software house. Our clients ranges from public and private sectors including start-ups. What separates us from others is the flexibility of hiring us as a team of experts or individual developers. From the start, till the end, we have you covered. We provide our clients with successful solutions in UI/UX Design, Web Development and Mobile App development.</p>
            </div>
            <div className='col-5 d-none d-md-block'>
             <img className='img-fluid' src={Section_1} width={300} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      
          {/* //// Section -2 ///////// */}

      <div className='section-2 row d-flex justify-content-center'>
        <div className='col-11 col-md-7 mt-4 mb-4'>
          <h3 className='text-center'>How we do?</h3>
          <p className='mb-4 text-center'>Once we join hands, this is what we will take you through from the start to a deliver product.</p>
          <img className='img-fluid mt-2 mb-4' src={section_2}  alt="Logo" /> 
        </div>
        <div className='row section-2-1 mt-4 mb-4 d-flex justify-content-center'>
          <div className='col-11 col-md-7'>
            <div className='row'>
            <div className='col-12 col-md p-2'> 
              <div className='row'>
                <div className='col section-2-1 section-2-0'>
                  <h4>Meet the user</h4>
                  <ul>
                    <li>User demographics</li>
                    <li>Define user goals</li>
                    <li>Define user challenges</li>
                    <li>Defines metrics</li>
                  </ul>
                </div >
              </div>
            </div>
            <div className='col-12 col-md p-2'> 
              <div className='row'>
                <div className='col section-2-2 section-2-0'>
                <h4>Be the user</h4>
                  <ul>
                    <li>User personas</li>
                    <li>User scenarios</li>
                    <li>User testing</li>
                    <li>User Experience</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md p-2'> 
              <div className='row'>
                <div className='col section-2-3 section-2-0'>
                <h4>Make it simple</h4>
                  <ul>
                    <li>Wire-frames</li>
                    <li>Mood-board</li>
                    <li>Mock-ups</li>
                    <li>Style Guides</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md p-2'> 
              <div className='row'>
                <div className='col section-2-4 section-2-0'>
                <h4>Data don’t lie</h4>
                  <ul>
                    <li>Usability testings</li>
                    <li>Review metrics</li>
                    <li>Track usage</li>
                    <li>Inform next iteration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-12 col-md p-2'> 
              <div className='row'>
                <div className='col section-2-5 section-2-0'>
                <h4>Stick to the design</h4>
                  <ul>
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
      
      <div className='section-4 row d-flex justify-content-center '>
        <div className='col-10 col-md-8 p-2 section-4-1'>
          <div className='row d-flex align-items-center'>
            <div className='col-12 col-md mt-4 mb-4 p-2'>
              <p>Our Company Achievements</p>
            </div>
            <div className='col-12 col-md mt-4 mb-4 p-2'>
              <h2>57</h2>
              <h6>Satisfied Clients</h6>
            </div>
            <div className='col-12 col-md mt-4 mb-4 p-2'>
              <h2>120</h2>
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
      
          {/* //// Section -5 ///////// */}

      <div className='section-5 row d-flex justify-content-center '>
        <div className='col-10 mt-4 mb-4'>
          <h3 className='mb-4 text-center'>Featured Work</h3>
          <div className='row text-center'>
              <div className='col-12 col-md-6'>
                  <img className='img-fluid mt-4 mb-4' src={section_5_1} alt="" />
              </div>
              <div className='col-12 col-md-6'>
                  <img className='img-fluid mt-4 mb-4' src={section_5_2} alt="" />
              </div>
          </div>
        </div>
      </div>

          {/* //// Section -6 ///////// */}

      <div className='section-6 row p-4 mt-4 d-flex justify-content-center '>
        <div className='col-10'>
          <div className='row d-flex justify-content-between'>
            <div className='col-12 col-md-6 section-6-1'>
              <h4>Contact Us</h4>
              <input type="text" className="form-control mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
              <input type="email" className="form-control mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>
              <input  type="number" className="form-control mt-4" id="exampleInputEmail1" placeholder="Your Phone Number"/>
              <textarea className='mt-4' name="message" placeholder="Your message"></textarea>
              <button className='btn btn-danger mt-4 mb-4 p-3'>SUBMIT REQUEST</button>
            </div>
            <div className='col-4 section-6-2'>
              <h4 className='d-none d-md-block'>Request a Quote</h4>
              <p className='d-none d-md-block'>Would you like to start a project with us? We are just one click away from hearing you, Do not wait </p>
              <p className='mt-4 mb-4 d-none d-md-block'>Email: <span className='font-weight-bold'>info@pikessoft.com</span></p>
              <h5>Reviewed on</h5>
              <img className='img-fluid mt-4' width={150} src={section_6_1} alt="" /> <br />
              <img className='img-fluid mt-4' width={100} src={section_6_2} alt="" />
            </div>
          </div>
        </div>
      </div>

          {/* //// Section -7 ///////// */}
      <div  className='section-7'>
        <h3 className='text-center'>Success Stories</h3>
        <div className='row d-flex justify-content-center'>
          <div className='col-7'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner text-center">
                <div className="carousel-item active">
                  <p>"I was referred to Pikes Soft by a Series C company and I have been truly impressed. They <br />  recruit the top university graduates which is on display with their clear communication and <br /> their high quality code."</p>
                  <h6>Nick Piscotty - CEO TruePartner</h6>
                </div>
                <div className="carousel-item">
                  <p>"I was referred to Pikes Soft by a Series C company and I have been truly impressed. They <br />  recruit the top university graduates which is on display with their clear communication and <br /> their high quality code."</p>
                  <h6>Nick Piscotty - CEO TruePartner</h6>
                </div>
                <div className="carousel-item">
                  <p>"I was referred to Pikes Soft by a Series C company and I have been truly impressed. They <br />  recruit the top university graduates which is on display with their clear communication and <br /> their high quality code."</p>
                  <h6>Nick Piscotty - CEO TruePartner</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </>
  )
}
export default Home
