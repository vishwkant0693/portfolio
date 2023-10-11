import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import About from './About';
import Qualification from './Qualification';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import ScrollToSection from './scroll';

const Home = (props) => {
  const style = {
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
  }

  return (
    <>
      <div className="container mb-3" id='home' style={{marginTop:"80px"}}>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 col-12 border border-info rounded ">
            <div className="container-fluid mt-3">
              <div className="row">
                <div className="col-md-8" >
                  <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>Hi,<br />I'm <span style={{ color: "#808000" }}>Vishwkant</span><br /> Full Stack Developer</h1>
                  <br />
                  <div style={{ color: props.mode === "light" ? "black" : "white" }}>
                    <GitHubIcon className='mx-2' href="https://github.com/vishwkant0693" />
                    <InstagramIcon className='mx-2' href="https://www.instagram.com/vishwkant0693/" />
                    <LinkedInIcon className='mx-2' href="https://in.linkedin.com/in/vishw-kant-1855011a4" />
                    <button type="button" className="btn btn-outline-info mx-2 fw-bold" style={style}>Download Resume</button>
                  </div>
                </div>
                <div className="col-md-4" style={{margin:"auto"}}>
                  <img src="img/profile-pic.png" alt="" style={{height:"19ch"}}  />
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "20px", marginBottom: "60px", color: props.mode === "light" ? "black" : "white" }}>

              <p className='mt-4' style={{ fontFamily: "'Poppins', sans-serif", width: "96%" }}>As a full-stack developer, I bring fresh energy and a hunger for knowledge to every project.
                I see code as a canvas for creativity, a tool to shape the digital world.
                I'm excited to collaborate, learn, and build, transforming ideas into functional and beautiful solutions.</p>
            </div>
            <div id='about'>
              <About mode={props.mode} />
            </div>
            <div id='qualification'>
              <Qualification mode={props.mode} />
            </div>
            <div id='projects'>
              <Projects mode={props.mode} />
            </div>
            <div id='skills'>
              <Skills mode={props.mode} />
            </div>
            <div id='experience'>
              <Experience mode={props.mode} />
            </div>
            <div id='get-in-touch'>
              <Contact mode={props.mode}/>
            </div>
            <div>
              <div className="card-body" style={{
                backgroundColor: props.mode === "light" ? "white" : "#013A63",
                color: props.mode === "light" ? "black" : "white"
              }} >
                <div>
                <ScrollToSection/>
                  <a href="#home" className="back-link list-group-item list-group-item-action p-3" style={style}><img src="img/up.png" className='mx-2' style={{ width: "20px", height: "20px" }} alt="" />Back to Top</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </>
  )
}

export default Home