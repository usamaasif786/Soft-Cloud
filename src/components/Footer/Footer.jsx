import React from 'react';
import footer_logo from '../Images/footer-logo.jpg'
// var date = new Date();
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "../CSS/component.css"
const Footer = () => {
  return (
    <>
      <footer>
        <div className='row p-4 d-flex justify-content-center'>
          <div className='col-11 mt-4 '>
            <div className='row d-flex justify-content-around'>
              <div className='col-12 col-md-4 justify'>
                {/* <img className='img-fluid mt-4' src={footer_logo} width={200} alt="Footer_Logo" /> */}
                <h1 style={{color: 'white'}}>Soft Kloud</h1>
                <p className='mt-4'>We Provide ourselves in our ability to deliver our client’s vision. Customer satisfaction is our number one priority. We understand that our work is our expression to the outside world and we make sure that we produce high-quality solutions.</p>
              </div>
              <div className='col-12 col-md-2 justify' style={{color: 'white'}}>
                <h2 className='mb-4 mt-4' >Quick Links</h2>
                <h5>
                <Link className="nav-link" style={{color: 'white'}} to="/">Home</Link>
                </h5>
                <h5>About</h5>
                <h5>Services</h5>
                <h5>Contact</h5>
              </div>
              <div className='col-12 col-md-2 justify'>
                <h2 className='mb-4 mt-4'>Get In Touch</h2>
                <h5>Phone: 0301-7144752</h5>
                <h5>softkloud@gmail.com</h5>
                <h5>Address: 1st floor 22, Block H2, Johar Town, Lahore.</h5>
              </div>
            </div>
          </div>  
        </div>
        <div className='p-3' >
          <p className='text-center' style={{fontWeight: 'bold'}}>Copyright © {(new Date()).getFullYear()} SoftKloud</p>
        </div>
      </footer>
    </>
  )
}
export default Footer
