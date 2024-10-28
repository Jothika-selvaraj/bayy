import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseGrid01 extends Component {
    constructor(props){
        super(props);
        this.state = {
            courses: [
                {
                    id: 1,
                    price: 'Tajweed & Makhraj Course',
                    img: 'assets/images/course/img.png',
                    authorImg: 'assets/images/course/imge.jpg',
                    title: 'Learn More',
                    desc: 'Appropriately enhance principle-cent standards in platforms. Credibly orch popular services.',
                },
                {
                    id: 2,
                    price: 'Quran Hifz Memorization',
                    img: 'assets/images/course/img.png',
                    authorImg: 'assets/images/course/img.png',
                    title: 'Learn More',
                    desc: 'Appropriately enhance principle-cent standards in platforms. Credibly orch popular services.',
                },
                {
                    id: 3,
                    price: 'Arabic Language',
                    img: 'assets/images/course/img.png',
                    authorImg: 'assets/images/course/img.png',
                    title: 'Learn More',
                    desc: 'Appropriately enhance principle-cent standards in platforms. Credibly orch popular services.',
                },
                // Added course 4
                {
                    id: 4,
                    price: 'Islamic Studies (Coming Soon)',
                    img: 'assets/images/course/img.png',
                    authorImg: 'assets/images/course/img.png',
                    title: 'Learn More',
                    desc: 'Enhance your understanding of the Hadith with this in-depth course. Ideal for students of all levels.',
                },
                // Added course 5
                {
                    id: 5,
                    price: 'Arabic Course (Coming Soon)',
                    img: 'assets/images/course/img.png',
                    authorImg: 'assets/images/course/img.png',
                    title: 'Learn More',
                    desc: 'Broaden your knowledge of Islamic history and culture with our comprehensive Islamic Studies course.',
                }
            ]
        }
    }
    render() {
        return (

        // Course style 1
        <section className="course-wrapper section-padding bg-gray">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="section-heading mb-70 text-center">
                            <span className="subheading" style={{color: '#F14D5D'}}>Find your Path</span>
                            <h2 className="font-lg">We Offering Courses From</h2>
                            <p>Discover Your Perfect Program In Our Courses.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-lg-center">

                {
                    this.state.courses.map((data, i) => (
                        <div className="col-xl-4 col-lg-4 col-md-6" key={data.id}>
                            <div className="course-grid bg-shadow tooltip-style">
                                <div className="course-header">
                                    <div className="course-thumb" style={{height:'250px', width:'200px'}}>
                                        <img src={data.img} alt={data.title} className="img-fluid" />
                                        <div className="course-price">{data.price}</div>
                                    </div>
                                </div>

                                <div className="course-content">
                                    <h3 className="course-title mb-20">
                                        <Link to="#">{data.title}</Link>
                                    </h3>
                                </div>

                                <div className="course-hover-content">
                                    <div className="price">{data.price}</div> <br />
                                    <div className="author me-4">
                                        <img src={data.authorImg} className="img-fluid" alt="author"/>
                                        <Link to="#">{data.author}</Link>
                                    </div>
                                    <p className="mb-20">{data.desc}</p>
                                    <Link to="/course-list" className="btn btn-grey btn-sm rounded">Join Now <i className="fal fa-angle-right"></i></Link>
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

export default CourseGrid01;
