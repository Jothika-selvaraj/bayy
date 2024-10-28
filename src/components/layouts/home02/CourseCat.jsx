import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseCat01 extends Component {
    constructor(props){
        super(props);

        this.state = {
            category: [
                {
                    id: 1,
                    title: 'Data Science & Analytics',
                    img :  'assets/images/icon/icon1.png',
                },
                {
                    id: 2,
                    title: 'Artificial Intellegence',
                    img :  'assets/images/icon/icon2.png',
                },
                {
                    id: 3,
                    title: 'Algebra Math calculation',
                    img :  'assets/images/icon/icon6.png',
                },
                {
                    id: 4,
                    title: 'Web Development',
                    img :  'assets/images/icon/icon4.png',
                },
                {
                    id: 5,
                    title: 'Digital Marketing & SEO',
                    img :  'assets/images/icon/icon6.png',
                },
                {
                    id: 6,
                    title: 'Health & Fitness',
                    img :  'assets/images/icon/icon2.png',
                }, 
                {
                    id: 7,
                    title: 'Marketing',
                    img :  'assets/images/icon/icon3.png',
                }, 
                {
                    id: 8,
                    title: 'Photography',
                    img :  'assets/images/icon/icon4.png',
                },
                
                
            ]
        }
    }

    render() {
        // Course category

        return (    
            
            <section className="section-padding">
                <div className="container-fluid container-grid">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="heading mb-50 text-center">
                                <span className="subheading">Top Categories</span>
                                <h2>Browse Courses By Category</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                    {
                        this.state.category.map((data,i)=> (
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="single-course-category style-2 ">
                                    <div className="course-cat-icon">
                                        <img src={data.img} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="course-cat-content">
                                        <h4 className="course-cat-title">
                                            <Link to="#">{data.title}</Link>
                                        </h4>
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
export default CourseCat01;