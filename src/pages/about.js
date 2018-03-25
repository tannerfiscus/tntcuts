import React from 'react'
import Link from 'gatsby-link'

import AboutFacts from '../components/about/AboutFacts'
import Banner from '../components/banner/Banner'
import bannerImage from '../images/hair-from-back.jpg'
import ContentWrapper from '../components/content/ContentWrapper'
import StylistImage from '../images/stylist.jpg'
import './about.css';

const About = () => (
    <main>
        <Banner
            image={bannerImage}
            title='About Us'
        />
        
        <ContentWrapper>
        
            <div className='about-text'>
                <p>TNT Cuts is a full service hair salon located in Kittanning, Pennsylvania. It is owned and operated by Patti Fiscus. We offer a wide range of products; ranging from Redken, Bed Head, Nioxin, Sexyhair, and Rockaholic, along with an extensive list of services.</p>

                <p>TNT Cuts offers dedicated, casual, quiet, and comfortable servicing for all clientele. Owner Patti Fiscus provides more than 31 years of experience!</p>

                <p>Freshen up your look with adult and kids cuts, styles, color, perms, high styling, foil and cap highlighting, low lighting, and facial waxing.</p>
            </div>
            
            <AboutFacts />
            
            <div className='about-stylist'>
                <h2>Patti Fiscus, owner and stylist</h2>
                
                <div className='about-stylist-content'>
                
                    <img className='about-stylist-content__image' src={StylistImage} />
                
                    <section>
                        <p>She has 31 years of experience in the industry.</p>

                        <p>The salon offers a variety of looks for the entire family at practical prices including cutting, styling, perming, coloring, facial waxing, and high styling updos.</p>

                        <p>The salon takes pride in using Redken®, and NIOXIN® products, also available for retail.</p>
                    </section>
                    
                </div>
            </div>
            
        </ContentWrapper>
    </main>
)

export default About
