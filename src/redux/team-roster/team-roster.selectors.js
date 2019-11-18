import { createSelector } from 'reselect';

const selectRoster = state => state.roster;

export const selectRosterPlayer = createSelector(
    [selectRoster],
    roster => roster.roster
);