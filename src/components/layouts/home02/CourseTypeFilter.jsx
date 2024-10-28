import React, { useState, useEffect, useMemo } from 'react';
import CourseData from '../../../data/course/CourseData.json';
import CourseTypeOne from '../home02/CourseTypeOne';

const CourseTypeFilter = ({ itemToShow }) => {
    // Memoize FilterControls to avoid recalculating on every render
    const FilterControls = useMemo(() => {
        const filters = [...new Set(CourseData.map(item => item.filterParam))];
        filters.unshift('All');
        return filters;
    }, []); // No dependencies; will only run once

    const numberOfCourses = itemToShow || 8;
    const [dataVisibleCount] = useState(numberOfCourses);
    
    const [activeFilter, setActiveFilter] = useState(FilterControls[0].toLowerCase());
    const [visibleItems, setVisibleItems] = useState([]);

    useEffect(() => {
        setVisibleItems(CourseData.filter((item) => item.id <= dataVisibleCount));
    }, [dataVisibleCount]); // Removed FilterControls from dependencies

    const handleChange = (e) => {
        e.preventDefault();
        const filterText = e.target.textContent.toLowerCase();
        setActiveFilter(filterText);
        
        let tempData;
        if (filterText === FilterControls[0].toLowerCase()) {
            tempData = CourseData.filter((data) => data.id <= dataVisibleCount);
        } else {
            tempData = CourseData.filter((data) => 
                data.filterParam.toLowerCase() === filterText &&
                data.id <= dataVisibleCount
            );
        }
        setVisibleItems(tempData);
    };

    return (
        <>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-12">
                        <div className="heading text-center mb-40">
                            <span className="subheading">Course Trending</span>
                            <h2 className="font-lg">Explore popular courses</h2>
                        </div>
                        <div className="course-filter button-group isotop-filter filters-button-group d-flex justify-content-center">
                            {FilterControls.map((filter, i) => (
                                <button
                                    onClick={handleChange}
                                    key={i}
                                    className={filter.toLowerCase() === activeFilter ? "is-checked" : ""}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row">
                    {visibleItems.map((item) => (
                        <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
                            <CourseTypeOne data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default CourseTypeFilter;
