import React from 'react'
const Footer = (props) => {
  const style = {
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    backgroundColor: props.mode === "light" ? "white" : "#013A63",
  }
  return (
    <>
      <div className="card text-center text-emphasis-info" >

        <div className="card-footer text-body-secondary" style={style}>
          <div style={{
            backgroundColor: props.mode === "light" ? "white" : "#013A63",
            color: props.mode === "light" ? "black" : "white"
          }}>
            &#169; 2023 Designed by : Vishwkant
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer