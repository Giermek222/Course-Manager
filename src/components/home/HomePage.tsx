import React from "react"
import {Link} from "react-router-dom"
const HomePage = () => {
    return (
        <div className="container-fluid bg-light text-dark p-5">
            <div className="container bg-light p-5">
                <h1 className="display-4 fw-bold">Pluralsight Administration</h1>
                <p>React, Redux and React Router for ultra-responsive web apps</p>
                <Link to='/About/AboutPage'  className='btn-primary btm-lg'>
                    Learn more
                </Link>
            </div>
        </div>

        
    )
}
export default HomePage

