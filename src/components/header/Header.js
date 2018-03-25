import classnames from 'classnames'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import React from 'react'

import ContentWrapper from '../content/ContentWrapper'
import './Header.css'

class Header extends React.PureComponent {
    constructor(props) {
        super(props)
        
        this.state = {
            isMenuVisible: false,
        }
        this.toggleNavigation = this.toggleNavigation.bind(this)
    }

    toggleNavigation() {
        this.setState(prevState => ({
            isMenuVisible: !prevState.isMenuVisible,
        }))
    }
    
    render() {
        return (
            <header>
            
                <div className='header-top'>
                    <ContentWrapper padBottom={false} padTop={false}>
                        <div className='header-top__content'>
                        
                            <a href='/contact'>
                                <i className='fa fa-map-marker-alt'></i>
                                &nbsp;&nbsp;&nbsp;
                                <span className='header-top-street-address'>
                                    186 Blaney Road,&nbsp;
                                </span>
                                Kittanning, PA 16201
                            </a>
                            
                            <a href='tel:7245437473'>(724) 543-7473</a>
                            
                        </div>
                    </ContentWrapper>
                </div>
                
                <section className='header'>
                    <ContentWrapper padBottom={false} padTop={false}>
                        <div className='header__content'>
                            <h1 className='heading-font'>
                                <a href='/'>TNT Cuts</a>
                            </h1>
                        
                            <div>
                                <a className='header-navigation-toggle' onClick={this.toggleNavigation}>
                                    {
                                        this.state.isMenuVisible ?
                                        <span className='fa fa-times' /> :
                                        <span className='fa fa-bars' />
                                    }
                                </a>
                                
                                <ul className={classnames('header-navigation', {
                                    'header-navigation--visible': this.state.isMenuVisible,
                                })}>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/about/'>About Us</Link></li>
                                    <li><Link to='/products/'>Products</Link></li>
                                    <li className='last'><Link to='/contact/'>Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </ContentWrapper>
                </section>

                
            </header>
        )
    }
}

export default Header