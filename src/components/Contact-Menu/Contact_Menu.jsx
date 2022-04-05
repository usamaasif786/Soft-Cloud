import React from 'react';
import about_s5 from "../Images/about_s5.png";
import "../CSS/component.css"
const Contact_Menu = () => {
  return (
    <>
      <div className='section-6 row p-4 mt-4 d-flex justify-content-center '>
        <div className='col-10'>
          <div className='row d-flex justify-content-between'>
            <div className='col-12 col-md-5 mt-4 section-6-2'>
              <h4 className='mb-4'>Contact Us</h4>
              <p>Would you like to start a project with us? We are just one click away from hearing you, Do not wait </p>
              <p>Email: <span className='font-weight-bold'>softkloud@gmail.com</span></p>
              <p className='mb-4'>Linkedin: <span className='font-weight-bold'>Linkedin.com/company/softkloud</span></p>
              <img className='img-fluid d-none d-md-block' src={about_s5} alt="" />
            
            </div>
            <div className='col-12 col-md-6 mt-4 section-6-1'>
              <h4 className='mb-4'>Submit Your Request</h4>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>
              <input type="email" className="form-control mt-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email"/>
              <textarea className='mt-4' name="message" placeholder="Your message"></textarea>
              <button className='btn btn-danger mt-4 mb-4 p-3'>SUBMIT REQUEST</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Contact_Menu
