
import React from 'react';
import { Link } from 'react-router-dom';

const FooterOne = () => {
    return (
        <>
            <section className="footer footer-3 pt-250">
                <div className="footer-mid">
                    <div className="container">
                        <div className="row d-flex justify-content-between"> 
                            {/* Left-side content */}
                            <div className="col-xl-4 col-lg-4 col-sm-12">
                                <div className="row">
                                    <div className="col-xl-6 col-sm-6">
                                        <div className="footer-widget mb-5 mb-lg-0">
                                            <h5 className="widget-title">EXPLORE</h5>
                                            <ul className="list-unstyled footer-links">
                                                <li><Link to="">About us</Link></li>
                                                <li><Link to="#">Blog</Link></li>
                                                <li><Link to="#">Teachers</Link></li>
                                                <li><Link to="#">Career</Link></li>
                                                <li><Link to="#">Testimonials</Link></li>
                                                <li><Link to="#">Contact Us</Link></li>
                                                <li><Link to="#">FAQ</Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-sm-6">
                                        <div className="footer-widget mb-5 mb-lg-0">
                                            <h5 className="widget-title">COURSES</h5>
                                            <ul className="list-unstyled footer-links">
                                                <li><Link to="#">Tajweed</Link></li>
                                                <li><Link to="#">Quran</Link></li>
                                                <li><Link to="#">Arabic</Link></li>
                                                <li><Link to="#">Memorization</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Middle logo section */}
                            <div className="col-xl-2 col-lg-2 col-sm-12 text-center">
                                <div className="widget footer-widget mb-5 mb-lg-0">
                                    <div className="footer-logo">
                                        <img src="assets/images/logo.jpg" alt="" className="img-fluid" />
                                    </div>
                                    {/* Footer social icons */}
                                    <div className="footer-socials mt-5">
                                        <span className="me-2" style={{ color: 'white' }}>CONNECT :</span>
                                         <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                                        <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
                                    </div>
                                </div>
                            </div>

                            {/* Right-side content */}
                            <div className="col-xl-4 col-lg-4 col-sm-12">
                                <div className="row">
                                    <div className="col-xl-6 col-sm-6">
                                        <div className="footer-widget mb-5 mb-lg-0">
                                            <h5 className="widget-title">LINKS</h5>
                                            <ul className="list-unstyled footer-links">
                                                <li><Link to="#">Facebook</Link></li>
                                                <li><Link to="#">Instagram</Link></li>
                                                <li><Link to="#">YouTube</Link></li>
                                                <li><Link to="#">LinkedIn</Link></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-sm-6">
                                        <div className="footer-widget mb-5 mb-lg-0">
                                            <h5 className="widget-title">ADDRESS</h5>
                                            <ul className="list-unstyled footer-links">
                                                <li><Link to="#">+0800 327 8534</Link></li>
                                                <li><Link to="#">bayyiyanacademey.com</Link></li>
                                                <li><Link to="#">123 Fifth Floor East 26th Street, New York, NY 10011</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-btm">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-sm-12 col-lg-6">
                                <p className="mb-0 copyright text-sm-center text-lg-start">© 2023 bayyaiyan Academy All rights reserved by  </p>
                            </div>

                            <div className="col-xl-6 col-sm-12 col-lg-6">
                                <div className="footer-btm-links text-start text-sm-center text-lg-end">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><Link to="#"> Terms of Service</Link></li>
                                        <li className="list-inline-item"><Link to="#">Join Us</Link></li>
                                        <li className="list-inline-item"><Link to="#">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="fixed-btm-top">
                    <Link to="#top-header" className="js-scroll-trigger scroll-to-top"><i className="fa fa-angle-up"></i></Link>
                </div>
            </section>
        </>
    );
}

export default FooterOne;

