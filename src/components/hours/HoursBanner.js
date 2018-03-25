import React from 'react'

import ContentWrapper from '../content/ContentWrapper'
import Hours from './Hours'
import './HoursBanner.css'

const HoursBanner = ({ children }) => (
    <section className='hours-banner-wrapper'>
        <ContentWrapper>
            <div className='hours-banner'>
            
                <div className='hours-banner__message'>
                    { children }
                </div>
            
                <Hours className='hours-banner__timesheet' />
                
            </div>
        </ContentWrapper>
    </section>

)

export default HoursBanner