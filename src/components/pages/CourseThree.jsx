import React from 'react';
import { PageBanner,CourseGrid}  from '../layouts/course03/index';

import Layout from '../../common/Layout';

const CourseThree = () =>  {
    return (
        <div className="page">       
            <Layout>    
            <PageBanner
                            title="Course Style - 3"
                            rootUrl="/"
                            parentUrl="Home"
                            currentUrl="Course Style - 3"
                            />
                <CourseGrid />
            </Layout>  
        </div>
    );
}
export default CourseThree;