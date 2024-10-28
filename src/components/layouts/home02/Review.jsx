import React, { Component } from 'react';
import Slider from "react-slick";
import { HomeTwoTestimonial } from '../../../utils/script';

class Review extends Component {
    constructor(props){
        super(props);
        this.state = {
            testimonial: [
                {
                    id: 1,
                    img: 'assets/images/clients/testimonial-avata-01.jpg',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'John Doe',
                    desigantion: 'Marketing Specialist',
                },
                {
                    id:2,
                    img: 'assets/images/clients/testimonial-avata-02.jpg',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'Cory Zamora',
                    desigantion: 'Developer',
                },
                {
                    id: 3,
                    img: 'assets/images/clients/testimonial-avata-03.jpg',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'Jackie Sanders',
                    desigantion: 'Marketing Manager',
                },
                {
                    id:4,
                    img: 'assets/images/clients/testimonial-avata-04.jpg',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'Nikolas Brooten',
                    desigantion: 'Developer',
                },
                {
                    id:5,
                    img: 'assets/images/clients/testimonial-avata-03.jpg',
                    text: 'They are creative enough.Very much creative and powerful enough.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    name: 'Terry Ambady',
                    desigantion: 'Developer',
                },
            ]
        }
    }

    render() {
       
        return (

            <section className="testimonial section-padding">
                <div className="container-fluid container-grid">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-heading text-center mb-50">
                                <span className="subheading">Students Feedback</span>
                                <h2 className="font-lg">Our Students Says</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-xl-12">
                            
                            <div className="testimonials-slides-3">
                            <Slider {...HomeTwoTestimonial} >
                            {
                                this.state.testimonial.map((data,i) => (

                                <div className="testimonial-item" key={data.id}>
                                    <div className="testimonial-inner">
                                        <div className="quote-icon"><i className="flaticon-left-quote"></i></div>
                                        
                                            <div className="testimonial-text mb-30">
                                                {data.text}
                                            </div>

                                            <div className="client-info d-flex align-items-center">
                                                <div className="client-img">
                                                    <img src={data.img} alt="" className="img-fluid"/>
                                                </div>
                                                <div className="testimonial-author">
                                                    <h4>{data.name}</h4>
                                                    <span className="meta">{data.desigantion}</span>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                    ))
                                }
                                
                            </Slider>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
       
        );
    }
}

export default Review;
