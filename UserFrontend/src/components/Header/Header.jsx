import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header' id='header'>
            <div className='header-contents'>
                <h2>Unlock Your Potential, One Course at a Time</h2>
                <p>Explore thousands of expert-led online courses on Learn-It. Master job-ready skills in technology, business, and the arts. Start your learning journey today!</p>
                <a href="#explore-categories">
                    <button>View Courses</button>
                </a>
            </div>
        </div>
    );
};

export default Header;