import React from 'react';
import { Banner, Counter, CourseCat01,Process,CourseGridPopular, Features,About,Review,Cta}  from '../layouts/home02/index';
import HeaderTwo from '../../common/header/HeaderTwo';
import FooterTwo from '../../common/footer/FooterTwo';

const HomeTwo =() =>  {
    return (
        <div className="home-page-2">       
            <HeaderTwo />       
                    <Banner />
                    <Features />
                    <CourseCat01 />
                    <Counter />
                    <CourseGridPopular />
                    <Cta />
                    <Process />
                    <Review />
                    <About />
            <FooterTwo />
        </div>
    );
}

export default HomeTwo;