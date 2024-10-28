import React from 'react';
import {PageBanner,CourseGrid}  from '../layouts/courses/index';

import Layout from '../../common/Layout';

const CourseOne = () =>  {
    return (
        <div className="page">       
            <Layout>    
                <PageBanner
                    title="Course style 1"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course Style - 1"
                    />
                <CourseGrid />
            </Layout>  
        </div>
    );
}

export default CourseOne;