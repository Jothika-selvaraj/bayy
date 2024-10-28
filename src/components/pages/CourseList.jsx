import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/courseList/index';

import Layout from '../../common/Layout';

const CourseList = () => {
    return (
        <div className="course-page">       
            <Layout>       
                    <PageBanner
                        title="Courses"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="Courses"
                        />
                    <CourseGrid />
            </Layout>
        </div>
    );
}

export default CourseList;