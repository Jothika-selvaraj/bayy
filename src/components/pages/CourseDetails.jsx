import React from 'react';
import Layout from '../../common/Layout';
import {CourseDetails}  from '../layouts/courseDetails/index';


const CourseDetails01 = () => {
    return (
        <div className="course-page">       
            <Layout>       
                <CourseDetails />
            </Layout>
        </div>
    );
}

export default CourseDetails01;