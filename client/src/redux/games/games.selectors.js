import { createSelector } from 'reselect';

const selectGames = state => state.game;

export const selectEventGames = createSelector(
    [selectGames],
    game => game.games
);

