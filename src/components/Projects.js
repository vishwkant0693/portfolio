import React from 'react'

const Projects = (props) => {
    const style = {backgroundColor:  props.mode === "light"?"white":"#013A63",color: props.mode === "light" ? "black" : "white"}
    return (
        <>
            <div className="p-3 mb-2 container border border-secondary rounded mt-5" style={{ fontFamily: "'Poppins', sans-serif",color: props.mode === "light" ? "black" : "white" }}>
                <h2 className='mx-2 my-2 mb-4'>Projects</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapse" aria-expanded="true" aria-controls="collapse">
                                Wallpaper App using ReactJs
                            </button>
                        </h2>
                        <div id="collapse" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body"  style={style}>
                                <strong>For trendy wallpapers.</strong> A React app for trendy and fresh high resolution wallpapers
                                to make your screens fabulous,there are multiple categories of wallpapers like Anime, Bikes, Cars etc. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                NewsApp in ReactJS using API
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body"  style={style}>
                                <strong>App for dialy news updates.</strong> For daily news updates use this react app with simple and
                                minimal user interface to switch between multiple sections of news to stay updated. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                CRUD Operations ReactJS
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body"  style={style}>
                                <strong>CRUD stands for Create, Read, Update, and Delete.</strong>  In
                                ReactJS everything is aligned in a form of a component and
                                every component has its own way and feature to do so.
                                In this project, we use JSON-server or Axios for performing
                                the CRUD operation.

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                CRUD Operations Django
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={style}>
                                <strong>CRUD stands for Create, Read, Update, and Delete.</strong> Django is a Python-based web framework which allows you to
                                create web application. Django is based on MVT "Model View
                                Template" architecture and revolves around CRUD performing
                                Create, Retrieve, Update and Delete operations on a table in a
                                database.

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Calculator using JavaScript
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={style}>
                                <strong>Calculator for basic calculations : -</strong> JavaScript Calculator is used to perform mathematical operations like – Addition, Subtraction, Multiplication, Division, etc.
                                HTML, CSS, and JavaScript are used to design the JavaScript Calculator.
                                 HTML is used to design the basic structure of the calculator. 
                                 CSS styles are used to apply styles on the calculator and JavaScript is used to add the calculation 
                                 functionality. Also, Math.js is used to evaluate the calculations.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                2D CNC Plotter
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={style}>
                                <strong>Major project b.tech (Mechatronics) : -</strong> A CNC plotter machine is a 3D controlled 2D plotting machine
                                which uses a pen to draw text or image on any given solid
                                surface. The 2D plotter is designed to recording and plotting
                                two dimensional data on a rectangular coordinate system.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                Sunflower panel
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={style}>
                                <strong>Minor project b.tech (Mechatronics) : -</strong> Arduino based sunflower panel using LDRs & servo motors.
                                The sunflower panel is
                                designed to follow the sun movement so that maximum light
                                intensity hits on the solar
                                panel, thus increasing the power generation capacity through
                                out the day.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects