import React from 'react';

import HeaderOne from '../../common/header/HeaderOne';
import FooterOne from '../../common/footer/FooterOne';

import { Banner, Counter, CourseGrid01, /* CourseCat01, */ About, CourseGridPopular, /* Features, Team, */ Review, Cta } from '../layouts/home01/index';
import Intro from '../layouts/home01/Intro';
import Faq from '../layouts/home01/Faq';

const HomeOne = () => {
    return (
        <div className="home-page">  
            
            <HeaderOne />
            <Banner />
            <Counter />
            <Intro />
            <CourseGrid01 />
            {/* <CourseCat01 /> */}
            <About />
            <CourseGridPopular />
            <Faq />
            <Review />
            <Cta />  
            
            <FooterOne />  
        </div>
    )
}

export default HomeOne;
