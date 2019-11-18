import React from 'react';
import TeamBanner from './TeamBanner';
import Routes from './Routes'
import NavBar from './NavBar';
import Home from './Home';



const Test = () => (
    <div className='test'>
        <NavBar />
        <TeamBanner />
        <Routes /> 
        <Home />
    </div>
);

export default Test;