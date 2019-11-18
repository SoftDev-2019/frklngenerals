import React, { Component } from 'react';
import './Body.css';
import GamesBanner from './GamesBanner';
import SponsorBanner from './SponsorBanner';
import ImgSliderContentBanner from './ImgSliderContentBanner';


class Body extends Component {
    render() {
        return (
            <div className = 'Body-main position-fixed'>
                    <div className='ContentBanner-sidebar'>
                        <ImgSliderContentBanner />
                        <div className='Jumbotron'>
                            <div className='ContentBanner-text'>
                                <h1 className='ContentBanner-title'>Generals Pick up 1st Win!!!</h1>
                                <p className='ContentBanner-content'>
                                    Amazing performance in securing their first win of the fall season in taking down the Showcase Prospects by score of 8-6.
                                </p>
                            </div>
                        </div>
                    </div>
                <div className='Jumbotron'>
                    <div className='Body-GamesBanner'>
                        <GamesBanner />
                    </div>
                    <div className='Body-SponsorBanner'>
                        <SponsorBanner />
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;