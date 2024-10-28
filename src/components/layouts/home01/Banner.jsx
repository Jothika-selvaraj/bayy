import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    
    render() {
        return (
        <section className="banner-style-4 banner-padding">
            <div class="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-12 col-xl-6 col-lg-6">
                        <div className="banner-content  ">
                            <span className="subheading" style={{color :'#F14D5D'}}>Master Quran and Arabic, Step by Step</span>
                            <h1>Arabic Quran Mastery</h1> 
                            <p className="mb-20">" Begin your journey with expert tutors and customized courses for every learner"
                            </p>

                            <div className="btn-container">
                                <Link to="#" className="btn btn-main rounded">Find Courses</Link>
                                <Link to="#" className="btn btn-white rounded ms-2">Book a Free Trial Lesson</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-xl-6 col-lg-6">
                        <div className="banner-img-round mt-5 mt-lg-0 ps-5">
                            <img src="assets/images/banner/banner_img.png" alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        );
    }
}

export default Banner;

