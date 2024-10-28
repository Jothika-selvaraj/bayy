import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseGridPopular extends Component {
    constructor(props){
        super(props);
        this.state = {
            coursePopular: [
                {
                    id: 1,
                    price: 'Ms. Puja Shrivastava',
                    // review: '4.5 ',
                    // reviewCount: '40',
                    // duration :  '6.5',
                    lessons :  '',
                    img :  'assets/images/course/blog1.png',
                    title: 'Quranic teachings',
                },
                {
                    id: 2,
                    price: 'Ms. Puja Shrivastava ',
                    //  review: '4.5 ',
                    // reviewCount: '40',
                    // duration :  '6.5',
                    lessons :  ' ',
                    img :  'assets/images/course/blog1.jpg',
                    title: 'Quranic teachings',

                },
                {
                    id: 3,
                    price: 'Ms. Puja Shrivastava',
                    // review: '4.5 ',
                    // reviewCount: '40',
                    // duration :  '6.5',
                    lessons :  ' ',
                    img :  'assets/images/course/blog2.png',
                    title: 'Quranic teachings',
                },
                {
                    id: 4,
                    price: 'Ms. Puja Shrivastava',
                    // review: '4.5 ',
                    // reviewCount: '40',
                    // duration :  '6.5',
                    lessons :  ' ',
                    img :  'assets/images/course/blog1.jpg',
                    title: 'Quranic teachings',

                }
            ]
        }
    }
    render() {
        return (

        //Course style 1
        <section className="course-wrapper section-padding  bg-gray">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-heading mb-70 text-center">
                            <h2 className="font-lg">Our Blog</h2>
                            <p>"Quranic teachings, Arabic learning tips, and educational resources."</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-lg-center">

                {
                    this.state.coursePopular.map((data,i)=> (
                        <div className="col-xl-3 col-lg-6 col-md-6" key={data.id}>
                            <div className="course-grid tooltip-style bg-white hover-shadow">
                                <div className="course-header">
                                    <div className="course-thumb">
                                        <img src={data.img} alt="{data.title}" className="img-fluid"
                                         style={{height: '300px'}}/>
                                        <div className="course-price">{data.price}</div>
                                    </div>
                                </div>
            
                                <div className="course-content">
                                    {/* <div className="rating mb-10">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>

                                        <span>{data.review} ({data.reviewCount} reviews)</span>
                                    </div> */}

                                    <h3 className="course-title mb-20"> <Link to="#" >{data.title}</Link> </h3>


                                    <div className="course-footer mt-5 d-flex align-items-center justify-content-between ">
                                        {/* <span className="duration"><i className="far fa-clock me-2"></i>{data.duration} hr</span> */}
                                        <span className="lessons">{data.lessons} 20 - Feb - 2024</span>
                                    </div>
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

export default CourseGridPopular;