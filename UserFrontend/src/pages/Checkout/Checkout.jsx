import React, { useContext } from 'react';
import './Checkout.css';
import { StoreContext } from '../../Context/StoreContext';

const Checkout = () => {
    const { getTotalCartAmount } = useContext(StoreContext);

    return (
        <form className='checkout'>
            <div className="checkout-left">
                <p className="title">Billing Details</p>
                <div className="multi-fields">
                    <input type="text" placeholder='First name' required/>
                    <input type="text" placeholder='Last name' required/>
                </div>
                <input type="email" placeholder='Email address' required/>
                <input type="text" placeholder='Street Address' required/>
                <div className="multi-fields">
                    <input type="text" placeholder='City' required/>
                    <input type="text" placeholder='State' required/>
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Zip code' required/>
                    <input type="text" placeholder='Country' required/>
                </div>
                <input type="text" placeholder='Phone' required/>
            </div>
            <div className="checkout-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details"><p>Subtotal</p><p>₹{getTotalCartAmount()}</p></div>
                        <hr />
                        <div className="cart-total-details"><b>Total</b><b>₹{getTotalCartAmount()}</b></div>
                    </div>
                    <button type='submit'>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    );
};

export default Checkout;