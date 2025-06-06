import React from 'react'
import {assets} from '../../assets/assets'
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <img className="logo" src={assets.logo} alt="Logo" />
        <ul className="navbar-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/orders">Courses</a></li>
            <li><a href="/profile">Contact Us</a></li>
        </ul>
        <div className="navbar-right">
            <div className="navbar-cart-icon">
                <img src={assets.parcel_icon} alt="Cart Icon" />
                <div className="dot"></div>
            </div>
            <button>Sign in</button>
        </div>
      </div>
  )
}

export default Navbar
