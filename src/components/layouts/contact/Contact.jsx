import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import ContactUsForm from './ContactForm';

class ContactInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
        contacts: [
                {
                    id: 1,
                    icon: 'fa fa-envelope',
                    title: 'support@email.com',
                },  
                {
                    id: 2,
                    icon: 'fa fa-phone-alt',
                    title: '+45 234 345467',
                },  
                {
                    id: 3,
                    icon: 'fa fa-map-marker',
                    title: 'Moon Street Light Avenue, 14/05 Jupiter ',
                },
                
            ]
        }
    }
    render() {
        return (
         <section className="contact section-padding">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-4 col-lg-5">
                       <div className="contact-info-wrapper mb-5 mb-lg-0">
                           <h3>what's your story? 
                               <span>Get in touch</span>
                           </h3>
                           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores Feel Free to contact with us</p>
        
                            {
                                this.state.contacts.map((data,i) => (
                                <div className="contact-item" key={data.id}>
                                    <i className={data.icon}></i>
                                    <h5>{data.title}</h5>
                                </div>
                                ))
                            }
                        
                       </div>
                    </div>
        
                    <div className="col-xl-7 col-lg-6">
                       <ContactUsForm formStyle="contact__form form-row " />
                    </div>
                </div>
            </div>
        </section>
        
        );
    }
}

export default ContactInfo;
