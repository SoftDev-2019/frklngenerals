import { createSelector } from 'reselect';

const selectTeamShop = state => state.teamShop;

export const selectTeamShopSections = createSelector(
    [selectTeamShop],
    teamShop => teamShop.sections
)

