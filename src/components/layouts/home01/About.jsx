import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            process: [
                {
                    id: 1,
                    step: '01',
                    title: 'Qualified Native Instructors:',
                    text: 'Benefit from the expertise of our highly qualified native tutors, who bring authentic language experience and cultural knowledge to the classroom.',
                    extraName: 'bg-1',
                },
                {
                    id: 2,
                    step: '02',
                    title: 'Customizable Learning Schedules:',
                    text: 'Our flexible scheduling allows you to choose class times that fit your personal and academic commitments, ensuring a stress-free learning experience.',
                    extraName: 'bg-2',
                },
                {
                    id: 3,
                    step: '03',
                    title: 'Engaging Learning Environment:',
                    text: 'We utilize a variety of interactive online tools and resources, creating an immersive and engaging learning atmosphere that keeps students motivated.',
                    extraName: 'bg-3',
                },
                {
                    id: 4,
                    step: '04',
                    title: 'Personalized Progress Monitoring:',
                    text: 'Our dedicated support team tracks your progress, providing personalized feedback and resources to help you overcome challenges and reach your learning objectives.',
                    extraName: 'bg-1',
                }
            ],
        };
    }

    render() {
        return (
            <section className="work-process section-padding">
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-xl-8">
                            <div className="section-heading ">
                                <h2 className="font-lg" style={{ fontWeight: '800', color: '#F14D5D' }}>Why Choose Us?</h2>
                                <p style={{ fontSize: '18px' }}>List unique features, such as:</p>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-xl-7 pe-xl-5 col-lg-12">
                            <div className="row">
                                {this.state.process.map((data, i) => (
                                    <div className="col-xl-6 col-lg-6 col-md-6" key={data.id}>
                                        <div className="step-item ">
                                            <div className={`step-number ${data.extraName}`}>{data.step}</div>
                                            <div className="step-text">
                                                <h5 style={{ fontWeight: '700' }}>{data.title}</h5>
                                                <p>{data.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-xl-5">
                            <div className="video-section mt-3 mt-xl-0">
                                <div className="video-content">
                                    <img src="/assets/images/bg/office01.jpg" alt="" className="img-fluid" />
                                    <a href="https://youtu.be/3nQNiWdeH2Q" data-lightbox="video" className="video-icon video-popup">
                                        <i className="fa fa-play"></i>
                                    </a>
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
