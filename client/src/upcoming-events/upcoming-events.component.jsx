import React from 'react'
import { connect } from 'react-redux';
import { selectUpcomingEvents } from '../redux/upcoming-events/upcoming-events.selectors';
import { createStructuredSelector } from 'reselect';
import './upcoming-events.styles.scss';

const UpcomingEventsPage = ({ upcomingEvent }) => (
        <div className='games-table-main'>
                <table className="table table-hover table-sm">
                    <thead className='games-table-main-thead'>
                        <tr>
                            <th>DATE</th>
                            <th>EVENT</th>
                            <th>DIVISION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {upcomingEvent.map( upcomingEvent => (
                            <tr className='game-data-tr'>
                                <td>{upcomingEvent.DATE}</td>
                                <td>{upcomingEvent.EVENT}</td>
                                <td>{upcomingEvent.DIVISION}</td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
    )


const mapStateToProps = createStructuredSelector ({
    upcomingEvent: selectUpcomingEvents
});

export default connect(mapStateToProps)(UpcomingEventsPage);
