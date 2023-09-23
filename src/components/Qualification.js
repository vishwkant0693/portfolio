import React from 'react'

const Qualification = (props) => {
  const style = {
    marginRight:"10px",
    paddingLeft:"20px",
    paddingTop:"15px",
    backgroundColor:  props.mode === "light"?"white":"#013A63",
    color: props.mode === "light" ? "black" : "white"
  }
  
  return (
    <>
      <div className="p-3 mb-2 container-fluid mt-5 border border-success rounded" style={{ fontFamily: "'Poppins', sans-serif" }} >
        <div className="row">
          <h3 className='mb-3' style={{color: props.mode === "light" ? "black" : "white"}}>Qualification</h3>
          <div className="col-md-12 border border-success rounded my-1" style={style} >
            <h4 className='d-flex justify-content-between' >
              Certification
              <p style={{fontSize:"20px"}}>2022-2023</p>
            </h4>
            <h6>
              Python Full Stack
            </h6>
            <p>
              Ducat Pitampura
            </p>
          </div>
          <div className="col-md-12 border border-success rounded my-1" style={style}>
            <h4 className='d-flex justify-content-between'>
              Bachelor of Technology [Mechatronics]
              <p style={{fontSize:"20px"}}>2018-2022</p>
            </h4>
            <h6>
              Delhi Institute of Tool Engineering Currently ( DSEU ) Okhla Phase - II, Delhi 
            </h6>
            <p>
            Guru Gobind Singh Indraprastha University, Delhi
            </p>
          </div>
          <div className="col-md-12 border border-success rounded my-1" style={style}>
            <h4 className='d-flex justify-content-between'>
              Class XII
              <p style={{fontSize:"20px"}}>2018</p>
            </h4>
            <h6>
              Central Board of Secondary Education
            </h6>
            <p>
              Sarvodaya Bal Vidyalaya Kalyanpuri, New Delhi
            </p>
          </div>
          <div className="col-md-12 border border-success rounded my-1" style={style}>
            <h4 className='d-flex justify-content-between'>
              Class X
              <p style={{fontSize:"20px"}}>2015</p>
            </h4>
            <h6>
              Central Board of Secondary Education
            </h6>
            <p>
              Rajkiya Sarvodaya Bal Vidyalaya Kondli, New Delhi
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Qualification