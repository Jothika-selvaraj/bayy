import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course02/index';

import Layout from '../../common/Layout';

const CourseTwo = () =>  {
    return (
        <div className="page">       
            <Layout>    
                <PageBanner
                    title="Course Style - 2"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course Style - 2"
                    />
                <CourseGrid />
            </Layout>  
        </div>
    );
}
export default CourseTwo;