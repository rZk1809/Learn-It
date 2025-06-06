import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <div className='navbar'>
            <Link to='/'><img className='logo' src={assets.logo} alt="Learn-It Logo" /></Link>
            <ul className="navbar-menu">
                <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
                <a href='#explore-categories' onClick={() => setMenu("categories")} className={`${menu === "categories" ? "active" : ""}`}>Categories</a>
                <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact us</a>
            </ul>
            <div className="navbar-right">
                <Link to='/cart' className='navbar-search-icon'>
                    <img src={assets.cart_icon} alt="Cart" />
                    <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
                </Link>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    )
}

export default Navbar