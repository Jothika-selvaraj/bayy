import React from 'react';
import { Link } from 'react-router-dom';
import InstructorData from '../../../data/instructor/InstructorData.json';
import { slugify } from '../../../utils/index';

const CourseType = ({ data, classes }) => {
    const indexOfInstructor = InstructorData.findIndex( function( instructor ) {
        return slugify( instructor.name ) === slugify( data.instructor );
    } );
    const instructorThumb = InstructorData[indexOfInstructor].image;

    return (
        <div className={`course-grid course-style-4 bg-white mb-80  ${ classes ? classes : '' }`}>
            <div class="course-header">
                <div class="course-thumb">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/course/course-01/${data.image}`} alt="Course Thumb" class="img-fluid"/>
                </div>
            </div>

            <div className="course-content">
                <div class="course-price">
                    {
                        data.price === '0' ?
                            <div className="price current-price">Free</div>
                        :
                            <div className="price current-price">${data.price}</div>
                    }
                    { 
                        data.oldPrice && <div className="price old-price">${data.oldPrice}</div> 
                    }
                </div>

                <div className="d-flex align-items-center">
                    <div className="author me-3">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/instructor/${instructorThumb}`} alt="" className="img-fluid"/>
                        { data.instructor }
                    </div>
                </div>
                
                <h3 className="course-title"> <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`}>{data.title}</Link></h3>
                <div className="course-meta">
                    <span className="duration"><i className="far fa-user-alt"></i>{data.durationInHour}</span>
                    <span className="lessons"><i className="far fa-play-circle me-2"></i>{data.lesson} Lectures</span>
                </div>
            </div>

        </div>
    )
}
export default CourseType;