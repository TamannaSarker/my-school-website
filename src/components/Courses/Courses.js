import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import './Courses.css'
import CourseData from '../CourseData/CourseData';
import Cart from '../Cart/Cart';






const Courses = () => {
    
   
    const [course, setcourse] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course) =>{
        const newCart = [...cart, course]
        setCart(newCart);

    }
    return (
        <div className="courses-container">
           <div className="course-container">
                
               {
                 course.map(curs => <CourseData
                    handleAddCourse = {handleAddCourse}
                    course={curs}
                    ></CourseData>)
               }
                
           </div>
           <div className="cart-container">
            <Cart cart={cart}></Cart>
           
           </div>

           
        </div>
    );
};

export default Courses;