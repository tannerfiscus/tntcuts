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
                <p>I will be reopening on <b>Tuesday, June 9, 2020.</b></p>
                <br/>
                <p>As there is a lot of catching up to do, please be sure to call ahead and book an appointment.</p>
                <p>I will try to get back to you all in a timely manner. Please bear with me and be patient as we all get back on track.</p>
                <p>Can't wait to see you all,</p>
                <p>Patti Fiscus<br/>TNT Cuts</p>
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
