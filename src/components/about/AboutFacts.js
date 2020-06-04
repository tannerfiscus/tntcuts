import React from 'react'

import './AboutFacts.css'

const AboutFacts = () => (
    <ul className='about-facts heading-font'>
        <li className='about-fact'>
            <div className='about-fact__highlight'>
                36
            </div>
            years of experience
        </li>
        <li className='about-fact'>
            <div className='about-fact__highlight'>
                2
            </div>
            major product lines
        </li>
        <li className='about-fact'>
            <div className='about-fact__highlight about-fact__highlight--smaller'>
                Men's Night
            </div>
            tuesday evenings are men's night.<br />no appointments necessary,<br />but waiting times may vary.
        </li>
    </ul>
)

export default AboutFacts