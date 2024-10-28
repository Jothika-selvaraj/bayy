import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class About1 extends Component {

    render() {
        return (
            <section className="be-instructor section-padding-btm">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <img src="assets/images/banner/illustration.png" alt="" className="img-fluid"/>
                        </div>

                        <div className="col-xl-6 col-lg-6">
                            <div className="section-heading mt-4 mt-lg-0">
                                <span className="subheading">Narrated Abu Hurairah that Messenger of Allah (ﷺ) said</span>
                                <h2 className="font-lg mb-20">: "Whoever takes a path upon which to obtain knowledge, Allah makes the path to Paradise easy for him." </h2>
                                <p className="mb-20">o	At Bayyinah Academy, we offer high-quality online Quran and Arabic language education course to learners of all ages.
                                Our qualified and experience tutors are committed to helping you achieve fluency and a deep understanding of both the Quran and the Arabic language. With the guidance of our dedicated native tutor, you'll unlock the beauty of the Quran while mastering Arabic.  Whether you're just starting or seeking to advance your knowledge, our customized course ensures that every student progresses at their own pace. Join us on this journey of spiritual and linguistic growth!
</p>
                                
                                <Link to="#" className="btn btn-main rounded" >Start Teaching today</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                    
        );
    }
}

export default About1;
