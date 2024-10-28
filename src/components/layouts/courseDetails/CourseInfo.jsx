import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';


const CourseInfo = ( { data }) => {
    const [toggler, setToggler] = useState( false );
    return (

        <div className="course-sidebar course-sidebar-2 mt-5 mt-lg-0">
            <div className="course-widget course-details-info">
                <div className="video-area">
                    <div className="thumbnail video-popup-wrapper course-thumbnail">
                        <img className="radius-small w-100" src={`${process.env.PUBLIC_URL}/assets/images/course/video-bg/${data.image}`} alt="Course Video Thumb" />
               
                        <button onClick={ () => setToggler( ! toggler ) } className="video-play-btn position-to-top video-popup-activation">
                            <span className="play-icon"></span>
                        </button>
                        <FsLightbox toggler={ toggler } sources={ data.videoLink } />
                    </div>
                </div>
               
                <div className="price-header">
                    <h2 className="course-price">{ data.price === '0' ? 'Free' : data.price } <span>{data.oldPrice}</span></h2>
                    <span className="course-price-badge onsale">39% off</span>
                </div>

                <ul className="course-sidebar-list">
                    { data.level &&
                        <li>
                            <div className="d-flex justify-content-between align-items-center">
                                <span><i className="ri-bar-chart-2-line"></i>Level</span>
                                {data.level}
                            </div>
                        </li>
                    }

                    { data.lesson &&
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="ri-draft-line"></i>Lectures</span>
                            {data.lesson}
                        </div>
                    </li>
                    }

                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="ri-user-2-line"></i>Students</span>
                            {data.student}
                        </div>
                    </li>
                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="ri-time-line"></i>Duration</span>
                            {data.duration}
                        </div>
                    </li>
                        <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="ri-translate"></i>Language</span>
                            {data.language}
                        </div>
                    </li>

                    <li>
                        <div className="d-flex justify-content-between align-items-center">
                            <span><i className="ri-calendar-2-line"></i>Updated </span>
                            {data.deadline}
                        </div>
                    </li>
                </ul>
                <div className="buy-btn">
                    <button className="button button-enroll-course btn btn-main-2 rounded">
                        <i className="ri-shopping-cart-2-line me-2"></i> Enroll Course 
                    </button>
                </div>

                <div className="course-meterial">
                    <h4 className="mb-3">Material Includes</h4>
                    <ul className="course-meterial-list">
                        <li><i className="fal fa-long-arrow-right"></i>Videos</li>
                        <li><i className="fal fa-long-arrow-right"></i>Files For Development</li>
                        <li><i className="fal fa-long-arrow-right"></i>Documentation Files</li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default CourseInfo;