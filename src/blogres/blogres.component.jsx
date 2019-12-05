import React from 'react';
import './blogres.styles.scss'


const BlogRes = () => (
    <div className='container-fluid blogres-container'>
        <div className='row blogres-row'>
            <div className='col-3 blogres-col-image-1'></div>
            <div className='col-8 blogres-col-content'>
                <h2 className='blogres-col-content-title'>Generals get 1st win!!!</h2>
                <h4 className='blogres-col-content-subtitle'>
                    Oct 19th
                    <br />
                    TN Game 7 Fall Championship
                    <br />
                    Murfreesboro, TN
                </h4>
                <p className='blogres-col-content-text'>
                    The Generals managed to take down the Showcase Prospects by a score of 8-6, securing their first win as a 
                    newly formed Franklin, TN travel team.  Solid defense and clutch hitting helped deliver a decisive win in the Fall Championship Game 7 
                    Tournament held on October 19th.  The team continues to show great overall improvements and will be in prime position come this spring
                    to deliver continued momentum and are hopeful the victories will start to pile up.
                </p>
                <br />
                <a target={"_blank"}  href="https://game7baseball.azurewebsites.net/Events/Details/171/tn-game-7-fall-championships?division=11U-AA#schedule" class="btn btn-danger btn-lg active" role="button" aria-pressed="true">Tournament Details </a>
            </div>
        </div>
        <div className='row blogres-row'>
            <div className='col-3 blogres-col-image-2'></div>
            <div className='col-8 blogres-col-content'>
                <h2 className='blogres-col-content-title'>Let the tournaments begin...</h2>
                <h4 className='blogres-col-content-subtitle'>
                    Sep 28th
                    <br />
                    TN Game 7 Fall Classic
                    <br />
                    Madison, TN
                </h4>
                <p></p>
                <p className='blogres-col-content-text'>
                    The Franklin Generals made their inaugural debut at the TN Game 7 Fall Classic held in Madison, TN.  The Generals
                    fought a good battle over the course of the 3 game schedule, coming up just short of their first win.  Practice continues
                    weekly to improve upon baseball fundamentals.
                </p>
                <p></p>
                <br />
                <a target={"_blank"}  href="https://game7baseball.azurewebsites.net/Events/Details/168/tn-game-7-fall-classic?division=11U-AA#schedule" class="btn btn-danger btn-lg active" role="button" aria-pressed="true">Tournament Details </a>
            </div>
        </div>
    </div>
)


export default BlogRes;