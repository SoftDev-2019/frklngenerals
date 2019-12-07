import moment from 'moment';

const TEAM_ROSTER_DATA = [
    {
        JERSEYNUM: 46,
        PLAYER: 'Brock Parkerson',
        AGE: `${moment().diff(moment('20090926', 'YYYYMMDD'), 'years')}`
    },
    {
        JERSEYNUM: '00',
        PLAYER: 'Titus Cimarosti',
        AGE: `${moment().diff(moment('20081101', 'YYYYMMDD'), 'years')}`
    },
    {
        JERSEYNUM: 5,
        PLAYER: 'Connor Gray',
        AGE: `${moment().diff(moment('20080801', 'YYYYMMDD'), 'years')}`
    },
    {
        JERSEYNUM: 6,
        PLAYER: 'Peyton King',
        AGE: `${moment().diff(moment('20090401', 'YYYYMMDD'), 'years')}`
    },
    {
        JERSEYNUM: 8,
        PLAYER: 'Gavin Fu',
        AGE: `${moment().diff(moment('20080801', 'YYYYMMDD'), 'years')}`
    },
    {
        JERSEYNUM: 9,
        PLAYER: 'Daniel Maumus',
        AGE: `${moment().diff(moment('20090201', 'YYYYMMDD'), 'years')}`
    },
    {
        JERSEYNUM: 10,
        PLAYER: 'Everett Ralston',
        AGE: `${moment().diff(moment('20081101', 'YYYYMMDD'), 'years')}`
    },
    {
        JERSEYNUM: 11,
        PLAYER: 'Joseph Panaia',
        AGE: `${moment().diff(moment('20080501', 'YYYYMMDD'), 'years')}`
    },
    {
        JERSEYNUM: 12,
        PLAYER: 'Ben Fisher',
        AGE: `${moment().diff(moment('20080701', 'YYYYMMDD'), 'years')}`
    },
    {
        JERSEYNUM: 14,
        PLAYER: 'Henry Hammett',
        AGE: `${moment().diff(moment('20080701', 'YYYYMMDD'), 'years')}`
    },
    {
        JERSEYNUM: 24,
        PLAYER: 'Brock',
        AGE: `${moment().diff(moment('20080901', 'YYYYMMDD'), 'years')}`
    },
    {
        JERSEYNUM: 27,
        PLAYER: 'Ben Gant',
        AGE: `${moment().diff(moment('20090301', 'YYYYMMDD'), 'years')}`
    },
    {
        JERSEYNUM: 30,
        PLAYER: 'Burke Keaton',
        AGE: `${moment().diff(moment('20090401', 'YYYYMMDD'), 'years')}`
    }
]

export default TEAM_ROSTER_DATA;