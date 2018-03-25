import { getYear } from 'date-fns'
import React from 'react'

import ContentWrapper from '../content/ContentWrapper'
import './Footer.css'

const Footer = () => (
    <footer className='footer'>
        <ContentWrapper>
        
            <div className='footer-copyright'>
                &copy; 2013 - { getYear(new Date()) }
                &nbsp;
                TNT Cuts.
                &nbsp;&nbsp;
                All Rights Reserved.
            </div>
            
            <div className='footer-cred'>
                <a className='footer-cred-link' href='https://tannerfisc.us?ref=tntcuts' target='_blank'>
                    <span className='footer-cred-link__description'>
                        Website by
                    </span>
                    <svg className='footer-cred-link__logo'
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 114.000000 123.000000"
                        preserveAspectRatio="xMidYMid meet"
                        >
                        <g
                            transform="translate(0.000000,123.000000) scale(0.100000,-0.100000)"
                            fill="currentColor"
                            stroke="none"
                        >
                            <path d="M503 1206 c-65 -21 -381 -206 -424 -250 -60 -60 -69 -104 -69 -346 0 -242 9 -286 69 -347 49 -49 380 -238 444 -254 72 -17 120 0 321 114 284 162 286 166 286 487 0 320 -3 325 -279 484 -220 126 -260 139 -348 112z m357 -406 c0 -19 -7 -20 -105 -20 l-105 0 0 -90 0 -90 75 0 c68 0 75 -2 75 -20 0 -18 -7 -20 -75 -20 l-75 0 0 -95 c0 -95 0 -95 -25 -95 l-25 0 0 205 0 205 -60 0 -60 0 0 -205 0 -205 -25 0 -25 0 0 205 0 205 -65 0 c-58 0 -65 2 -65 20 0 20 7 20 280 20 273 0 280 0 280 -20z" />
                        </g>
                    </svg>
                </a>
            </div>
            
        </ContentWrapper>
    </footer>
)

export default Footer