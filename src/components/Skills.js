import React from 'react'

const Skills = (props) => {
    const style = { width: "30px", height: "30px", marginRight: "30px" }
    return (
        <>
            <div className='p-3 mb-3 border border-warning mt-5 rounded' style={{
                fontFamily: "'Poppins', sans-serif", backgroundColor: props.mode === "light" ? "white" : "#013A63",
                color: props.mode === "light" ? "black" : "white"
            }}>
                <div>
                    <h3 className='mb-3'>Skills</h3>
                </div>
                <div className="container-fluid">
                    <div className="row my-2">
                        <h6 className='mb-2 bg-warning text-dark rounded p-3 h-35'>
                            <img src="img/py.png" alt="" style={style} />Python
                        </h6>
                        <h6 className='mb-2 bg-warning text-dark rounded  p-3 h-40'>
                            <img src="img/html.png" alt="" style={style} />HTML
                        </h6>
                        <h6 className='mb-2 bg-warning text-dark rounded  p-3 h-40'>
                            <img src="img/css.png" alt="" style={style} />CSS
                        </h6>
                        <h6 className='mb-2 bg-warning text-dark rounded  p-3 h-40'>
                            <img src="img/js.png" alt="" style={style} />JavaScript
                        </h6>
                        <h6 className='mb-2 bg-warning text-dark rounded  p-3 h-40'>
                            <img src="img/mysql.png" alt="" style={style} />MySQL
                        </h6>
                        <h6 className='mb-2 bg-warning text-dark rounded  p-3 h-40'>
                            <img src="img/react.png" alt="" style={style} />ReactJS
                        </h6>
                        <h6 className='mb-2 bg-warning text-dark rounded  p-3 h-40'>
                            <img src="img/dj.png" alt="" style={style} />Django
                        </h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills