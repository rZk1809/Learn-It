import React from 'react';
import './Mycourses.css';
import { assets } from '../../assets/assets'; 

const MyCourses = () => {
  return (
    <div className='my-courses'>
      <h2>My Enrolled Courses</h2>
      <div className="container">
             <div className='placeholder-content'>
          <img src={assets.cart_icon} alt="Courses Icon" />
          <p>Your enrolled courses will appear here after you check out.</p>
          <p>For now, this page is just a placeholder.</p>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;