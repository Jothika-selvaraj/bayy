import React from 'react';
import { Link } from 'react-router-dom';
import InstructorData from '../../../data/instructor/InstructorData.json';
import { slugify } from '../../../utils/index';

const CourseType = ({ data, classes }) => {
    const indexOfInstructor = InstructorData.findIndex( function( instructor ) {
        return slugify( instructor.name ) === slugify( data.instructor );
    } );
    const instructorThumb = InstructorData[indexOfInstructor].image;
    const excerpt = data.excerpt.substring(0, 100) + "...";


    return (
        <div className={`course-grid bg-shadow tooltip-style  ${ classes ? classes : '' }`}>
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
                <div className="rating mb-10">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>

                    <span>{data.rating} ({data.review} reviews)</span>
                </div>

                <h3 className="course-title mb-20"> <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`}>{data.title}</Link>  </h3>

                <div className="course-footer mt-20 d-flex align-items-center justify-content-between ">
                    <span className="duration"><i className="far fa-clock me-2"></i>{data.durationInHour}</span>
                    <span className="students"><i className="far fa-user-alt me-2"></i>{data.student} Students</span>
                    <span className="lessons"><i className="far fa-play-circle me-2"></i>{data.lesson} Lessons</span>
                </div>
            </div>

            <div className="course-hover-content">
                <div class="price">
                    {
                        data.price === '0' ?
                            <div className="price current-price">Free</div>
                        :
                            <div className="price current-price">${data.price}</div>
                    }
                </div>
                <h3 className="course-title mb-20 mt-30"> <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`}>{data.title}</Link>  </h3>
                
                <div className="course-meta d-flex align-items-center mb-20">
                    <div className="author me-4">
                        <img src={`${process.env.PUBLIC_URL}/assets/images/instructor/${instructorThumb}`} alt="" className="img-fluid"/>
                        <a href="/">{data.instructor}</a>
                    </div>
                    <span className="lesson"> <i className="far fa-file-alt"></i> {data.lesson} lessons</span>
                </div>

                <p className="mb-20">{excerpt}</p>
                <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`} className="btn btn-grey btn-sm rounded">Enroll Now <i className="fal fa-angle-right"></i></Link>
            </div>

        </div>
    )
}
export default CourseType;