import React, { Component } from 'react';
import CourseTypeOne from './CourseTypeOne';
import CourseData from '../../../data/course/CourseData.json';

class CourseGrid extends Component {

    render() {
        const CourseItems = CourseData.slice(0, 8);

        return (
            <section className="section-padding page" >
                <div className="course-top-wrap">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <p>Showing 1-6 of 8 results</p>
                            </div>
            
                            <div className="col-lg-4">
                                <div className="topbar-search">
                                    <form method="get" action="#">
                                        <input type="text"  placeholder="Search our courses" className="form-control"/>
                                        <label><i className="fa fa-search"></i></label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="container">
                    <div className="row ">
                    {
                        CourseItems.map((item) => (
                            <div className="course-item col-lg-3 col-md-6 col-sm-6" key={ item.id }>
                                <CourseTypeOne data={item} />
                            </div>
                        ) )
                    }
                        
                    </div>
                </div>
            </section>

        );
    }
}

export default CourseGrid;