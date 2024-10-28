import React from 'react';
import Layout from '../../common/Layout';

import {PageBanner,ContactInfo}  from '../layouts/contact/index';



const ContactPage = () => {
    return (
        <div className="contact-page">       
            <Layout>       
                    <PageBanner
                        title="Contact"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="Contact"
                        />
                    <ContactInfo />
                  
            </Layout>
        </div>
    );
}

export default ContactPage;