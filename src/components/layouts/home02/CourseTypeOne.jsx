import React from 'react';
import { Link } from 'react-router-dom';

const CourseTypeOne = ({ data, classes }) => {
    return (
        <div className={`course-item  ${ classes ? classes : '' }`}>
            <div className="course-style-5 bg-white">
                <div class="course-header">
                    <div class="course-thumb">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/course/course-01/${data.image}`} alt="Course Thumb" class="img-fluid"/>
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
                    </div>
                </div>

                <div className="course-content">
                    <div className="course-meta meta-style-1">
                        <span className="lessons"><i className="far fa-play-circle me-2"></i>{data.lesson} Lectures</span>
                        <span className="label">{data.level}</span>
                    </div>
                    <h4> 
                        <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`}>{data.title}</Link>
                    </h4>

                    <div className="course-footer mt-20 d-flex align-items-center justify-content-between">
                        <span className="students"><i className="far fa-user-alt me-2"></i>{data.student} Students</span>
                        <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`} className="rounded-btn">
                            <i className="fa fa-long-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseTypeOne;