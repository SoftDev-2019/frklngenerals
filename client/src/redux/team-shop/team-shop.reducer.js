import TEAM_SHOP_DATA from './team-shop.data';

const INITIAL_STATE = {
  collections: TEAM_SHOP_DATA
}

const teamShopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
};

export default teamShopReducer;