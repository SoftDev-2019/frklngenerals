import React from 'react';
import HomePageContent from './HomePageContent.component';
import './Home.styles.scss';



const Home = () => (
  <div className='jumbotron home-div'>
    <div className='home-container'>
        <HomePageContent />
    </div>
  </div>
);

export default Home;