import React from 'react'
import ScrollToSection from './scroll'

const Header = (props) => {
  const style = {
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    fontSize: "16px"
  }
  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top p-1 mb-1 text-${props.color} `} style={{ fontFamily: "'Poppins', sans-serif", width: "100%", backgroundColor: props.mode === "light" ? "white" : "#0B0B45"  }} id='navbar'>
        <div className="container-fluid d-flex justify-content-between " >

          <div className='one'>
            <img src="img/Portfolio.png" alt="Bootstrap" width="180" height="24" />
          </div>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
          <div style={style} >
            <ul className="navbar nav nav-underline collapse navbar-collapse" id="navbarNavAltMarkup">
              
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#qualification">Qualification</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#get-in-touch">Get in touch</a>
              </li>
              <li>
                <div className="two">
                  <div className="form-check form-switch r-0 two">
                    <input className='form-check-input' type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.color} Mode</label>
                  </div>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      <ScrollToSection />
    </>
  )
}

export default Header