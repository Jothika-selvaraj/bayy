import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course04/index';

import Layout from '../../common/Layout';

const CourseFour = () =>  {
    return (
        <div className="page">       
            <Layout>    
                <PageBanner
                    title="Course Style - 4"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course Style - 4"
                    />
                <CourseGrid />
            </Layout>  
        </div>
    );
}
export default CourseFour;