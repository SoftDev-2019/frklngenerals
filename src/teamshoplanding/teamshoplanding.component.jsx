import React from 'react';
import './teamshoplanding.styles.scss';
import Directory from '../directory/directory.component';

const TeamShopLanding = () => (
    <div className='jumbotron teamshoplanding-container'>
        <div className='teamshoplanding'>
            <h1 className='teamshopLanding-title'>TEAM SHOP</h1>
            <Directory />
        </div>
    </div>
)

export default TeamShopLanding;