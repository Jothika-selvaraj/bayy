import React, { Component } from 'react';
import CountUp from 'react-countup';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: [
                {
                    id: 1,
                    title: '200',
                    suffix: '',
                    text: 'Team Members'


                },
                {
                    id: 2,
                    title: '10',
                    suffix: '+',
                    text: 'Years Experience'


                },
                {
                    id: 3,
                    title: '222',
                    suffix: '+',
                    text: 'Exper Member'


                },
                {
                    id: 4,
                    title: '100',
                    suffix: '+',
                    text: 'Satisfactions Rate'
                }
            ]
        }
    }

    render() {
        return (
            <section className="counter-section4">
                <div className="container">
                    <div className="row justify-content-center" >
                        <div className="col-xl-12 counter-inner">
                            <div className="row">
                            {
                                this.state.counter.map((data,i) => (
                                    <div className="col-lg-3 col-md-6" key={data.id}>
                                        <div className="counter-item mb-5 mb-lg-0">
                                            <div className="count">
                                            <span className="counter h2">
                                              <CountUp end={data.title} enableScrollSpy />
                                                <span style={{ color: '#F14D5D' }}>{data.suffix}</span>
                                            </span>
                                            </div>
                                            <p>{data.text}</p>
                                        
                                        </div>
                                    </div>
                                    
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Counter;
