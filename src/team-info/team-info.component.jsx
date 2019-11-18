import React, { Component } from 'react';
import './team-info.styles.scss'
import { withRouter } from 'react-router-dom';
import GamesPage from '../games/games.component';
import EventsPage from '../events/events.component';
import TeamRoster from '../team-roster/team-roster.component';
import UpcomingEventsPage from '../upcoming-events/upcoming-events.component';


class TeamInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTeamInfo: true,
            isRoster: false,
            isUpcomingEvents: false
        };
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);

    }
    handleClick1() {
        this.setState({isTeamInfo: true, isRoster: '', isUpcomingEvents: '' }) 
    }
    handleClick2() {
        this.setState({isRoster: true, isTeamInfo:'', isUpcomingEvents: '' }) 
    }
    handleClick3() {
        this.setState({isUpcomingEvents: true, isTeamInfo: '', isRoster: '' }) 
    }
    render() {
        return (
            <div className='jumbotron team-info'>
                    <div className='team-info-header'>
                        <div className='team-info-header-logo'></div>
                        <div className='team-info-header-title'>
                            <span className='title'>FRANKLIN GENERALS 11U</span>
                            <br />
                            <span className='city'>Franklin, TN </span>
                            <br />
                            <span className='staff-headcoach'>HEAD COACH:  Jason Gant</span>
                            <br />
                            <span className='staff-assistantcoaches'>ASSISTANT COACHES: Dom Bruzzese, Mark Ralston, Shane Parkerson</span>
                            <br />
                            <span className='team-email'>EMAIL: <a href="mailto:thefranklingenerals@gmail.com" style={{color: 'black', textDecoration: 'underline'}}>thefranklingenerals@gmail.com</a></span>
                        </div>
                    </div>
                    <div className='flex-conatiner team-info-body'>
                        <div className='team-info-body-menu'>
                        <button className={`${this.state.isTeamInfo ? 'btn team-info-body-menu-button-active': 'btn team-info-body-menu-button'}`} onClick={this.handleClick1}>TEAM INFO</button>
                            <button  type="button" className='btn team-info-body-menu-button' onClick={this.handleClick2}>ROSTER</button>
                            <button  type="button" className='btn team-info-body-menu-button' onClick={this.handleClick3}>UPCOMING EVENTS</button>
                            <div className='team-info-body-sponsors'></div>
                        </div>
                        <div className='team-info-body-events' style={{ flex: '0 0 1460px'}}>
                        { this.state.isTeamInfo ? (
                            <div>
                                <span className='events-title'>EVENTS</span>
                                <EventsPage />  
                            </div> 
                        ) : this.state.isRoster ? (
                            <div>
                                <span className='events-title'>ROSTER</span>
                                <TeamRoster />  
                            </div> ) : (
                                <div>
                                <span className='events-title'>UPCOMING EVENTS</span>
                                <UpcomingEventsPage />  
                            </div>
                            )
                        }
                        </div>
                        
                        { this.state.isTeamInfo ? (
                        <div className='team-info-body-games'>
                            <span className='games-title'>GAMES</span>  
                            <GamesPage />  
                        </div>
                        ) : ''}
                    </div>

                </div>
        );
    }
}

export default withRouter(TeamInfo);