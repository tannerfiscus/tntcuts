import React from 'react'

import ContentWrapper from '../content/ContentWrapper'
import './Banner.css';

const Banner = ({ title, image }) => (
    <div className='banner' style={{ backgroundImage: `url(${image})` }}>
        <ContentWrapper>
            { title && <h2 className='banner__title heading-font' dangerouslySetInnerHTML={{ __html: title }} /> }
        </ContentWrapper>
    </div>
)

export default Banner
