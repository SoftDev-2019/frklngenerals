import React, { Component } from 'react';
import './Roster.css';

class Roster extends Component {
    render() {
        return (
            <div className='RosterDetails row'>
                <div className='RosterPlayers col-12 col-lg-12'>
                    <div className='Roster'>
                        <h2><b>Generals Roster</b></h2>
                        <table className="table table-borderless table-hover table-sm">
                            <thead className='GamesBanner-thead'>
                                <tr>
                                    <th>Player #</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Position(s)</th>
                                    <th>Bats</th>
                                    <th>Throws</th>
                                </tr>
                            </thead>
                            <tbody className='roster-tbody'>
                                {this.props.players.map(p => (
                                        <tr className='roster-row'>
                                            <td className='td-player'>{p.playerNum}</td>
                                            <td>{p.firstName}</td>
                                            
                                                <td>{p.lastName}</td>
                                   
                                            <td>{p.age}</td>
                                            <td>{p.position}</td>
                                            <td>{p.bats}</td>
                                            <td>{p.throws}</td>
                                        </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
       );
    }
}

export default Roster;