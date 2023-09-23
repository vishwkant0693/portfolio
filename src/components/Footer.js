import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = (props) => {
  const style = {
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    backgroundColor: props.mode === "light" ? "white" : "#013A63",
  }
  return (
    <>
      <div className="card text-center text-emphasis-info" >
        <div className="card-body" style={{
        backgroundColor: props.mode === "light" ? "white" : "#013A63",
        color: props.mode === "light" ? "black" : "white"}} >
          <div>
            <a href="#home" className="list-group-item list-group-item-action p-3" style={style}><img src="img/up.png" className='mx-2' style={{ width: "20px", height: "20px" }} alt="" />Back to Top</a>
          </div>
          <a className="navbar-brand">
            <img src="img/Portfolio.png" alt="Bootstrap" width="200" height="26" />
          </a>
          <p className="mt-2 card-text">
            <p style={style}>Full Stack Developer</p>
            <GitHubIcon className='mx-2' />
            <InstagramIcon className='mx-2' />
            <LinkedInIcon className='mx-2' />
          </p>
        </div>
        <div className="card-footer text-body-secondary" style={style}>
          <div style={{
        backgroundColor: props.mode === "light" ? "white" : "#013A63",
        color: props.mode === "light" ? "black" : "white"}}>
          &#169; 2023 Designed by : Vishwkant
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer