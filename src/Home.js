import React from 'react';
import './Home.styles.scss';
import HomePageResponsive from './homepage_responsive/homepage_responsive.component';


const Home = () => (
  <div className='container'>
    <div className='row'>
      <div className='col justify-content-center'>
        <HomePageResponsive />
      </div>
    </div>
  </div>
);

export default Home;