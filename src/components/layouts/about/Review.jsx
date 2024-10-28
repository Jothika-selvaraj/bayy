import React, { Component } from 'react';
import Slider from "react-slick";


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
        const settings = {
            loop: true,
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
          };
        return (

            <section className="testimonial-4 section-padding bg-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-heading text-center mb-50">
                                <h2 className="font-lg">Our Students Says</h2>
                                <p>Discover Your Perfect Program In Our Courses.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-xl-12">
                            <div className="testimonials-slides">
                                <Slider {...settings} >
                                {
                                    this.state.testimonial.map((data,i) => (
                                        <div class="testimonial-item" key={data.id}>
                                            <div class="testimonial-inner">
                                                <div class="quote-icon"><i class="flaticon-left-quote"></i></div>
                                                
                                                    <div class="testimonial-text mb-30">
                                                        {data.text}
                                                    </div>

                                                    <div class="client-info d-flex align-items-center">
                                                        <div class="client-img">
                                                            <img src={data.img} alt="" class="img-fluid"/>
                                                        </div>
                                                        <div class="testimonial-author">
                                                            <h4>{data.name}</h4>
                                                            <span class="meta">{data.desigantion}</span>
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
