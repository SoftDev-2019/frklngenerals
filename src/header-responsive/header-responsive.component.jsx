import React from 'react';
import './header-responsive.styles.scss'
import Header from '../Header/Header.component';

const HeaderResponsive = () => (
    <div className='header-responsive-main fixed-top'>
        <div className='header-responsive-nav-links'>
          <Header />
        </div>
        <div className='header-responsive-content'>
            <span className='header-responsive-content-title'>FRANKLIN <i className="fas fa-baseball-ball fa-sm"></i> GENERALS</span>
        </div>
    </div>
);


export default HeaderResponsive;