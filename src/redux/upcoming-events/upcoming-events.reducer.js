const INITIAL_STATE = {
    upcomingEvents: [
        {
        id: 1,
        EVENT: 'TBD',
        DATE: 'TBD',
        DIVISION: '11U-AA',
        }
      ]
   }

const upcomingEventsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default upcomingEventsReducer;