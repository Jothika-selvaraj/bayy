import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            features: [
                {
                    id: 1,
                    icon: 'fa fa-school',
                    title: 'Quranic Studies',
                    extraClassName: 'icon-bg-3',
                    text: 'Hifz is not just about memorization, but about connecting with the Quran on a spiritual level.'
                },
                {
                    id: 2,
                    icon: 'far fa-file-certificate',
                    title: 'Arabic Language',
                    extraClassName: 'icon-bg-2',
                    text: 'Master the articulation point (makhraji) fo arabic letters to ensure precise pronunciation.'
                },
                {
                    id: 3,
                    icon: 'fad fa-users',
                    title: 'Tajweed & Makhraj Course',
                    extraClassName: 'icon-bg-1',
                    text: 'Learn the principles of Quranic recitation to read the Quran with accuracy and beauty.'
                },
                
            ]
        }
    }
    render() {
        return (
        
            <section className="about-3 section-padding ">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-5 col-lg-6">
                            <div className="about-img">
                                <img src="assets/images/about/img_9.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about-content mt-5 mt-lg-0">
                                <div className="heading mb-50">
                                    <span className="subheading" style={{color:'#F14D5D'}}>Quran and Arabic made easy </span>
                                    <h2 className="font-lg">Love and learn Quran online, one verse at a time., </h2>
                                </div>

                                <div className="about-features">
                                {
                                    this.state.features.map((data,i) =>(

                                        <div className="feature-item feature-style-left" key={data.id}>
                                            <div className={`feature-icon icon-radius ${data.extraClassName}`}>
                                                <i className={data.icon}></i>
                                            </div>
                                            <div className="feature-text">
                                                <h4>{data.title}</h4>
                                                <p>{data.text}</p>
                                            </div>
                                        </div>
                                    ))
                                    
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       
     
        );
    }
}

export default About;
