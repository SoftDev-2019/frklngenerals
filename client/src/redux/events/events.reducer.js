

const INITIAL_STATE = {
    events: [
	{
	id: 1,
        EVENT: 'TN Game 7 Fall Classic',
        PLACE: 9,
        POINTS: 50,
        DATE: '9/28/2019',
        DIVISION: '11U-AA',
        WLT: '0-3-0',
        AVG_RA: 10.33,
        AVG_RD: -7.67,
        AVG_RS: 2.67,
        MAX_RS: 5
        },
    	{
        id: 2,
        EVENT: 'TN Game 7 Fall Championships',
        PLACE: 4,
        POINTS: 80,
        DATE: '10/19/2019',
        DIVISION: '11U-AA',
        WLT: '1-3-0',
        AVG_RA: 7.5,
        AVG_RD: -2.75,
        AVG_RS: 4.75,
        MAX_RS: 8,
        }
      ]
   }

const eventsReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default eventsReducer;