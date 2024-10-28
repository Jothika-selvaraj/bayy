import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InstructorData from '../../../data/instructor/InstructorData.json';


class InstructorGrid extends Component {

    render() {
        const TeamMembers = InstructorData.slice(0, 8);

        return (
            <section className="section-instructors section-padding">
                <div className="container">
                    <div className="row">
                    {
                        TeamMembers.map((data) => (
                            <div className="col-lg-3 col-md-6 col-sm-6"  key={ data.id }>
                                <div className="team-item mb-5">
                                    <div className="team-img">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/team/${data.imageLg}`} alt="" className="img-fluid"/>

                                        <ul className="team-socials list-inline">
                                            <li className="list-inline-item"><Link to={data.facebookUrl}><i className="fab fa-facebook-f"></i></Link></li>
                                            <li className="list-inline-item"><Link to={data.twitterUrl}><i className="fab fa-twitter"></i></Link></li>
                                            <li className="list-inline-item"><Link to={data.linkedInUrl}><i className="fab fa-linkedin-in"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="team-content">
                                        <div className="team-info">
                                            <h4>{ data.name}</h4>
                                            <p>{ data.designation }</p>
                                        </div>

                                        <div className="course-meta">
                                            <span className="duration"><i className="far fa-user-alt"></i>20 Students</span>
                                            <span className="lessons"><i className="far fa-play-circle me-2"></i>2 Course</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ) )
                    }
                    </div>
                </div>
            </section>
            
        

        );
    }
}

export default InstructorGrid;