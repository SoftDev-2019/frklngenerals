import React from 'react'
import { connect } from 'react-redux';
import { selectEventGames } from '../redux/games/games.selectors';
import { createStructuredSelector } from 'reselect';
import './games.styles.scss';

const GamesPage = ({ game }) => (
        <div className='games-table-main'>
                <table className="table table-hover table-sm">
                    <thead className='games-table-main-thead'>
                        <tr>
                            <th>GAME</th>
                            <th>EVENT</th>
                            <th>TEAM1</th>
                            <th>VS.</th>
                            <th>TEAM2</th>
                        </tr>
                    </thead>
                    <tbody>
                        {game.map( game => (
                            <tr className='game-data-tr'>
                                <td className='game-data-gamenum'>{game.id}</td>
                                <td>{game.EVENT}</td>
                                <td>{game.TEAM1}</td>
                                <td>{game.VS}</td>
                                <td>{game.TEAM2}</td>  
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
)


const mapStateToProps = createStructuredSelector ({
    game: selectEventGames
});

export default connect(mapStateToProps)(GamesPage);
