import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './blog_responsive.styles.scss';


class BlogResponsive extends Component {
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div className='col-md-4 blog-image d-none d-lg-block'></div>
                    <div className="col-md-8 col-12-xs d-none d-lg-block blog-col">
                        <div className="card-block px-2">
                            <Link exact to='/blog' style={{ color: 'red' }} className='blogLink'>
                                <h4 className='card-title'>Generals get 1st win!</h4>
                            </Link>
                            <p className='card-subtitle'>Oct 19th</p>
                            <p className='card-subtitle'>TN Game 7 Fall Championship</p>
                            <p className='card-subtitle'>Murfreesboro, TN</p>
                            <p className="card-text">The Generals managed to take down the Showcase Prospects by a score of 8-6, securing their first win as a 
                                newly formed Franklin, TN travel team.  Solid defense and clutch hitting helped deliver a decisive win in the Fall Championship Game 7 
                                Tournament held on October 19th.  The team continues to show great overall improvements and will be in prime position come this spring
                                to deliver continued momentum and are hopeful the victories will start to pile up.</p>
                            <br />
                            <a href="https://game7baseball.azurewebsites.net/Events/Details/171/tn-game-7-fall-championships?division=11U-AA#schedule" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Tournament Details </a>
                        </div>
                    </div>
                    <div className="col-md-12 col-12-xs d-lg-none blog-col">
                        <div className='blog-image-sm'></div>
                        <div className="card-block px-2">
                            <Link exact to='/blog' style={{ color: 'red' }} className='blogLink'>
                                <h4 className='card-title'>Generals get 1st win!</h4>
                            </Link>
                            <p className='card-subtitle'>Oct 19th</p>
                            <p className='card-subtitle'>TN Game 7 Fall Championship</p>
                            <p className='card-subtitle'>Murfreesboro, TN</p>
                            <br />
                            <a href="https://game7baseball.azurewebsites.net/Events/Details/171/tn-game-7-fall-championships?division=11U-AA#schedule" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Tournament Details </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className='col-md-4 blog-image-1 d-none d-lg-block'></div>
                    <div className="col-md-8 col-12-xs d-none d-lg-block blog-col">
                        <div className="card-block px-2">
                            <Link exact to='/blog' style={{ color: 'red' }} className='blogLink'>
                                <h4 className='card-title'>Let the tournaments begin!</h4>
                            </Link>
                            <p className='card-subtitle'>Sep 28th</p>
                            <p className='card-subtitle'>TN Game 7 Fall Classic</p>
                            <p className='card-subtitle'>Madison, TN</p>
                            <p className="card-text">The Franklin Generals made their inaugural debut at the TN Game 7 Fall Classic held in Madison, TN.  The Generals
                                    fought a good battle over the course of the 3 game schedule, coming up just short of their first win.  Practice continues
                                    weekly to improve upon baseball fundamentals.</p>
                            <br />
                            <a href="https://game7baseball.azurewebsites.net/Events/Details/171/tn-game-7-fall-championships?division=11U-AA#schedule" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Tournament Details </a>
                        </div>
                    </div>
                    <div className="col-md-12 col-12-xs d-lg-none blog-col">
                        <div className='blog-image-sm'></div>
                        <div className="card-block px-2">
                            <Link exact to='/blog' style={{ color: 'red' }} className='blogLink'>
                                <h4 className='card-title'>Let the tournaments begin!</h4>
                            </Link>
                            <p className='card-subtitle'>Sept 28th</p>
                            <p className='card-subtitle'>TN Game 7 Fall Classic</p>
                            <p className='card-subtitle'>Madison, TN</p>
                            <br />
                            <a href="https://game7baseball.azurewebsites.net/Events/Details/171/tn-game-7-fall-championships?division=11U-AA#schedule" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Tournament Details </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BlogResponsive;