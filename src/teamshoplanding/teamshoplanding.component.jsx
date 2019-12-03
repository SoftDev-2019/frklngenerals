import React from 'react';
import './teamshoplanding.styles.scss';
import Directory from '../directory/directory.component';

const TeamShopLanding = () => (
    <div className='container-fluid teamshoplanding-container'>
        <div className='row teamshoplanding-row'>
            <div className='col-12 teamshoplanding-col'>
                <h1 className='teamshopLanding-col-title'>TEAM SHOP</h1>
                <div className='teamshoplanding-col-directory-menu'>
                    <Directory />
                </div>
            </div>  
        </div>
    </div>
)

export default TeamShopLanding;