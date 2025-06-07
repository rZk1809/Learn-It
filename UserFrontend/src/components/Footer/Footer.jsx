import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'; 

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className="logo" src={assets.footerlogo} alt="Learn-It Logo" />
                    <p>Welcome to Learn-It, the premier online learning platform designed to empower your ambition. Discover thousands of expert-led courses and unlock your full potential.</p>
                    <div className="footer-social-icons">
                        <a href="https://facebook.com" target="_blank" >
                            <img src={assets.facebook_icon} alt="Facebook" />
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <img src={assets.twitter_icon} alt="Twitter" />
                        </a>
                        <a href='https://www.linkedin.com/in/rohith-ganesh-kanchi/' target="_blank">
                            <img src={assets.linkedin_icon} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#header">About us</a></li>
                        <li><Link to="/help">Help Center</Link></li>
                        <li><Link to="/privacy">Privacy policy</Link></li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Contact Us</h2>
                    <ul>
                        <li><a href="tel:+917305636052">+91 7305636052</a></li>
                        <li><a href="mailto:contact@learnit.com">rohithganesh.kanchi2023@vitstudent.ac.in</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright {new Date().getFullYear()} © LearnIt.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer;