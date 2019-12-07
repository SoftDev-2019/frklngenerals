import React from 'react';
import { connect } from 'react-redux';
import { selectEventEvents } from '../redux/events/events.selectors';
import { createStructuredSelector } from 'reselect';
import './events-sm.styles.scss';


const EventsPageSm = ({ event }) => (
    <div className='container-fluid events-page-sm-data'>
        <div className='row events-page-sm-data-row'>
            {event.map( event => (
                <div className='col-12 events-page-sm-data-col'>
                    <p>Place      <span className='events-page-sm-data-span1' ></span>{event.PLACE}</p>
                    <p>Start Date <span className='events-page-sm-data-span2' ></span>{event.DATE}</p>
                    <p>Event      <span className='events-page-sm-data-span3' ></span>{event.EVENT}</p>
                    <p>Division   <span className='events-page-sm-data-span4' ></span>{event.DIVISION}</p>
                    <p>W-L-T      <span className='events-page-sm-data-span5' ></span>{event.WLT}</p>
                </div>
            ))}
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector ({
    event: selectEventEvents
});

export default connect(mapStateToProps)(EventsPageSm);