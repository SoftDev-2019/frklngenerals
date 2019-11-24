import React from 'react';
import './Home.styles.scss';
import HomePageResponsive from './homepage_responsive/homepage_responsive.component';
import ImgSliderContentBanner from './ImgSliderContentBanner';

const Home = () => (
  <div className='flex-viewport'>
    <article className='list-view'>
      <article className='list-view-item' aria-hidden='true'>
        <img src='./Images/generals1.jpeg' alt=''></img>
      </article>  
    </article>
  </div>   
   
);

export default Home;