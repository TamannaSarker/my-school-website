import React from 'react';
import './CourseData.css';


const courseData = (props) => {
    const course = props.course;
    const {Name, Fee, ApplicationDay, Start, img, phone} = props.course;
    return (
        <div className="course">
           <div className="images">
               <img src={img} alt=""/>
           </div> 
           <div  className="course-name">
                <h4>{Name}</h4>
                <br/>
                <p><small> Course Fee: ${Fee}</small></p>
                <p><small> Last Application Day :{ApplicationDay}</small></p>
                <p><small> Course Start : {Start}</small></p>
                <p><small> Phone Number : {phone} </small></p>
                <button
                   className="main-button"
                   onClick={ () => props.handleAddCourse(course)}
                 >Enroll Now</button>
                 
           </div>
            
        </div>
    );
};

export default courseData;