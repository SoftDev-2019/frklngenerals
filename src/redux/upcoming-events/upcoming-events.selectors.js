import { createSelector }  from 'reselect';


const selectUpcomingEvent = state => state.upcomingEvent;

export const selectUpcomingEvents = createSelector(
    [selectUpcomingEvent],
    upcomingEvent => upcomingEvent.upcomingEvents
)