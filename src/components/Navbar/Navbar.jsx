import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa'; 

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState("home");
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { getTotalCartAmount } = useContext(StoreContext);

    const handleLinkClick = (menuName) => {
        setMenu(menuName);
        setMobileMenuOpen(false);
    };

    return (
        <div className='navbar'>
            <div className="navbar-container">
                <Link to='/'><img className='logo' src={assets.logo} alt="Learn-It Logo" /></Link>

                <ul className="navbar-menu-desktop">
                    <li><Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link></li>
                    <li><a href='#explore-categories' onClick={() => setMenu("categories")} className={menu === "categories" ? "active" : ""}>Categories</a></li>
                    <li><a href='#footer' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact us</a></li>
                </ul>

                <div className="navbar-right">
                    <Link to='/cart' className='navbar-cart-icon'>
                        <FaShoppingCart size={22} />
                        <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
                    </Link>
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                </div>
              
            </div>
        </div>
    );
};

export default Navbar;