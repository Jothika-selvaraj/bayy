import React, { Component } from 'react';

class Process extends Component {
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
            ]
        }
    }
    render() {
        return (
            <section className="work-process-section">
                <div className="container">
                    <div className="row mb-70 justify-content-between">
                        <div className="col-xl-5">
                            <div className="section-heading text-center text-lg-start mb-4 mb-xl-0">
                                <span className="subheading">How to Start</span>
                                <h2 className="font-lg">4 steps start your journey with us</h2>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <p className="text-center text-lg-start">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod. 
                                Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis.</p>
                        </div>
                    </div>
            
                    <div className="row">
                        {
                        this.state.process.map((data,i) => (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={data.id}>
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
            </section>
            
       
     
        );
    }
}

export default Process;
