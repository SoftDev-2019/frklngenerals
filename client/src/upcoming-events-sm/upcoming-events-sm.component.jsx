import React from 'react'
import { connect } from 'react-redux';
import { selectUpcomingEvents } from '../redux/upcoming-events/upcoming-events.selectors';
import { createStructuredSelector } from 'reselect';
import './upcoming-events-sm.styles.scss';

const UpcomingEventsPageSm = ({ upcomingEvent }) => (
    <div className='container-fluid upcomingevents-page-sm-data'>
    <div className='row upcomingevents-page-sm-data-row'>
    <table className="table table-striped">
                <thead className='upcomingevents-page-sm-data-header'>
                    <tr>
                        <th>DATE</th>
                        <th>EVENT</th>
                        <th>DIVISION</th>
                    </tr>
                </thead>
                <tbody>
                {upcomingEvent.map( upcomingEvent => (
                            <tr className='upcomingevents-page-sm-table-row'>
                                <td>{upcomingEvent.DATE}</td>
                                <td>{upcomingEvent.EVENT}</td>
                                <td>{upcomingEvent.DIVISION}</td>
                            </tr> 
                ))}
                </tbody>
            </table>
    </div>
</div>
);


const mapStateToProps = createStructuredSelector ({
    upcomingEvent: selectUpcomingEvents
});

export default connect(mapStateToProps)(UpcomingEventsPageSm);