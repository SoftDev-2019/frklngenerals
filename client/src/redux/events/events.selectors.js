import { createSelector }  from 'reselect';


const selectEvent = state => state.event;

export const selectEventEvents = createSelector(
    [selectEvent],
    event => event.events
)