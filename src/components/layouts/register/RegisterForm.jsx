import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {

    render() {

        return (
            <section className="page-wrapper single ">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-md-6 col-xl-6">
                            <div className="login-form">
                                <div className="form-header">
                                    <h2 className="font-weight-bold mb-3">Sign Up</h2>
                
                                    <div className="info">
                                        <span>Already have an account?  </span>
                                        <Link to="/login" className="text-decoration-underline">Sign In</Link>
                                    </div>
                                </div>

                                <form className="login login-register-form " method="post">
                                    <div className="form-row">
                                        <label>Username &nbsp;<span className="required">*</span></label>

                                        <input type="text" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="form-row">
                                        <label>Email address&nbsp;<span className="required">*</span></label>

                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>


                                    <div className="form-row">
                                        <label>Password&nbsp;<span className="required">*</span></label>

                                        <input className="form-control" type="password" placeholder="Password"/>
                                    </div>

                                    <div className="form-row">
                                        <label>Re-Enter Password &nbsp;<span className="required">*</span></label>

                                        <input className="form-control" type="password" placeholder="Re-Enter Password "/>
                                    </div>
                                
                                    <div className="form-row py-2">
                                        <input type="checkbox" /> <span>Accept the Terms and Privacy Policy</span>
                                    </div>
                
                                    <div className="form-row">
                                        <button type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default RegisterForm;