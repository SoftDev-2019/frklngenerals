

const INITIAL_STATE = {
    games: [
        {
            id: 1,
            EVENT: 'TN Game 7 Fall Classic',
            TEAM1: 'CrossHit Black',
            VS: '9-2',
            TEAM2: 'Franklin Generals 11U'
        },
        {
            id: 2,
            EVENT: 'TN Game 7 Fall Classic',
            TEAM1: 'Franklin Generals 11U',
            VS: '1-13',
            TEAM2: 'Tennessee Trojans'
        },
        {
            id: 3,
            EVENT: 'TN Game 7 Fall Classic',
            TEAM1: 'Old Hickory Generals-Smith',
            VS: '9-5',
            TEAM2: 'FranklinGenerals11U'
        },
        {
            id: 4,
            EVENT: 'TN Game 7 Fall Championship',
            TEAM1: 'CrossHit Black',
            VS: '4-2',
            TEAM2: 'Franklin Generals 11U'
      },
        {
            id: 5,
            EVENT: 'TN Game 7 Fall Championship',        
            TEAM1: 'Next Level Murfreesboro',
            VS: '6-5',
            TEAM2: 'Franklin Generals 11U'
      },
        {
            id: 6,
            EVENT: 'TN Game 7 Fall Championship',
            TEAM1: 'Showcase Prospects',
            VS: '6-8',
            TEAM2: 'Franklin Generals 11U'
      },
        {
            id: 7,
            EVENT: 'TN Game 7 Fall Championship',
            TEAM1: 'CrossHit Black',
            VS: '14-4',
            TEAM2: 'Franklin Generals 11U'
      }
    ]
}


const gameReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default gameReducer;