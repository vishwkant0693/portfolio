import React from 'react'

const Experience = (props) => {
  return (
    <>
      <div className='p-3 mb-3 border border-danger mt-5 rounded' style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: props.mode === "light" ? "white" : "#014F86",
        color: props.mode === "light" ? "black" : "white"
      }} >
        <div>
          <h3 className='mb-3'>Experience</h3>
        </div>
        <p className='border border-danger rounded my-1' style={{ fontFamily: "'Poppins', sans-serif", textAlign: "center",backgroundColor: props.mode === "light" ? "white" : "#014F86",color: props.mode === "light" ? "black" : "white" }}>
          Fresher
          <br />
          No Experience Yet
        </p>
      </div>
    </>
  )
}

export default Experience