import axios from 'axios'
import React, { useState } from 'react'


const Contact = (props) => {
    const [state, setState] = useState({
        fullname: '',
        emailid: '',
        message: ''
    })

    const handle = (event) => {
        // console.log(event.target.value);
        const { name, value } = event.target;
        // console.log(name+" "+value)
        setState({ ...state, [name]: value })
    }

    const postData = (e) => {
        e.preventDefault();
        console.log(state);
        axios.post("http://localhost:3004/data", state)
    }


    return (
        <>
            <div className='p-3 mb-3 border border-secondary mt-5 rounded' style={{
                fontFamily: "'Poppins', sans-serif", backgroundColor: props.mode === "light" ? "white" : "#013A63",
                color: props.mode === "light" ? "black" : "white"
            }} >
                <div>
                    <h3 className='mb-3'>Get In Touch</h3>
                </div>
                <div className='text-center my-3 '>
                    <div className="list-group mb-5">
                        <a href="/" className="list-group-item list-group-item-action list-group-item-primary"><img src="img/email.png" alt="" className='mx-2' style={{ width: "45px", height: "45px" }} />vishwkant0693@gmail.com</a>
                        <a href="https://in.linkedin.com/in/vishw-kant-1855011a4" className="list-group-item list-group-item-action list-group-item-info"><img src="img/linkedin.png" alt="" className='mx-2' style={{ width: "40px", height: "40px" }} />@vishw-kant</a>
                        <a href="https://github.com/vishwkant0693" className="list-group-item list-group-item-action list-group-item-dark"><img src="img/github.png" alt="" className='mx-2' style={{ width: "45px", height: "45px" }} />@vishwkant0693</a>
                        <a href="https://www.instagram.com/vishwkant0693/" className="list-group-item list-group-item-action list-group-item-warning"><img src="img/ig.png" alt="" className='mx-2' style={{ width: "40px", height: "40px" }} />@vishwkant0693</a>
                    </div>
                </div>
                <div style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <form action="" method='post'>
                        <div className="mb-3">
                            <label htmlFor="FormControlInput1" className="form-label">Full Name</label>
                            <input type="fullname" name='fullname' onChange={handle} style={{ backgroundColor: props.mode === "light" ? "white" : "#1560BD", color: props.mode === "light" ? "black" : "white" }} className="form-control" id="FormInput1" placeholder="Full Name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="FormControlInput2" className="form-label">Email address</label>
                            <input type="email" name='emailid' onChange={handle} style={{ backgroundColor: props.mode === "light" ? "white" : "#1560BD", color: props.mode === "light" ? "black" : "white" }} className="form-control" id="FormInput2" placeholder="Email address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" name='message' onChange={handle} style={{ backgroundColor: props.mode === "light" ? "white" : "#1560BD", color: props.mode === "light" ? "black" : "white" }} id="FormMessage" rows="5"></textarea>
                        </div>
                        <div className="d-grid gap-2 mt-4">
                            <button className="btn btn-secondary" onClick={postData} style={{ backgroundColor: props.mode === "light" ? "#6c757d" : "#03045E" }} type="button">Send</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact