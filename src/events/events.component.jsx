import React from 'react'
import { connect } from 'react-redux';
import { selectEventEvents } from '../redux/events/events.selectors';
import { createStructuredSelector } from 'reselect';
import './events.styles.scss';

const EventsPage = ({ event }) => (
        <div className='games-table-main'>
                <table className="table table-hover table-sm">
                    <thead className='games-table-main-thead'>
                        <tr>
                            <th>PLACE</th>
                            <th>POINTS</th>
                            <th>DATE</th>
                            <th>EVENT</th>
                            <th>DIVISION</th>
                            <th>W-L-T</th>
                            <th>AVG RA</th>
                            <th>AVG RD</th>
                            <th>AVG RS</th>
                            <th>MAX RS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {event.map( event => (
                            <tr className='game-data-tr'>
                                <td>{event.PLACE}</td>
                                <td>{event.POINTS}</td>
                                <td>{event.DATE}</td>
                                <td>{event.EVENT}</td>
                                <td>{event.DIVISION}</td>
                                <td>{event.WLT}</td>
                                <td>{event.AVG_RA}</td>
                                <td>{event.AVG_RD}</td>
                                <td>{event.AVG_RS}</td>
                                <td>{event.MAX_RS}</td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
    )


const mapStateToProps = createStructuredSelector ({
    event: selectEventEvents
});

export default connect(mapStateToProps)(EventsPage);
