import React, { Component } from 'react';
import cardLogo from './Images/cardLogo.png';
import BrockBatStats from './Images/BrockBatStats10-11.png';
import BrockPitchStats from './Images/BrockPitchStats10-11.png';
import './PlayerDetails.css';


class PlayerDetails extends Component {
    
    render() {
        let { player } = this.props;
        return (
            <div className='PlayerDetails row justify-content-center'>
                <div className='PlayerCard-front col-3 col-lg-3'>
                    <div className='PlayerDetails-cardFront'>
                        <div className="row no-gutters">
                            <div className="col-auto">
                                <img className='playerImg' src={player.src} style={{width: '450px', height: '550px', paddingBottom: '90px', paddingTop: '20px', paddingRight: '20px', paddingLeft: '20px', border: '4px solid black'}} class="img-fluid" alt={player.lastName} />
                                <img className='logoImg' src={cardLogo} alt={cardLogo} />
                                <h3 className='imgText3'>{player.firstName} {player.lastName}</h3>
                                <h1 className='imgText1'>{player.position} </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <i class="fas fa-pen-square fa-3x" style={{color: 'yellow', marginLeft: '100px', marginTop: '10px'}}></i>
                        <i class="fas fa-minus-square fa-3x" style={{color: 'black', paddingLeft: '10px'}}></i>
                    </div>
                </div>
                <div className='PlayerCardBack container'>
                    <div className='PlayerDetails-cardBack'>
                        <div className='cardBack container'>
                            <h1 className='textPnum'>46</h1>
                            <h2 className='cardBackTitle'>{player.firstName} {player.lastName} | 11U Franklin Generals</h2>
                            <h4 className='cardBackData display-5'>{player.position} </h4>
                            <img className='cardBackStats' src={BrockBatStats} alt={BrockBatStats} />
                            <img src={BrockPitchStats} alt={BrockPitchStats} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlayerDetails;