import React, { Component } from 'react';
import gameData from './gamesBanner.data';
import './GamesBanner.css';

class GamesBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameData: gameData
        }
    }
    render() {
        return (
            <div className='GamesBanner'>
                <table className="table table-hover table-sm">
                    <thead className='GamesBanner-thead'>
                        <tr>
                            <th>Game</th>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Vs.</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.gameData.map( data => (
                            <tr className='gameData-tr'>
                                <td className='td-gamenum'>{data.Game}</td>
                                <td>{data.Event}</td>
                                <td>{data.Date}</td>
                                <td>{data.Vs}</td>
                                <td>{data.Result}</td>  
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GamesBanner;