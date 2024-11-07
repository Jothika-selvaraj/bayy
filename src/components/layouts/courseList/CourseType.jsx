import React from 'react';
import { Link } from 'react-router-dom';
import InstructorData from '../../../data/instructor/InstructorData.json';
import { slugify } from '../../../utils/index';

const CourseType = ({ data, classes }) => {
    const indexOfInstructor = InstructorData.findIndex( function( instructor ) {
        return slugify( instructor.name ) === slugify( data.instructor );
    } );
    const instructorThumb = InstructorData[indexOfInstructor].image;

    const imageUrl = `${process.env.PUBLIC_URL}/assets/images/course/course-01/${data.image}`;

    const containerStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        minHeight: '250px',
      };

    return (
        <div className={`single-course style-2 bg-shade border-0  ${ classes ? classes : '' }`}>
            <div className="row g-0 align-items-center">
                <div className="col-xl-5">
                    <div className="course-thumb" style={containerStyle}>
                        <span className="category">{data.categories.slice(0, 1)}</span>
                    </div>
                </div>
                <div className="col-xl-7">
                    <div className="course-content py-4 pt-xl-0">
                        <div className="course-price">
                            {
                                data.price === '0' ?
                                    <div className="price current-price">Free</div>
                                :
                                    <div className="price current-price">${data.price}</div>
                            }
                            { 
                                data.oldPrice && <div className="price old-price ">${data.oldPrice}</div> 
                            }
                        </div>
                        <h3 className="course-title mb-40"> <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`}>{data.title}</Link> </h3>
                        <div className="course-meta d-flex align-items-center">
                            {/* <div className="author">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/instructor/${instructorThumb}`} alt="" className="img-fluid"/>
                                <a href="/">{data.instructor}</a>
                            </div> */}
                            <span className="students">{data.student} </span>
                        </div>
                        <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`} className="btn btn-main-outline btn-radius btn-sm">Learn More<i className="fa fa-long-arrow-right"></i></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseType;