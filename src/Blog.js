import React, { Component } from 'react';
import BlogImage1 from './Images/generals1.jpeg';
import { Link } from 'react-router-dom';
import './Blog.scss';
import BlogImage2 from './Images/FallClassic.PNG';

class Blog extends Component {
    render() {
        return (
            <div className='jumbotron Blog'>
                <div className='Blog row justify-content-start mt-5 ml-5'>
                    <div className='Blog-group col-11 col-lg-5'>
                        <div class="Blog-card">
                        <div class="row no-gutters">
                            <div class="col-auto">
                                <img src={BlogImage1} style={{width: '520px', height: '350px'}} class="img-fluid" alt="" />
                            </div>
                            <div class="col">
                                <div class="card-block px-2">
                                    <Link exact to='/blog' style={{ color: 'red' }} className='blogLink'>
                                        <h4 className='card-title'>Generals get 1st win!</h4>
                                    </Link>
                                    <p className='card-subtitle'>Oct 19th</p>
                                    <p className='card-subtitle'>Murfreesboro, TN</p>
                                    <p class="card-text">The Generals managed to take down the Showcase Prospects by a score of 8-6, securing their first win as a 
                                        newly formed Franklin, TN travel team.  Solid defense and clutch hitting helped deliver a decisive win in the Fall Championship Game 7 
                                        Tournament held on October 19th.  The team continues to show great overall improvements and will be in prime position come this spring
                                        to deliver continued momentum and are hopeful the victories will start to pile up.</p>
                                    <br />
                                    <a href="https://game7baseball.azurewebsites.net/Events/Details/171/tn-game-7-fall-championships?division=11U-AA#schedule" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Tournament Details </a>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="Blog-card">
                        <div class="row no-gutters">
                            <div class="col-auto">
                                <img src={BlogImage2} style={{width: '520px', height: '350px'}} class="img-fluid" alt="" />
                            </div>
                            <div class="col">
                                <div class="card-block px-2">
                                    <Link exact to='/blog' style={{ color: 'red' }} className='blogLink'>
                                        <h4 className='card-title'>Let the tournaments begin...</h4>
                                    </Link>
                                    <p className='card-subtitle'>Sep 29</p>
                                    <p className='card-subtitle'>Madison, TN</p>
                                    <p class="card-text">The Franklin Generals made their inaugural debut at the TN Game 7 Fall Classic held in Madison, TN.  The Generals
                                    fought a good battle over the course of the 3 game schedule, coming up just short of their first win.  Practice continues
                                    weekly to improve upon baseball fundamentals.
                                    </p>
                                    <br />
                                    <a href="https://game7baseball.azurewebsites.net/Events/Details/168/tn-game-7-fall-classic?division=11U-AA#schedule" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Tournament Details </a>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                       </div>
                </div>
            </div>
        );
    }
}

export default Blog;