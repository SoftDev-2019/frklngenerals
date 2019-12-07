import React from 'react';
import './landing-page.styles.scss'
import { Link } from 'react-router-dom';

const LandingPageSignUp = () => (
    <div className='container-fluid landing-page-sign-up-container'>
        <div className='row landing-page-sign-up-row'>
            <div className='col-3 landing-page-sign-up-col-fence'></div>
            <div className='col-6 landing-page-sign-up-col'>
                <div className='container landing-page-sign-up-container-image'></div>
                <div className='landing-page-sign-in'>
                    <Link className='landing-page-sign-in-link' exact to='/signin'>
                        Sign In
                    </Link>
                </div>
            </div>
            <div className='col-3 landing-page-sign-up-col-fence'></div>
        </div>
    </div>
)


export default LandingPageSignUp;