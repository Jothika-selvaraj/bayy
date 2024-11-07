import React from 'react';
import { Link } from 'react-router-dom';

const CourseType = ({ data, classes }) => {
    // Construct the image URL for the course thumbnail
    const imageUrl = `${process.env.PUBLIC_URL}/assets/images/course/course-01/${data.image}`;

    const containerStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        minHeight: '250px',
    };

    return (
        <div className={`single-course style-2 bg-shade border-0 ${classes ? classes : ''}`}>
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
                                    <div className="price current-price">Free</div> :
                                    <div className="price current-price">${data.price}
                                    </div>
                            }
                            {
                                data.oldPrice && <div className="price old-price ">${data.oldPrice}</div>
                            }
                        </div>
                        <h3 className="course-title mb-40">
                            <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`}>{data.title}</Link>
                        </h3>
                        <div className="course-meta d-flex align-items-center">
                            <span className="students">{data.student} students enrolled</span>
                        </div>
                        <Link to={process.env.PUBLIC_URL + `/course-details/${data.id}`} className="btn btn-main-outline btn-radius btn-sm">
                            Learn More<i className="fa fa-long-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseType;
