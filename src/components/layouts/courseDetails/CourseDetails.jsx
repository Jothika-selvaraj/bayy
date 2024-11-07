import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import CourseData from '../../../data/course/CourseData.json';
import InstructorData from '../../../data/instructor/InstructorData.json';
import CurriculumTabContent from '../../../data/course/CurriculumTabContent.json';
import { slugify } from '../../../utils/index';
import RelatedCourses from '../courseDetails/RelatedCourses';
import CourseInfo from '../courseDetails/CourseInfo';

// Custom Toggle for Accordion
const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey);
    const isCurrentEventKey = activeEventKey === eventKey;
    return <button type="button" onClick={decoratedOnClick} aria-expanded={isCurrentEventKey ? true : false} className="edu-accordion-button">{children}</button>
}

// CurriculumContent Component
const CurriculumContent = () => {
    const [activeId, setActiveId] = useState('0');

    function toggleActive(id) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }

    return (
        <Accordion bsPrefix="edu-accordion-02" defaultActiveKey={activeId} flush>
            {CurriculumTabContent.map((accordion, i) => (
                <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive(i.toString())} bsPrefix={`edu-accordion-item ${activeId === i.toString() ? 'bg-active' : ''}`}>
                    <div className="edu-accordion-header">
                        <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                    </div>
                    <Accordion.Body bsPrefix="edu-accordion-body">
                        <ul>
                            {accordion.content.map((title, index) => (
                                <li key={index}>
                                    <div className="text"><i className="ri-draft-line"></i>{title}</div>
                                    <div className="icon"><i className="ri-lock-password-line"></i></div>
                                </li>
                            ))}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

// Main CourseDetails Component
const CourseDetails = () => {
    const { id } = useParams();
    const courseId = parseInt(id, 10);
    const data = CourseData.filter(course => course.id === courseId);
    const courseItem = data[0];

    const indexOfInstructor = InstructorData.findIndex(function (instructor) {
        return slugify(instructor.name) === slugify(courseItem.instructor);
    });
    const instructor = InstructorData[indexOfInstructor];
    const instructorExcerpt = instructor.details.substring(0, 190) + "...";

    const [contentTab, setContentTab] = useState('overview');
    const handleTab = (content) => {
        setContentTab(content);
    }

    return (
        <>
            <section className="page-wrapper">
                <div className="tutori-course-content tab-style-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-xl-8">
                                <div className="course-details-header mb-5 ">
                                    <h1 className="course-title" style={{ fontSize: '30px', fontWeight: '700', color: '#F14D5D' }}>({courseItem.title})</h1>
                                </div>

                                <nav className="course-single-tabs learn-press-nav-tabs">
                                    <ul className="nav nav-tabs course-nav" role="tablist">
                                        <li className="nav-item">
                                            <button
                                                className={contentTab === 'overview' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Overview"
                                                onClick={() => handleTab('overview')}
                                            >
                                                Overview
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className={contentTab === 'curriculum' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Curriculum"
                                                onClick={() => handleTab('curriculum')}
                                            >
                                                Curriculum
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className={contentTab === 'instructor' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Instructor"
                                                onClick={() => handleTab('instructor')}
                                            >
                                                Instructor
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className={contentTab === 'reviews' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Reviews"
                                                onClick={() => handleTab('reviews')}
                                            >
                                                Reviews
                                            </button>
                                        </li>
                                    </ul>
                                </nav>

                                <div className="tab-content tutori-course-content">
                                    {contentTab === 'overview' && (
                                        <div className="tab-pane fade show active">
                                            <div className="single-course-details">
                                                <div className="course-tab-content" dangerouslySetInnerHTML={{ __html: courseItem.details }} />
                                            </div>
                                        </div>
                                    )}

                                    {contentTab === 'curriculum' && (
                                        <div className="tab-pane fade show active">
                                            <div className="course-tab-content">
                                                <CurriculumContent />
                                            </div>
                                        </div>
                                    )}

                                    {contentTab === 'instructor' && (
                                        <div className="tab-pane fade show active">
                                            <div className="course-tab-content">
                                                <div className="courses-instructor">
                                                    <div className="single-instructor-box">
                                                        <div className="row align-items-center">
                                                            <div className="col-lg-4 col-md-4">
                                                                <div className="instructor-image">
                                                                    <img src={`${process.env.PUBLIC_URL}/assets/images/team/${instructor.imageLg}`} alt="Author Thumb" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8 col-md-8">
                                                                <div className="instructor-content">
                                                                    <h4>
                                                                        <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify(courseItem.instructor)}`}>{instructor.name}</Link>
                                                                    </h4>
                                                                    <span className="sub-title">{instructor.designation}</span>
                                                                    <p>{instructorExcerpt}</p>
                                                                    <div className="instructor-social-links">
                                                                        <span className="me-2">Follow Me: </span>
                                                                        <button type="button"><i className="fab fa-facebook-f"></i></button>
                                                                        <button type="button"><i className="fab fa-linkedin-in"></i></button>
                                                                        <button type="button"><i className="fab fa-pinterest"></i></button>
                                                                        <button type="button"><i className="fab fa-twitter"></i></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {contentTab === 'reviews' && (
                                        <div className="tab-pane fade show active">
                                            <div className="course-tab-content">
                                                <div id="course-reviews">
                                                    <ul className="course-reviews-list">
                                                        <li>
                                                            <div className="course-review">
                                                                <div className="course-single-review">
                                                                    <div className="user-image">
                                                                        <img src="assets/images/blog/author.jpg" alt="" className="img-fluid" />
                                                                    </div>
                                                                    <div className="user-content user-review-content">
                                                                        <div className="review-header mb-10">
                                                                            <h4 className="user-name">Tutori</h4>
                                                                            <div className="rating review-stars-rated">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star-half"></i>
                                                                            </div>
                                                                        </div>
                                                                        <div className="review-text">
                                                                            <div className="review-content">
                                                                                {courseItem.reviewText}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="col-lg-5 col-xl-4">
                                <CourseInfo data={courseItem} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Courses */}
                <RelatedCourses courseID={courseItem.id} />
            </section>
        </>
    );
}

export default CourseDetails;
