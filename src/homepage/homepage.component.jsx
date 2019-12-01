import React, { Component } from 'react';
import './homepage.styles.scss';
import { withRouter } from 'react-router-dom';
import GamesPage from '../games/games.component';
import EventsPage from '../events/events.component';
import EventsPageSm from '../events-sm/events-sm.component';
import TeamRoster from '../team-roster/team-roster.component';
import TeamRosterSm from '../team-roster-sm/team-roster-sm.component';
import UpcomingEventsPage from '../upcoming-events/upcoming-events.component';
import GamesPageSm from '../games-sm/games-sm.component';
import UpcomingEventsPageSm from '../upcoming-events-sm/upcoming-events-sm.component';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTeamInfo: true,
            isTeamInfoSm: false,
            isRoster: false,
            isRosterSm: false,
            isUpcomingEvents: false,
            isUpcomingEventsSm: false
        };
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick1Sm = this.handleClick1Sm.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick2Sm = this.handleClick2Sm.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
        this.handleClick3Sm = this.handleClick3Sm.bind(this);

    }
    handleClick1Sm() {
        this.setState(prevState => ({
        isTeamInfoSm: !prevState.isTeamInfoSm, isRosterSm: '', isUpcomingEventsSm: '' 
      }));
    }
    handleClick1() {
        this.setState({isTeamInfo: true, isRoster: '', isUpcomingEvents: '' }) 
    }
    
    handleClick2() {
        this.setState({isRoster: true, isTeamInfo:'', isUpcomingEvents: '' }) 
    }
    handleClick2Sm() {
        this.setState(prevState => ({
            isRosterSm: !prevState.isRosterSm, isTeamInfoSm:'', isUpcomingEventsSm: '' 
        }))
    }
    handleClick3() {
        this.setState({isUpcomingEvents: true, isTeamInfo: '', isRoster: '' }) 
    }
    handleClick3Sm() {
        this.setState(prevState => ({
            isUpcomingEventsSm: !prevState.isUpcomingEventsSm, isTeamInfoSm: '', isRosterSm: '' 
        }))
    }
    render() {
        return (
            <div className='container-fluid homepage-teaminfo-container'>
                <div className='row homepage-teaminfo-row1'>
                    <div className='col-md-2 d-none d-sm-none d-md-inline d-lg-inline d-xl-inline homepage-teaminfo-row1col1'></div>
                    <div className='col-md-6 col-xs-12 homepage-teaminfo-row1col2'>
                        <span className='homepage-teaminfo-row1col2-title'>FRANKLIN GENERALS 11U</span>
                        <br />
                        <span className='homepage-teaminfo-row1col2-city'>Franklin, TN </span>
                        <br />
                        <span className='homepage-teaminfo-row1col2-staff-headcoach'>HEAD COACH:  Jason Gant</span>
                        <br />
                        <span className='homepage-teaminfo-row1col2-team-email'>EMAIL: <a href="mailto:thefranklingenerals@gmail.com" style={{color: 'black', textDecoration: 'underline'}}>thefranklingenerals@gmail.com</a></span>
                    </div>
                    <div className='col-4 homepage-teaminfo-row1col3'></div>
                </div>
                <div className='row homepage-teaminfo-row2'>
                    <div className='col-md-2 d-none d-sm-none d-md-inline d-lg-inline d-xl-inline homepage-teaminfo-row2col1'>
                        <button  type="button" className={`${this.state.isTeamInfo ? 'btn team-info-body-menu-button-active': 'btn team-info-body-menu-button'}`} onClick={this.handleClick1}>TEAM INFO</button>
                        <button  type="button" className='btn team-info-body-menu-button' onClick={this.handleClick2}>ROSTER</button>
                        <button  type="button" className='btn team-info-body-menu-button' onClick={this.handleClick3}>UPCOMING EVENTS</button>
                    </div>
                    <div className='col-xs-8 d-sm-inline d-md-none d-lg-none d-xl-none homepage-teaminfo-row2col1-sm'>
                        <button  type="button" className='btn team-info-body-menu-button-sm' onClick={this.handleClick1Sm}>TEAM INFO</button>
                            { this.state.isTeamInfoSm ? (
                                    <div className='teaminfo-sm-container'>
                                        <span className='homepage-teaminfo-row2col2-events-title-sm'>EVENTS</span>
                                        <EventsPageSm /> 
                                        <span className='homepage-teaminfo-row2col2-games-title-sm'>GAMES</span>  
                                        <GamesPageSm />
                                    </div> 
                                ) : '' }
                        <button  type="button" className='btn team-info-body-menu-button-sm' onClick={this.handleClick2Sm}>ROSTER</button>
                            { this.state.isRosterSm ? (
                                <div className='teamroster-sm-container'>
                                    <TeamRosterSm />  
                                </div> ) : ''}
                        <button  type="button" className='btn team-info-body-menu-button-sm' onClick={this.handleClick3Sm}>UPCOMING EVENTS</button>
                            { this.state.isUpcomingEventsSm ? (
                                    <div className='teamupcomingevent-sm-container'>
                                        <UpcomingEventsPageSm />  
                                </div> ) : ''}
                    </div>
                    <div className='col-10 d-none d-sm-none d-md-inline d-lg-inline d-xl-inline homepage-teaminfo-row2col2'>
                        <div className='homepage-teaminfo-row2col2-events' >
                            { this.state.isTeamInfo ? (
                                <div>
                                    <span className='homepage-teaminfo-row2col2-events-title'>EVENTS</span>
                                    <EventsPage />  
                                </div> 
                            ) : this.state.isRoster ? (
                                <div>
                                    <span className='homepage-teaminfo-row2col2-events-title'>ROSTER</span>
                                    <TeamRoster />  
                                </div> ) : (
                                    <div>
                                    <span className='homepage-teaminfo-row2col2-events-title'>UPCOMING EVENTS</span>
                                    <UpcomingEventsPage />  
                                </div>
                                )
                            }
                            </div>
                            
                            { this.state.isTeamInfo ? (
                            <div className='col-10 d-none d-sm-none d-md-inline d-lg-inline d-xl-inline homepage-teaminfo-row2col2-games'>
                                <span className='homepage-teaminfo-row2col2-games-title'>GAMES</span>  
                                <GamesPage />  
                            </div>
                            ) : ''}
                        </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HomePage);