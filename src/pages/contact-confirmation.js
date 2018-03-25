import React from 'react'

import ContentWrapper from '../components/content/ContentWrapper'
import './contact.css';

const ContactConfirmation = () => (
    <main>
        <ContentWrapper>
            <div className='contact-confirmation'>
                <i className='fa fa-check-circle' />
                <h2>Thank you!</h2>
                <p>Your message has been received. We will get back to you as promptly as possible.</p>
                <p>For an even quicker response, reach out to us at 724-543-7473.</p>
            </div>
        </ContentWrapper>
    </main>
)

export default ContactConfirmation