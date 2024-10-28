import React from 'react';
import { PageBanner,Features,Team,Review}  from '../layouts/about/index';
import Layout from '../../common/Layout';
import { Counter } from '../layouts/home01';
import MisionVision from '../layouts/about/MisionVision';


const AboutMain = () => {
    return (
        <div className="about"> 
  
            <Layout>  
                <PageBanner
                        title="About us"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="About"
                        />
                    <Features />
                    <MisionVision />
                    <Team />
                    <Counter />
                    <Review />
            </Layout>
        </div>
    );
}

export default AboutMain;