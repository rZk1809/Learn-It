import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, course_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
    const navigate = useNavigate();
    const totalAmount = getTotalCartAmount();

    return (
        <div className='cart'>
            {totalAmount > 0 ? (
                <>
                    <div className='cart-header'>
                        <h1>Your Course Cart</h1>
                        <p>Review the courses you've selected and proceed to checkout.</p>
                    </div>
                    <div className="cart-items">
                        <div className="cart-items-title">
                            <p>Item</p>
                            <p>Title</p>
                            <p>Price</p>
                            <p>Quantity</p>
                            <p>Total</p>
                            <p>Remove</p>
                        </div>
                        {course_list.map((item) => {
                            if (cartItems[item._id] > 0) {
                                return (
                                    <div key={item._id} className='cart-items-row'>
                                        <div className="cart-items-item">
                                            <img src={item.image} alt={item.name} />
                                            <span>{item.name}</span>
                                        </div>
                                        <p>₹{item.price}</p>
                                        <p className="cart-quantity">{cartItems[item._id]}</p> 
                                        <p>₹{item.price * cartItems[item._id]}</p> 
                                        <p className='cart-items-remove-icon' onClick={() => removeFromCart(item._id)}>✕</p>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                    <div className="cart-bottom">
                        <div className="cart-total">
                            <h2>Cart Totals</h2>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>₹{totalAmount}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>₹{totalAmount}</b>
                            </div>
                            <button onClick={() => navigate('/checkout')}>PROCEED TO CHECKOUT</button>
                        </div>
                        <div className="cart-promocode">
                            <p>Have a promo code?</p>
                            <div className='cart-promocode-input'>
                                <input type="text" placeholder='Enter promo code' />
                                <button>Apply</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="cart-empty">
                    <h2>Your cart is empty.</h2>
                    <p>Looks like you haven't added any courses yet. Explore our catalog to find a course that's right for you!</p>
                    <button onClick={() => navigate('/')}>Browse Courses</button>
                </div>
            )}
        </div>
    );
};

export default Cart;