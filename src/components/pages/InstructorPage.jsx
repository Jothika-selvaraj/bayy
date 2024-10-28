import React from 'react';
import {PageBanner,InstructorGrid}  from '../layouts/instructors/index';

import Layout from '../../common/Layout';

const InstructorOne = () =>  {
    return (
        <div className="page">       
            <Layout>    
                <PageBanner
                    title="Instructors"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Instructors"
                    />
                <InstructorGrid />
            </Layout>  
        </div>
    );
}

export default InstructorOne;