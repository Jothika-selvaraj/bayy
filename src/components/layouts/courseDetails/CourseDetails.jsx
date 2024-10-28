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

const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton( eventKey );
    const isCurrentEventKey = activeEventKey === eventKey;
    return <button type="button" onClick={decoratedOnClick} aria-expanded={ isCurrentEventKey ? true : false } className="edu-accordion-button">{children}</button>
}

const CurriculumContent = () => {
    const [activeId, setActiveId] = useState( '0' );

    function toggleActive( id ) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }

    return (
        <Accordion bsPrefix="edu-accordion-02" defaultActiveKey={activeId} flush>
            {
                CurriculumTabContent.map( ( accordion, i ) => (
                    <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive(i.toString())} bsPrefix={`edu-accordion-item ${activeId === i.toString() ? 'bg-active' : ''}`}>
                        <div className="edu-accordion-header">
                            <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                        </div>
                        <Accordion.Body bsPrefix="edu-accordion-body">
                            <ul>
                                { 
                                    accordion.content.map( ( title, index ) => (
                                        <li key={index}>
                                            <div className="text"><i className="ri-draft-line"></i>{title}</div>
                                            <div className="icon"><i className="ri-lock-password-line"></i></div>
                                        </li>
                                    ) )
                                
                                }
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                ) )
            }
        </Accordion>
    )
}


const CourseDetails = () => {

    const { id } = useParams();
    const courseId = parseInt( id, 10 );
    const data = CourseData.filter( course => course.id === courseId );
    const courseItem = data[0];

    const indexOfInstructor = InstructorData.findIndex( function( instructor ) {
        return slugify( instructor.name ) === slugify( courseItem.instructor );
    } );
    const instructor = InstructorData[indexOfInstructor];
    const instructorExcerpt = instructor.details.substring(0, 190) + "...";
    const instructorThumb = InstructorData[indexOfInstructor].image;

    const [contentTab, setContentTab] = useState( 'overview' );
    const handleTab = ( content ) => {
        if ( content === 'overview' ) {
            setContentTab( 'overview' );
        } else if ( content === 'curriculum' ) {
            setContentTab( 'curriculum' );
        } else if ( content === 'instructor' ) {
            setContentTab( 'instructor' );
        } else if ( content === 'reviews' ) {
            setContentTab( 'reviews' );
        }
    }

    return (
        <>
            <section className="page-wrapper">
                <div className="tutori-course-content tab-style-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-xl-8">   
                                <div className="course-details-header mb-5 ">

                                    <div className="course-meta-info mb-4">
                                        <div className="d-flex align-items-center">
                                            <div className="author me-4">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/instructor/${instructorThumb}`} alt="" className="img-fluid"/>
                                                By <a href="/">{courseItem.instructor}</a>
                                            </div>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <span><i className="ri-bar-chart-2-line me-2"></i></span>
                                                {courseItem.level}
                                            </div>

                                            <div className="rating review-stars-rated ms-4">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-half-line"></i>
                                                <span className="ms-2">({courseItem.review} Reviews)</span>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className="course-title">{courseItem.title}</h1>
                                </div>

                                <nav className="course-single-tabs learn-press-nav-tabs">

                                    <ul className="nav nav-tabs course-nav" role="tablist">
                                        <li className="nav-item">
                                            <a href='demo' className={contentTab === 'overview' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Overview"
                                                onClick={() => handleTab('overview')}
                                            >
                                                Overview
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href='demo' 
                                                className={contentTab === 'curriculum' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Curriculum"
                                                onClick={() => handleTab('curriculum')}
                                            >
                                                Curriculum
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a  href='demo'
                                                className={contentTab === 'instructor' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Instructor"
                                                onClick={() => handleTab('instructor')}
                                            >
                                                Instructor
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a 
                                            href='demo' className={contentTab === 'reviews' ? 'nav-link active' : 'nav-link'}
                                                type="button"
                                                aria-label="Reviews"
                                                onClick={() => handleTab('reviews')}
                                            >
                                                Reviews
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                                <div className="tab-content tutori-course-content">
                                    {/* Overview Tab */}
                                    { contentTab === 'overview' && 
                                        <div className={`tab-pane fade show ${contentTab === 'overview' ? 'active' : '' } `}>
                                            <div className="single-course-details ">
                                                <div className="course-tab-content" dangerouslySetInnerHTML={{__html: courseItem.details}} />
                                            </div>
                                        </div>
                                    }

                                    {/*  Curiculam Tab */}
                                    { contentTab === 'curriculum' && 
                                        <div className={`tab-pane fade show ${contentTab === 'curriculum' ? 'active' : '' } `}>
                                            <div className="course-tab-content">
                                                <CurriculumContent />
                                            </div>
                                        </div>
                                    }
                                    
                                    {/*  INstructor Tab */}
                                    { contentTab === 'instructor' && 
                                        <div className={`tab-pane fade show ${contentTab === 'instructor' ? 'active' : '' } `}>
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
                                                                        <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( courseItem.instructor ) }`}>{instructor.name}</Link>
                                                                    </h4>
                                                                    <span className="sub-title">{instructor.designation}</span>
                                                                    
                                                                    <p>{ instructorExcerpt }</p>
                                                                    
                                                                    <div className="intructor-social-links">
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
                                                {/* COURSE AUTHOR END */}
                                            </div>
                                        </div>
                                    }

                                    {/*  Review TAb */}

                                    { contentTab === 'reviews' && 
                                        <div className={`tab-pane fade show ${contentTab === 'reviews' ? 'active' : '' } `}>
                                        <div className="course-tab-content">
                                            <div id="course-reviews">
                                                <ul className="course-reviews-list">
                                                    <li>
                                                        <div className="course-review">
                                                            <div className="course-single-review">
                                                                <div className="user-image">
                                                                    <img src="assets/images/blog/author.jpg" alt="" className="img-fluid"/>
                                                                </div>

                                                                <div className="user-content user-review-content">
                                                                    <div className="review-header mb-10">
                                                                        <h4 className="user-name">Tutori</h4>

                                                                        <div className="rating review-stars-rated">
                                                                        <a href='demo'><i className="fa fa-star"></i></a>
                                                                        <a href='demo' ><i className="fa fa-star"></i></a>
                                                                            <a href='demo'><i className="fa fa-star"></i></a>
                                                                            <a href='demo'><i className="fa fa-star"></i></a>
                                                                            <a href='demo'><i className="fa fa-star-half"></i></a>
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
                                    }
                                </div>
                            </div>

                            <div className="col-lg-5 col-xl-4">
                               <CourseInfo data={courseItem}/>
                            </div>
                        </div>
                    </div>
                </div>

               
               {/*  Related course */}
                <RelatedCourses courseID={ courseItem.id } />
                   
            </section>
        </>
    )
}
export default CourseDetails;