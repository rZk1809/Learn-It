import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className="logo" src={assets.footerlogo} alt="Learn-It Logo" />
                    <p>Welcome to Learn-It, the premier online learning platform designed to empower your ambition. Discover thousands of expert-led courses and unlock your full potential.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.twitter_icon} alt="Twitter" />
                        <a href='https://www.linkedin.com/in/rohith-ganesh-kanchi/'><img src={assets.linkedin_icon} alt="LinkedIn" /></a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <a href='#header'><li>Home</li></a>
                        <a href="#header"><li>About us</li></a>
                        <li>Help Center</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>+91 7305636052</li>
                        <li>contact@learnit.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 © LearnIt.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer