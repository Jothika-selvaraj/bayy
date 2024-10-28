import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Team extends Component {
    constructor(props){
        super(props);
        this.state = {
           team: [
                {
                    id: 1,
                    img: 'assets/images/team/team-1.jpg',
                    title: 'Harish Ham',
                    text: 'Quran Expert',
                    students: '20',
                    lessons: '2',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                {
                    id: 2,
                    img: 'assets/images/team/team-2.jpg',
                    title: 'Harish Ham',
                    text: 'Quran Expert',
                    students: '20',
                    lessons: '4',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                {
                    id: 3,
                    img: 'assets/images/team/team-3.jpg',
                    title: 'Harish Ham',
                    text: 'Quran Expert',
                    students: '20',
                    lessons: '6',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                {
                    id: 4,
                    img: 'assets/images/team/team-4.jpg',
                    title: 'Harish Ham',
                    text: 'Quran Expert',
                    stuendets: '20',
                    lessons: '10',
                    fb: 'fab fa-facebook-f',
                    twitter: 'fab fa-twitter',
                    linkedin: 'fab fa-linkedin-in',
                },
                
            ]
        }
    }

    render() {
        return (
            

            <section className="instructors section-padding-btm ">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 pe-5 mb-40">
                            <div className="section-heading">
                                <span className="subheading" style={{color: '#F14D5D'}}>Start Today</span>
                                <h2 className="font-lg mb-10">Our Top Instructors</h2>
                                <p className="mb-30">Would you like to learn Quran online with expert tutors?, </p>
                                
                                <ul className="list-item mb-40">
                                    <li><i className="fa fa-check"></i><h5>Learn from our top instructors who are dedicated to helping you master the Quran with personalized attention.</h5></li>
                                    <li><i className="fa fa-check"></i><h5> Enjoy the convenience of online classes that fit your busy lifestyle—study anytime, anywhere!</h5></li>
                                    <li><i className="fa fa-check"></i><h5> Experience interactive sessions that make learning the Quran enjoyable and enriching!</h5></li>
                                </ul>
                                <Link to="/your-target-url" className="btn btn-main rounded">Start Teaching today</Link>
                                </div>
                        </div>

                        <div className="col-xl-6">
                            <div className="row masonary-item">
                            {
                            this.state.team.map((data,i) =>(

                                <div className="col-lg-6 col-md-6 col-sm-6" key={data.id}>
                                    <div className="team-item team-item-2">
                                        <div className="team-img">
                                            <img src={data.img} alt="" className="img-fluid"/>

                                            <ul className="team-socials list-inline">
                                                <li class="list-inline-item"><Link to="#"><i class={data.fb}></i></Link></li>
                                                <li class="list-inline-item"><Link to="#"><i class={data.twitter}></i></Link></li>
                                                <li class="list-inline-item"><Link to="#"><i class={data.linkedin}></i></Link></li>
                                            </ul>
                                        </div>
                                        <div className="team-content">
                                            <div className="team-info">
                                                <h4>{data.title}</h4>
                                                <p>{data.text}</p>
                                            </div>

                                            <div className="course-meta">
                                                <span className="duration"><i className="far fa-user-alt"></i>{data.students} Students</span>
                                                <span className="lessons"><i className="far fa-play-circle me-2"></i>{data.lessons} Course</span>
                                            </div>
                                        </div>
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

export default Team;
