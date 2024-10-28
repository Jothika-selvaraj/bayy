import React, { Component } from 'react';
import CourseTypeFilter from './CourseTypeFilter';

class CourseGridPopular extends Component {
   
    render() {
        return (

            <section className="section-padding course-filter-section" >
                 <CourseTypeFilter />
            </section>

        );
    }
}

export default CourseGridPopular;