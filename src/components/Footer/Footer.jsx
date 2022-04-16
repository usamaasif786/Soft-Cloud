import React from 'react';
import header_logo from '../Images/header-logo.png'

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
               <img className='img-fluid mt-4' style={{width: '150px'}} src={header_logo} alt="" />
                <p className='mt-4'>We Provide ourselves in our ability to deliver our client’s vision. Customer satisfaction is our number one priority. We understand that our work is our expression to the outside world and we make sure that we produce high-quality solutions.</p>
              </div>
              <div className='col-12 col-md-3 col-lg-3 justify'>
                <h2 className='mb-4 mt-4' style={{color: 'rgb(128, 201, 230)'}}>Quick Links</h2>
                <h5><Link className="nav-link p-0" style={{color: 'white'}} to="/">Home</Link></h5>
                <h5><Link className="nav-link p-0" style={{color: 'white'}} to="About">About</Link></h5>
                <h5><Link className="nav-link p-0" style={{color: 'white'}} to="Services">Services</Link></h5>
                <h5><Link className="nav-link p-0" style={{color: 'white'}} to="Contact">Contact</Link></h5>
                {/* <h5><Link className="nav-link p-0" style={{color: 'white'}} to="Booking">Booking</Link></h5> */}
              </div>
              <div className='col-12 col-md-3 col-lg-3 justify'>
                <h2 className='mb-4 mt-4' style={{color: 'rgb(128, 201, 230)'}}>Get In Touch</h2>
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
