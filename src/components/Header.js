import React from 'react'

const Header = (props) => {
  return (
    <>
      <nav className={`navbar sticky-top p-3 mb-2 bg-${props.mode} text-${props.color} `} style={{fontFamily: "'Poppins', sans-serif"}}>
        <div className="container d-flex justify-content-between " id='navbar'>
            <div className='one'>
              <img src="img/Portfolio.png" alt="Bootstrap" width="200" height="28" />
            </div>
            <div className="two">
              <div className="form-check form-switch r-0 two">
                <input className='form-check-input' type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" for="flexSwitchCheckDefault">Enable {props.color} Mode</label>
              </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Header