import React from 'react'
import { connect } from 'react-redux';
import { selectEventGames } from '../redux/games/games.selectors';
import { createStructuredSelector } from 'reselect';
import './games-sm.styles.scss';

const GamesPageSm = ({ game }) => (
    <div className='container-fluid games-page-sm-data'>
        <div className='row games-page-sm-data-row'>
            {game.map( game => (
                <div className='col-12 games-page-sm-data-col'>
                    <p>Game #{game.id}</p>
                    <p>{game.EVENT}</p>
                    <div className='row games-page-sm-data-col-row'>
                        <div className='games-page-sm-data-col-row-col1'>
                            <p>{game.TEAM1}</p>
                            <p>{game.TEAM2}</p>
                        </div>
                        <div className='games-page-sm-data-col-row-col2'>
                            <p>{game.TEAM1SCORE}</p>
                            <p>{game.TEAM2SCORE}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    game: selectEventGames
});

export default connect(mapStateToProps)(GamesPageSm);

