import React, { useContext } from 'react';
import './ExploreCategories.css';
import { StoreContext } from '../../Context/StoreContext'; 

const ExploreCategories = ({ category, setCategory }) => {
    const { category_list } = useContext(StoreContext); 
    
    return (
        <div className='explore-categories' id='explore-categories'>
            <h1>Explore our Course Catalog</h1>
            <p className='explore-categories-text'>Choose from a diverse catalog featuring a delectable array of courses. Our mission is to satisfy your curiosity and elevate your career, one skill at a time.</p>
            <div className="explore-categories-list">
                {category_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.category_name ? "All" : item.category_name)} key={index} className='explore-categories-list-item'>
                            <img src={item.category_image} className={category === item.category_name ? "active" : ""} alt={item.category_name} />
                            <p>{item.category_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr />
        </div>
    );
};

export default ExploreCategories;