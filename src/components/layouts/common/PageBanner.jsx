import React from 'react';
import { Link } from 'react-router-dom';

const PageBanner = ({ title , rootUrl , parentUrl,currentUrl}) => {
    return (
        <section className="page-header">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-8">
                        <div className="title-block">
                            <h1 dangerouslySetInnerHTML={{__html: title}}></h1>
                            <ul className="header-bradcrumb justify-content-center">
                            <li><Link to={`${rootUrl}`} dangerouslySetInnerHTML={{__html: parentUrl}}></Link></li>
                            <li className="active" aria-current="page" >
                                <span dangerouslySetInnerHTML={{__html:  currentUrl}}></span>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
    )
}

export default PageBanner;