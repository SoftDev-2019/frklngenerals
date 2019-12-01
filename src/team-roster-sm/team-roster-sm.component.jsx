import React from 'react'
import './team-roster-sm.styles.scss';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectRosterPlayer } from '../redux/team-roster/team-roster.selectors';

const TeamRosterSm = ({ roster }) => (
    <div className='container-fluid roster-page-sm-data'>
        <div className='row roster-page-sm-data-row'>
        <table className="table table-striped table-bordered">
                    <thead className='roster-page-sm-data-header'>
                        <tr>
                            <th>JERSEY#</th>
                            <th>PLAYER</th>
                            <th>AGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {roster.map( roster => (
                            <tr className='roster-page-sm-table-row'>
                                <td>{roster.JERSEYNUM}</td>
                                <td>{roster.PLAYER}</td>
                                <td>{roster.AGE}</td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    roster: selectRosterPlayer
})

export default connect(mapStateToProps)(TeamRosterSm);