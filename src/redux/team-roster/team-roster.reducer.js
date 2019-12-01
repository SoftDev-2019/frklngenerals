import moment from 'moment';

const INITIAL_STATE = {
    roster: [
        {
            JERSEYNUM: 46,
            PLAYER: 'Brock Parkerson',
            AGE: `${moment().diff(moment('20090926', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20190926', 'YYYYMMDD'), 'months'))} months`
        },
        {
            JERSEYNUM: '00',
            PLAYER: 'Titus Cimarosti',
            AGE: `${moment().diff(moment('20081101', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20191101', 'YYYYMMDD'), 'months'))} months`
        },
        {
            JERSEYNUM: 5,
            PLAYER: 'Connor Gray',
            AGE: `${moment().diff(moment('20080801', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20190801', 'YYYYMMDD'), 'months'))} months`
        },
        {
            JERSEYNUM: 6,
            PLAYER: 'Peyton King',
            AGE: `${moment().diff(moment('20090401', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20190401', 'YYYYMMDD'), 'months'))} months`
        },
        {
            JERSEYNUM: 8,
            PLAYER: 'Gavin Fu',
            AGE: `${moment().diff(moment('20080801', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20190801', 'YYYYMMDD'), 'months'))} months`
        },
        {
            JERSEYNUM: 9,
            PLAYER: 'Daniel Maumus',
            AGE: `${moment().diff(moment('20090101', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20190101', 'YYYYMMDD'), 'months'))} months`
        },
        {
            JERSEYNUM: 10,
            PLAYER: 'Everett Ralston',
            AGE: `${moment().diff(moment('20081101', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20191101', 'YYYYMMDD'), 'months'))} months`
        },
        {
            JERSEYNUM: 11,
            PLAYER: 'Joseph Panaia',
            AGE: `${moment().diff(moment('20080501', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20190501', 'YYYYMMDD'), 'months'))} months`
        },
        {
            JERSEYNUM: 12,
            PLAYER: 'Ben Fisher',
            AGE: `${moment().diff(moment('20080701', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20190701', 'YYYYMMDD'), 'months'))} months`
        },
        {
            JERSEYNUM: 14,
            PLAYER: 'Henry Hammett',
            AGE: `${moment().diff(moment('20080701', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20190701', 'YYYYMMDD'), 'months'))} months`
        },
        {
            JERSEYNUM: 24,
            PLAYER: 'Brock',
            AGE: `${moment().diff(moment('20080901', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20190901', 'YYYYMMDD'), 'months'))} months`
        },
        {
            JERSEYNUM: 27,
            PLAYER: 'Ben Gant',
            AGE: `${moment().diff(moment('20090201', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20190201', 'YYYYMMDD'), 'months'))} months`
        },
        {
            JERSEYNUM: 30,
            PLAYER: 'Burke Keaton',
            AGE: `${moment().diff(moment('20090401', 'YYYYMMDD'), 'years')} and ${(moment().diff(moment('20190401', 'YYYYMMDD'), 'months'))} months`
        }
    ]
}

const teamRosterReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default teamRosterReducer;