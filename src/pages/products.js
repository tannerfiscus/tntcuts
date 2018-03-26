import Helmet from 'react-helmet'
import React from 'react'
import Link from 'gatsby-link'

import Banner from '../components/banner/Banner'
import bannerImage from '../images/salon-view.jpg'
import ContentWrapper from '../components/content/ContentWrapper'
import Nioxin from '../images/nioxin.png'
import Redken from '../images/redken.png'
import './products.css';

const About = () => (
    <main>
        <Helmet title='Our Products | TNT Cuts' />
        
        <Banner
            image={bannerImage}
            title='Our Products'
        />
        <ContentWrapper>
            <section className='products'>
                <p>At TNT Cuts, we take pride in offering the best services with the best products available. Our wide range of products helps to bring you the style that you want.</p>

                <p>In addition, we sell most of our products for retail, so that you can take the experience from the salon to your home.</p>
                
                <p>Browse through our selection of products to see what companies we trust and have available for your convenience.</p>
            
                <div className='products__highlight'>
                    <h2>We only sell products that we believe in.</h2>
                    
                    <img alt='Nioxin' className='product-logo product-logo--nioxin' src={Nioxin} />
                    <img alt='Redken' className='product-logo product-logo--redken' src={Redken} />
                </div>
                
            </section>
        </ContentWrapper>
    </main>
)

export default About
