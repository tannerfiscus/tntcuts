import Helmet from 'react-helmet'
import React from 'react'
import Link from 'gatsby-link'

import AboutFacts from '../components/about/AboutFacts'
import Banner from '../components/banner/Banner'
import bannerImage from '../images/hair-mirror-reflection.jpg'
import ContentWrapper from '../components/content/ContentWrapper'
import HoursBanner from '../components/hours/HoursBanner'
import './index.css';

const Home = () => (
    <main>    
        <Helmet title='TNT CUTS | Hair Salon in Kittanning, PA' />
        
        <Banner
            image={bannerImage}
            title='<strong>Freshen up your look</strong> at TNT Cuts'
        />
        
        <HoursBanner>
            <div>
                <p>TNT Cuts is a full service hair salon located in Kittanning, Pennsylvania.</p>

                <p>We offer dedicated, casual, quiet, and comfortable servicing for all clientele.</p>

                <p>Freshen up your look with adult and kids cuts, styles, color, perms, high styling, foil and cap highlighting, low lighting, and facial waxing.</p>
            </div>
        </HoursBanner>
                
        <ContentWrapper>
            <section className='homepage-content'>
                <h2 className='homepage-content__title heading-font'>
                    We offer professional hair care products to fit everyone&#39;s needs
                </h2>
                
                <AboutFacts />
            </section>
        </ContentWrapper>
        
    </main>
)

export default Home
