import React from 'react';
import Slider from 'react-slick';

import CourseData from '../../../data/course/CourseData.json';
import { ThreeColumnCarousel2 } from '../../../utils/script';

import CourseTypeOne from '../courses/CourseTypeOne';

const RelatedCourses = ( { courseID } ) => {
    
    const coursIndex = courseID - 1;
    const catts = CourseData[coursIndex].categories;

    const similarCourseIndexes = CourseData.reduce((arr, e, i) => {
        if (e.categories.some(r => catts.includes(r))) {
            arr.push(i + 1);
        }
        return arr;
    }, []);
    

    const removeCurrentCourseIndex = similarCourseIndexes.indexOf( courseID );
    if ( removeCurrentCourseIndex > -1 ) {
        similarCourseIndexes.splice( removeCurrentCourseIndex, 1 );
    }

    const commonCourses = CourseData.filter( element => similarCourseIndexes.includes(element.id) );

    return (
        // based on common categories.
        <>
            { commonCourses && commonCourses.length > 0 && 
                <div className="related-course-wrapper section-padding-top">
                    <div className='container'>
                        <div className='row'>
                                <div className='col-lg-12'>
                                    <div className="section-title text-start mb--20">
                                    <span className="pre-title">Related Courses</span>
                                    <h3 className="title">Courses You May Like</h3>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-12'>
                                <Slider 
                                className="edu-slick-button slick-activation-wrapper eduvibe-course-one-carousel"
                                    { ...ThreeColumnCarousel2 }
                                >
                                    {
                                        commonCourses.map( ( course ) => (
                                            <div className="single-slick-card" key={ course.id }>
                                                <CourseTypeOne data={course} />
                                            </div>
                                        ) )
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default RelatedCourses;

