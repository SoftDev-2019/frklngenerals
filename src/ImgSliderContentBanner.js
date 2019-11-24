import React, { Component } from 'react';
import SwiftSlider from 'react-swift-slider';
import ContentImage1 from './Images/generals1.jpeg';
import ContentImage2 from './Images/Generals2.jpeg';
import ContentImage3 from './Images/FallClassic.PNG'
import './ImgSliderContentBanner.css';


const data =  [
    {'id':'1','src':ContentImage1},
    {'id':'2','src':ContentImage2},
    {'id':'2','src':ContentImage3},
  ];

class ImgSliderContentBanner extends Component {
    
    render() {
        return (
            <div className='ImgSliderContentBanner'>
                <SwiftSlider showDots={false} height={700} data={data}/>
            </div>
        );
    }
}

export default ImgSliderContentBanner;