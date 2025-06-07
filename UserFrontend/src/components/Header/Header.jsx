import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'; 

const Header = () => {
    return (
        <div className='header' id='header'>
            <div className='header-contents'>
                <h2>Unlock Your Potential, One Course at a Time</h2>
                <p>Explore thousands of expert-led online courses on Learn-It. Master job-ready skills in technology, business, and the arts. Start your learning journey today!</p>
                <Link to="/explore-categories"><button>View Courses</button></Link>
            </div>
        </div>
    )
}

export default Header