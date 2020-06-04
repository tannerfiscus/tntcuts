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
                <h3><i className="fa fa-info-circle" /> Reopening Information</h3>
                <br />
                <p>TNT Cuts will be reopening on <b>Tuesday, June 9, 2020.</b></p>
                <br/>
                <p>Due to a higher than normal demand, please make sure to call ahead and book an appointment.</p>
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
