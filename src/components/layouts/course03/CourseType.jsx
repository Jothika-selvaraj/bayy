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
        <div className={`course-grid course-style-3  ${ classes ? classes : '' }`}>
            <div class="course-header">
                <div class="course-thumb">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/course/course-01/${data.image}`} alt="Course Thumb" class="img-fluid"/>
                </div>
            </div>

            <div className="course-content">
                <div className="course-meta d-flex justify-content-between mb-20">
                    <span className="category">{data.categories.slice(0, 1)}</span>
                    <span className="label"><i className="fas fa-signal me-2"></i>{data.level}</span>
                </div>

                <h3 className="course-title mb-20"> <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`}>{data.title}</Link> </h3>
            
                <div className="course-meta-info">
                    <div className="d-flex align-items-center">
                        <div className="author me-3">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/instructor/${instructorThumb}`} alt="" className="img-fluid"/>
                            By <a href="/">{data.instructor}</a>
                        </div>
                        <span className="students"><i className="far fa-user-alt me-2"></i>{data.student} Students</span>
                    </div>
                </div>

                <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
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
                    <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`} className="btn btn-main-outline btn-radius btn-sm">Buy Now <i className="fa fa-long-arrow-right"></i></Link>
                </div>
            </div>

        </div>
    )
}
export default CourseType;