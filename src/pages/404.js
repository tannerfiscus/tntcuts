import Helmet from 'react-helmet'
import React from 'react'

import ContentWrapper from '../components/content/ContentWrapper'
import './404.css'

const PageNotFound = () => (
    <main>
        <Helmet title='Page Not Found | TNT Cuts' />
        
        <ContentWrapper>
            <div className='page-not-found'>
                <i className='fa fa-exclamation-circle' />
                <h2>Page Not Found</h2>
                <p>We&#39;re sorry, but the page you requested either no longer exists or is invalid.</p>
            </div>
        </ContentWrapper>
    </main>
)

export default PageNotFound