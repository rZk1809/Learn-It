import React, { useContext } from 'react';
import './CourseDisplay.css';
import CourseItem from '../CourseItem/CourseItem';
import { StoreContext } from '../../Context/StoreContext';

const CourseDisplay = ({ category }) => {
    const { course_list } = useContext(StoreContext);

    return (
        <div className='course-display' id='course-display'>
            <h2>Top Courses in "{category}"</h2>
            <div className='course-display-list'>
                {course_list.map((item) => {
                    if (category === "All" || category === item.category) {
                        return <CourseItem key={item._id} _id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default CourseDisplay;