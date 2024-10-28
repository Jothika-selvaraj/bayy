import React from 'react';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const HeaderTwo= () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
      };
    const closeMenu = () => {
        setIsMenuOpen(false);
      };
    
   
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    return (
        <>
            <header className="header-style-1"> 
                <div className="header-topbar topbar-style-1">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-xl-8 col-lg-8 col-sm-6">
                                <div className="header-contact text-center text-sm-start text-lg-start">
                                    <Link to="#">1010 Moon ave, New York, NY US</Link>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-sm-6">
                                <div className="header-socials text-center text-lg-end">
                                    <ul className="list-inline">
                                        <li className="list-inline-item"><Link to=""><i className="fab fa-facebook-f"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-pinterest"></i></Link></li>
                                        <li className="list-inline-item"><Link to="#"><i className="fab fa-youtube"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className={`header-navbar navbar-sticky ${windowWidth <= 991 ? 'mobile-menu' : ''}`} >
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="site-logo">
                            <Link to="#">
                                <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Course Thumb" class="img-fluid"/>
                            </Link>
                        </div>
            
                        <div className="offcanvas-icon d-block d-lg-none">
                        <button onClick={openMenu} className="nav-toggler"><i className="fal fa-bars"></i></button>

                        </div>
            
                        <div className="header-category-menu d-none d-xl-block">
                            <ul>
                                <li className="has-submenu">
                                    <Link to="#"><i className="fa fa-th me-2"></i>Categories</Link>
                                    <ul className="submenu">
                                        <li>
                                            <Link to="#">Design</Link>
                                            <ul className="submenu">
                                                <li><Link to="#">Design Tools</Link></li>
                                                <li><Link to="#">Photoshop mastering</Link></li>
                                                <li><Link to="#">Adobe Xd Deisgn</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="#">Developemnt</Link></li>
                                        <li><Link to="#">Marketing</Link></li>
                                        <li><Link to="#">Freelancing</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
            
                        <nav className={ `site-navbar ms-auto ${ isMenuOpen ? 'menu-on': ''}` }>
                            <Nav/>
            
                            {isMenuOpen && (
                                <button onClick={closeMenu} className="nav-close"><i className="fal fa-times"></i></button>
                            )}
                        </nav>
            
                        <div className="header-btn d-none d-xl-block">
                            <Link to="/login" className="login">Login</Link>
                            <Link to="/register" className="btn btn-main-2 btn-sm-2 rounded">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default HeaderTwo;