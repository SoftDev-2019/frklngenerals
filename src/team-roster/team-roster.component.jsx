import React from 'react'
import './team-roster.styles.scss';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectRosterPlayer } from '../redux/team-roster/team-roster.selectors';

const TeamRoster = ({ roster }) => (
    <div className='games-table-main'>
                <table className="table table-hover table-sm">
                    <thead className='roster-table-main-thead'>
                        <tr>
                            <th>JERSEY#</th>
                            <th>PLAYER</th>
                            <th>AGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roster.map( roster => (
                            <tr className='roster-data-tr'>
                                <td className='roster-data-jerseynum'>{roster.JERSEYNUM}</td>
                                <td>{roster.PLAYER}</td>
                                <td>{roster.AGE}</td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
);

const mapStateToProps = createStructuredSelector({
    roster: selectRosterPlayer
})

export default connect(mapStateToProps)(TeamRoster);