import React, { Component } from 'react';
// import { Link} from 'react-router-dom';
import FsLightbox from "fslightbox-react";

const About = (props) => {

    const data = [
        { id: 1, name: 'Item 1', description: 'This is item 1' },
        { id: 2, name: 'Item 2', description: 'This is item 2' },
        { id: 3, name: 'Item 3', description: 'This is item 3' },
        // Add more data items here
      ];
      
    return (
      <div>
        {props.data.map((item) => (
          <div key={item.id}>
            {/* Render the data from each item in the array */}
            <p>{item.name}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  };
  

class About extends Component {
    constructor(props){
        super(props);

        this.state = {
            process: [
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
            ],

            toggler: false,
        }
    }

    openLightbox = () => {
        this.setState({ toggler: !this.state.toggler });
      };

    //   closeLightbox = () => {
    //     this.setState({ toggler: false });
    //   };
    

    render() {
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
                                  this.state.process.map((data,i) => (
                                    <div className="col-xl-6 col-lg-6 col-md-6" key={data.id}>
                                        <div className="step-item ">
                                            <div className={`step-number ${data.extraName}`}>{data.step}</div>
                                            <div className="step-text">
                                                <h5>{data.title}</h5>
                                                <p>{data.text}</p>
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

                            <button onClick={this.openLightbox}>Open Lightbox</button>
                            <FsLightbox
                                    toggler={this.state.toggler}
                                    sources={[
                                        'https://youtu.be/3nQNiWdeH2Q',
                                    ]}
                                    >
                            </FsLightbox>


                        </div>
                    </div>
                </div>
            </div>
        </section>
     
        );
    }
}

export default About;
