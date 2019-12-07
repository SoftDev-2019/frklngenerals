import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import shopReducer from './shop/shop.reducer';
import directoryReducer from './directory/directory.reducer';
import eventsReducer from './events/events.reducer';
import gameReducer from './games/games.reducer';
import teamRosterReducer from './team-roster/team-roster.reducer';
import upcomingEventsRedcuer from '../redux/upcoming-events/upcoming-events.reducer';

const persistCongfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    event: eventsReducer,
    game: gameReducer,
    roster: teamRosterReducer,
    upcomingEvent: upcomingEventsRedcuer
});

export default persistReducer(persistCongfig, rootReducer);