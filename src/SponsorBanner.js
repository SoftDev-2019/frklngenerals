import React, { Component } from 'react';
import Quinns from './Images/Quinns.jpg';
import FBClogo from './Images/FBClogo.png';
import MusicCityTaxlogo from './Images/musicictytax2.png';
import './SponsorBanner.css';

class SponsorBanner extends Component {
    render() {
        return (
            <div className='SponsorBanner d-inline-block'>
                <img src={Quinns} width="80" height="80" alt='sponsorlogo'></img>
                <img src={FBClogo} width="80" height="80" alt='sponsorlogo'></img>
                <img src={MusicCityTaxlogo} width="150" height="70" alt='sponsorlogo'></img>
            </div>
        );
    }
}

export default SponsorBanner;