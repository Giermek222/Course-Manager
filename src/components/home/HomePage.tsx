import React from "react"
import {Link} from "react-router-dom"
const HomePage = () => {
    return (
        <div>
            <h1>Pluralsight Administration</h1>
            <p>React, Redux and React Router for ultra-responsive web apps</p>
            <Link to='/About/AboutPage' className='btn-primary btm-lg'>
                Learn more
            </Link>
        </div>
    )
}
export default HomePage