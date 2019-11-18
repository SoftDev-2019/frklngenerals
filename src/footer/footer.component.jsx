import React from 'react';
import './footer.styles.scss';


const Footer = () => (
    <div className='footer-main'>
        <div className='footer-social-media-links'>
            <a href='https://twitter.com/Cardinals?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'> <i className="fab fa-twitter fa-lg"></i> </a>
            <a href='https://www.facebook.com/Cardinals/'><i className="fab fa-facebook-f fa-lg"></i></a>  
            <a href='https://www.instagram.com/cardinals/?hl=en'><i className="fab fa-instagram fa-lg"></i></a>
        </div>
        <div className='footer-site-links'>
            <a href='https://gc.com/' style={{color: 'red', opacity: 0.8}}>GC</a>  
            <a href='https://www.playtngame7.com/' style={{color: 'red', opacity: 0.8}}>TN Game 7</a> 
            <a href='https://clubs.bluesombrero.com/default.aspx?portalid=1569' style={{color: 'red', opacity: 0.8}}>Franklin Baseball Club</a>
        </div>
        <div className='footer-copyright-info'>
            <span className='footer-copyright-info-title'>THE FRANKLIN GENERALS <i className="fas fa-baseball-ball fa-sm"></i></span>
            <span className='footer-copyright-info-text'>2019 Shane Parkerson. All Rights Reserved.</span>
        </div>
    </div>
);


export default Footer;