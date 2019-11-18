import React from 'react';
import './LandingPage.scss';
import landingPageLogo from './Images/crossedBats.png';
import { Link } from 'react-router-dom';


const landingPage = () => (
    <div className='jumbotron landing-page-container'>
        <div className='landing-page'>
            <div className='landingLogo'>
                <img className='landing-logo-image' src={landingPageLogo} alt='landinglogo' />
                <Link className='sign-in-page-link' exact to='/signin'>
                    Sign In
                </Link>
            </div>
        </div>
    </div>
)

export default landingPage;