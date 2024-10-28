import React from 'react';
import FsLightbox from "fslightbox-react";
import { useState } from 'react';

const About = (props) => {
    
    const data = [
        {
            id: 1,
            step: '01',
            title: 'Signup with all info',
            text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.',
            extraName: 'bg-1',
        },
        {
            id: 2,
            step: '02',
            title: 'Take your Admission',
            text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising.',
            extraName: 'bg-2',
        },
        {
            id: 3,
            step: '03',
            title: 'Learn from online',
            text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising. ',
            extraName: 'bg-3',
        },
        {
            id: 4,
            step: '04',
            title: 'Get certificate',
            text: 'Lorem ipsum dolor seat ameat dui too consecteture elite adipaising. ',
            extraName: 'bg-1',
        }
    ];

    const [toggler, setToggler] = useState(false);
  
    return (
      <section className="work-process section-padding">
        <div className="container">
            <div className="row mb-40">
                <div className="col-xl-8">
                    <div className="section-heading ">
                        <h2 className="font-lg">Start your journey With us</h2>
                        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam</p>
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-xl-7 pe-xl-5 col-lg-12">
                    <div className="row">
                        {
                            props.data.map((item)  => (
                            <div className="col-xl-6 col-lg-6 col-md-6" key={item.id}>
                                <div className="step-item ">
                                    <div className={`step-number ${item.extraName}`}>{item.step}</div>
                                    <div className="step-text">
                                        <h5>{item.title}</h5>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            </div>

                            ))
                        }
                        
                    </div>
                </div>

                <div className="col-xl-5">
                    <div className="video-section mt-3 mt-xl-0">
                        <div className="video-content">
                            <img src="/assets/images/bg/office01.jpg" alt="video-img" className="img-fluid"/>
                            <a href="#" className="video-icon video-popup"><i className="fa fa-play"></i></a>
                        </div>

                        <button onClick={() => setToggler(!toggler)}>
				            Toggle Lightbox
                        </button>
                        <FsLightbox
                            toggler={toggler}
                            sources={[
                                'https://i.imgur.com/fsyrScY.jpg',
                                'https://www.youtube.com/watch?v=3nQNiWdeH2Q',
                                'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                            ]}
                        />


                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  };
  
  export default About;
