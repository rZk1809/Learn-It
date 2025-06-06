import React, { useContext } from 'react'
import './CourseItem.css' 
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const CourseItem = ({ _id, name, price, description, image }) => {

    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='course-item'> {}
            <div className='course-item-img-container'>
                <img className='course-item-image' src={image} alt={name} />
                {!cartItems[_id]
                    ? <img className='add' onClick={() => addToCart(_id)} src={assets.add_icon_white} alt="Add to cart" />
                    : <div className="course-item-counter">
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(_id)} alt="Remove from cart" />
                        <p>{cartItems[_id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(_id)} alt="Add one more" />
                    </div>
                }
            </div>
            <div className="course-item-info">
                <div className="course-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="course-item-desc">{description}</p>
                <p className="course-item-price">₹{price}</p>
            </div>
        </div>
    )
}

export default CourseItem