//////////////    Non Useable File ///////////////////

// import React from 'react'
import '../CSS/component.css'
import React, {useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header() {
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
      <header>
        <div className='row d-flex justify-content-center  '>
          <div className='col-9 mt-4 p-2 align-items-center'>
            <div className='row'>
              <h2 className='col-4 d-flex d-none d-sm-block justify-content-start'>Pike Soft</h2>
              {(toggleMenu || screenWidth > 576) &&(
              <ul className="col list m-0 p-0 nav justify-content-end">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link " to="/about">ABOUT</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link " to="/services">SERVICES</Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-link " to="/contact">CONTACT</Link>
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
            <div className='row'>
              <div className='col-9 mt-4 col-md-5 justify'>
              <h1>Bringing Ideas <br />to Reality</h1>
              <p className='mt-4'>We create beautiful experiences that drive successful businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}