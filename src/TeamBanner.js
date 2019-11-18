import React, { Component } from 'react';
import './TeamBanner.scss'


class TeamBanner extends Component {
    render() {
        return (
                <div className='base fixed-top'>
                    <h1 className='banner text-center'>
                        GENERALS<span className='span-banner-text'></span> BASEBALL
                    </h1> 
                    <div className='circle'>
                        <h1 className='banner-circle display-3 text-center ml-2 mt-2'>
                            <span className='span-circle-text'>F</span> 
                        </h1> 
                    </div>
                </div>
        );
    }
}

export default TeamBanner;