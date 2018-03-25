import React from 'react'
import Link from 'gatsby-link'

import ContactForm from '../components/contact/ContactForm'
import ContentWrapper from '../components/content/ContentWrapper'
import HoursBanner from '../components/hours/HoursBanner'
import './contact.css';

const Contact = () => (
    <main>
    
        <iframe className='contact-map' frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=186+Blaney+Road,+Kittanning,+PA&amp;aq=0&amp;oq=186+blaney&amp;sll=41.117935,-77.604698&amp;sspn=4.294878,9.84375&amp;ie=UTF8&amp;hq=&amp;hnear=186+Blaney+Rd,+Kittanning,+Pennsylvania+16201&amp;ll=40.806928,-79.493964&amp;spn=0.018288,0.038452&amp;t=m&amp;z=14&amp;output=embed" />
    
        <HoursBanner>
            <ul className='contact-intro'>
                <li>
                    <i className='fa fa-map-marker-alt' />
                    <div>
                        <span className='contact-intro__city-state'>186 Blaney Road&nbsp;&nbsp;&nbsp;</span>
                        <span className='contact-intro__city-state'>Kittanning, PA 16201</span>
                    </div>
                </li>
                <li>
                    <i className='fa fa-phone' />
                    <a href='tel:7245437473'>(724) 543-7473</a>
                </li>
            </ul>
        </HoursBanner>
        
        <ContentWrapper>
            <div className='contact-content'>
                <h2>Is there something that we can help you with?</h2>
                <p>We truly appreciate your feedback and opinion on any matter. We will do our best to get back to you as promptly as possible.</p>
                
                <ContactForm />
            </div>
        </ContentWrapper>
    </main>
)

export default Contact