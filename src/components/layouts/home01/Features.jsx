import React, { Component } from 'react';

class Features extends Component {
    constructor(props){
        super(props);
        this.state = {
           features: [
                {
                    id: 1,
                    icon: 'flaticon-teacher',
                    title: 'Expert Teacher',
                    text: 'Develop skills for career of various majors including computer'
                },
                {
                    id: 2,
                    icon: 'flaticon-layer',
                    title: 'Self Development',
                    text: 'Develop skills for career of various majors including computer'
                },
                {
                    id: 3,
                    icon: 'flaticon-video-camera',
                    title: 'Remote Learning',
                    text: 'Develop skills for career of various majors including computer'
                },
                {
                    id: 4,
                    icon: 'flaticon-lifesaver',
                    title: 'Life Time Support',
                    text: 'Develop skills for career of various majors including computer'
                },
                
            ]
        }
    }

    render() {
        return (

            <section className="features-3 section-padding-top ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="section-heading mb-50 text-center">
                                <h2 className="font-lg">Transform Your Life </h2>
                                <p>Discover Your Perfect Program In Our Courses.</p>
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        {
                            this.state.features.map((data,i) =>(

                                <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6" key={data.id}>
                                    <div className="feature-item feature-style-top hover-shadow rounded border-0">
                                        <div className="feature-icon">
                                            <i className={data.icon}></i>
                                        </div>
                                        <div className="feature-text">
                                            <h4>{data.title}</h4>
                                            <p>{data.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                            
                        }
                       
                    </div>
                </div>
            </section>
                    
        );
    }
}

export default Features;
