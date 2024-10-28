import React from 'react';
import Layout from '../../common/Layout';

import {CourseDetails}  from '../layouts/courseDetailsTwo/index';


const CourseDetailsTwo = () => {
    return (
        <div className="course-page">       
            <Layout>       
                <CourseDetails />
            </Layout>
        </div>
    );
}

export default CourseDetailsTwo;