import Helmet from 'react-helmet'
import React from 'react'
import PropTypes from 'prop-types'

import ContentWrapper from '../components/content/ContentWrapper';
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'TNT Cuts is a locally owned hair salon in Kittanning, Pennsylvania.' },
        { name: 'keywords', content: 'hair salon, hair cuts, hair cut, kittanning, kittanning hair salon, kittanning hair, kittanning cuts' },
        { name: 'author', content: 'TNT Cuts' }
      ]}
    />
    <Header />
    
    <div className='page-content'>

      <div className="page-health-notice-wrapper">
        <section className="page-health-notice">
          <ContentWrapper>
            <div className="health-notice">
                <h3><i className="fa fa-exclamation-circle" /> Attention Clients / Friends</h3>
                <br /><br />
                <p>I am <strong>temporarily closed</strong> due to the big picture. It's more important to be safe & healthy. When I learn more and am able to reopen I will be in contact with you to verify or reschedule your appointment(s). Wash your hands, stay in, be healthy, & pray this will be over soon. This is a difficult time for all of us.</p>
                <p>Thanks,<br/>Patti<br/>TNT Cuts</p>
            </div>
          </ContentWrapper>
        </section>
      </div>

      {children()}
    </div>
    
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
