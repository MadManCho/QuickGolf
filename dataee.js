// Quicksand Golf League - Season 3 Data File
// This file contains all players, schedule, and scores data

// Players Data
let playersData = [
    {
        "name": "Khanh",
        "handicap": 11
    },
    {
        "name": "Paul",
        "handicap": 21
    },
    {
        "name": "Joey",
        "handicap": 1
    },
    {
        "name": "Nok",
        "handicap": 16
    },
    {
        "name": "JR",
        "handicap": 17
    },
    {
        "name": "Matty",
        "handicap": 11
    },
    {
        "name": "Scott",
        "handicap": 16
    },
    {
        "name": "Andrew",
        "handicap": 1
    },
    {
        "name": "Jerry",
        "handicap": 5
    },
    {
        "name": "Rem",
        "handicap": 10
    },
    {
        "name": "Sith",
        "handicap": 0
    },
    {
        "name": "Mark",
        "handicap": 0
    },
    {
        "name": "Tommy",
        "handicap": 11
    },
    {
        "name": "Jackson",
        "handicap": 3
    },
    {
        "name": "Tuan",
        "handicap": 26
    },
    {
        "name": "Phong",
        "handicap": 5
    }
];

// Schedule Data
let scheduleData = [
    {
        "week": "Week 1",
        "dates": "Nov 9-15, 2025",
        "course": "Club72 LAKE - Front 9",
        "settings": "Pro setting, Normal greens, normal winds, amateur pin, 6 ft gimme",
        "startDate": "2025-11-09T05:00:00.000Z"
    },
    {
        "week": "Week 2",
        "dates": "Nov 16-22, 2025",
        "course": "Century21 - Back 9",
        "settings": "Pro settings, Normal greens, Fastest winds, amateur pin, 6 ft gimmie",
        "startDate": "2025-11-16T05:00:00.000Z"
    },
    {
        "week": "Week 3",
        "dates": "Nov 23-29, 2025",
        "course": "Muju - Back 9",
        "settings": "TOUR settings, fastest greens, slow winds, amateur pin, 6 ft gimmie",
        "startDate": "2025-11-23T05:00:00.000Z"
    },
    {
        "week": "Week 4",
        "dates": "Nov 30 - Dec 6, 2025",
        "course": "PurunSol - Front 9",
        "settings": "TOUR settings, slowest greens, slow winds, amateur pin, 6 ft gimmie",
        "startDate": "2025-11-30T05:00:00.000Z"
    },
    {
        "week": "Week 5",
        "dates": "Dec 7-13, 2025",
        "course": "Augusta National - USA",
        "settings": "Tour settings, fastest greens, fastest winds, default pin",
        "special": "The Masters - 18 holes",
        "tournament": true,
        "startDate": "2025-12-07T05:00:00.000Z"
    },
    {
        "week": "Week 6",
        "dates": "Dec 14-20, 2025",
        "course": "Ceragio - Back 9",
        "settings": "TOUR settings, slowest greens, Fast winds",
        "special": "SECRET SANTA: SANTA VS THE GRINCH",
        "startDate": "2025-12-14T05:00:00.000Z"
    },
    {
        "week": "Week 7",
        "dates": "Dec 21-27, 2025",
        "course": "Bear Creek - Front 9",
        "settings": "TOUR settings, FASTEST greens, STRONG winds, 0 Mulligans",
        "startDate": "2025-12-21T05:00:00.000Z"
    },
    {
        "week": "Week 8",
        "dates": "Dec 28 - Jan 3, 2026",
        "course": "Royal Island - Front 9",
        "settings": "TOUR settings, normal greens, WEAK winds, 0 mulligans",
        "startDate": "2025-12-28T05:00:00.000Z"
    },
    {
        "week": "Week 9",
        "dates": "Jan 4-10, 2026",
        "course": "Ferrum Club - Back 9",
        "settings": "Tour setting, Fastest greens, WEAK winds, 1 mulligan",
        "startDate": "2026-01-04T05:00:00.000Z"
    },
    {
        "week": "Week 10",
        "dates": "Jan 11-17, 2026",
        "course": "Torrey Pines - USA - Full 18",
        "settings": "Fastest greens, Fastest winds, STRONG winds, kokokokokokoko",
        "special": "US Open - 18 holes",
        "tournament": true,
        "isBreak": false,
        "startDate": "2026-01-11T00:00:00.000Z"
    },
    {
        "week": "Week 11",
        "dates": "Jan 18-24, 2026",
        "course": "TBD - Back 9 - White",
        "settings": "Details TBD",
        "startDate": "2026-01-18T05:00:00.000Z"
    },
    {
        "week": "Week 12",
        "dates": "Jan 25-31, 2026",
        "course": "TBD - Back 9 - White",
        "settings": "Details TBD",
        "startDate": "2026-01-25T05:00:00.000Z"
    },
    {
        "week": "Week 13",
        "dates": "Feb 1-7, 2026",
        "course": "TBD - Back 9 - White",
        "settings": "Details TBD",
        "startDate": "2026-02-01T05:00:00.000Z"
    },
    {
        "week": "Week 14",
        "dates": "Feb 8-14, 2026",
        "course": "TBD",
        "settings": "Details TBD",
        "startDate": "2026-02-08T05:00:00.000Z"
    },
    {
        "week": "Week 15",
        "dates": "Feb 15-21, 2026",
        "course": "St. Andrew's - UK - Black - Full 18",
        "settings": "Details TBD",
        "special": "The Open - 18 holes",
        "tournament": true,
        "startDate": "2026-02-15T05:00:00.000Z"
    },
    {
        "week": "Week 16",
        "dates": "Feb 22-28, 2026",
        "course": "TBD",
        "settings": "Details TBD",
        "startDate": "2026-02-22T05:00:00.000Z"
    },
    {
        "week": "Week 17",
        "dates": "Mar 1-8, 2026",
        "course": "TBD",
        "settings": "No repeats, No Par 3's/Junior, Par 72 or higher",
        "startDate": "2026-03-01T05:00:00.000Z"
    },
    {
        "week": "Week 18",
        "dates": "Mar 2-8, 2026",
        "course": "Break 60 Red Tee Scramble",
        "settings": "Details TBD",
        "special": "Ryder Cup - 18 holes (Team Event) - Teams TBA",
        "startDate": "2026-03-02T05:00:00.000Z"
    },
    {
        "week": "Week 19",
        "dates": "Mar 9-15, 2026",
        "course": "TPC Sawgrass - USA - Black - Full 18",
        "settings": "Top 2 players by Mar 1 will draft their teams",
        "startDate": "2026-03-09T04:00:00.000Z"
    },
    {
        "week": "Season Break",
        "dates": "Mar 16-22, 2026",
        "course": "OFF WEEK",
        "settings": "Season Break",
        "isBreak": true,
        "startDate": "2026-03-16T04:00:00.000Z"
    },
    {
        "week": "Extension Week 1",
        "dates": "Mar 23-29, 2026",
        "course": "Season 2 Extension - 18 Holes",
        "settings": "Fastest greens, no winds, 1 mulligan per 9, 6 ft gimmies",
        "startDate": "2026-03-23T04:00:00.000Z"
    },
    {
        "week": "Extension Week 2",
        "dates": "Mar 30 - Apr 5, 2026",
        "course": "Season 2 Extension - 18 Holes",
        "settings": "Slowest greens, fastest winds, 1 mulligan per 9, 2ft gimmies",
        "startDate": "2026-03-30T04:00:00.000Z"
    },
    {
        "week": "Extension Week 3",
        "dates": "Apr 6-12, 2026",
        "course": "Season 2 Extension - 18 Holes",
        "settings": "Fastest greens, fastest winds, 1 mulligan per 9, 2ft gimmies",
        "startDate": "2026-04-06T04:00:00.000Z"
    }
];

// Scores Data - mapped by week index
let weekScores = {
    "0": {
        "Andrew": -4,
        "Jackson": 6,
        "Nok": -5,
        "Scott": 7,
        "Sith": -5,
        "Jerry": -3,
        "Tommy": 5,
        "Mark": -3,
        "Joey": 0,
        "Phong": -1,
        "Matty": -7,
        "Khanh": 1,
        "Paul": 0,
        "JR": -1,
        "Tuan": -1,
        "Rem": -5
    },
    "1": {
        "Andrew": 7,
        "Jackson": 10,
        "Nok": 12,
        "Scott": 15,
        "Sith": 14,
        "Jerry": 6,
        "Tommy": 18,
        "Mark": 18,
        "Joey": 9,
        "Phong": 12,
        "Matty": -2,
        "Paul": 4,
        "JR": -4,
        "Tuan": 9,
        "Rem": 3
    },
    "2": {
        "Andrew": 3,
        "Jackson": -3,
        "Nok": 17,
        "Scott": 3,
        "Sith": 18,
        "Jerry": 2,
        "Tommy": 4,
        "Mark": 3,
        "Joey": 3,
        "Phong": 11,
        "Matty": 0,
        "Khanh": 7,
        "Paul": 8,
        "JR": 10,
        "Tuan": 10,
        "Rem": 3
    },
    "3": {
        "Andrew": 9,
        "Nok": 7,
        "Scott": 6,
        "Sith": 0,
        "Jerry": -6,
        "Tommy": 13,
        "Joey": 3,
        "Phong": 3,
        "Matty": 8,
        "Paul": 8,
        "JR": 16,
        "Tuan": 8,
        "Rem": 15
    },
    "8": {
        "Andrew": 10,
        "Jackson": 0,
        "Nok": 8,
        "Scott": 9,
        "Jerry": 8,
        "Tommy": 9,
        "Joey": 3,
        "Phong": 8,
        "Matty": 9,
        "Paul": 8,
        "JR": 9,
        "Tuan": 4,
        "Rem": 8
    },
    "9": {
        "Nok": 7,
        "Scott": 2,
        "Jerry": 2,
        "Tommy": -5,
        "Phong": 5,
        "Matty": 3,
        "Paul": 8,
        "JR": 4,
        "Rem": 9
    }
};

// Export data for use in the app
// If using as a module, uncomment the lines below:
// export { playersData, scheduleData, weekScores };
