import React, { useEffect, useState } from 'react';

const API_URL = 'https://v3.football.api-sports.io/fixtures?live=all';

// Add your API key here — You must provide your API key for the headers
const API_KEY = import.meta.env.VITE_FOOTBALLAPIKEY_URL

const LiveMatches = () => {

  const [matches, setMatches] = useState([
    {
    fixture: {
      id: 123456,
      date: "2025-05-22T18:30:00Z",
      status: {
        long: "Second Half",
        short: "2H",
        elapsed: 68
      }
    },
    league: {
      name: "Premier League",
      logo: "https://media.api-sports.io/football/leagues/39.png"
    },
    teams: {
      home: {
        id: 33,
        name: "Manchester United",
        logo: "https://media.api-sports.io/football/teams/33.png"
      },
      away: {
        id: 40,
        name: "Liverpool",
        logo: "https://media.api-sports.io/football/teams/40.png"
      }
    },
    goals: {
      home: 2,
      away: 1
    }
  },
  {
    fixture: {
      id: 654321,
      date: "2025-05-22T19:00:00Z",
      status: {
        long: "First Half",
        short: "1H",
        elapsed: 34
      }
    },
    league: {
      name: "La Liga",
      logo: "https://media.api-sports.io/football/leagues/140.png"
    },
    teams: {
      home: {
        id: 541,
        name: "Real Madrid",
        logo: "https://media.api-sports.io/football/teams/541.png"
      },
      away: {
        id: 529,
        name: "Barcelona",
        logo: "https://media.api-sports.io/football/teams/529.png"
      }
    },
    goals: {
      home: 0,
      away: 0
    }
  },
  {
    fixture: {
      id: 789012,
      date: "2025-05-22T17:15:00Z",
      status: {
        long: "Half Time",
        short: "HT",
        elapsed: 45
      }
    },
    league: {
      name: "Bundesliga",
      logo: "https://media.api-sports.io/football/leagues/78.png"
    },
    teams: {
      home: {
        id: 157,
        name: "Bayern Munich",
        logo: "https://media.api-sports.io/football/teams/157.png"
      },
      away: {
        id: 165,
        name: "Borussia Dortmund",
        logo: "https://media.api-sports.io/football/teams/165.png"
      }
    },
    goals: {
      home: 1,
      away: 1
    }
  },
  {
    fixture: {
      id: 890123,
      date: "2025-05-22T16:00:00Z",
      status: {
        long: "First Half",
        short: "1H",
        elapsed: 12
      }
    },
    league: {
      name: "Serie A",
      logo: "https://media.api-sports.io/football/leagues/135.png"
    },
    teams: {
      home: {
        id: 496,
        name: "Juventus",
        logo: "https://media.api-sports.io/football/teams/496.png"
      },
      away: {
        id: 505,
        name: "AC Milan",
        logo: "https://media.api-sports.io/football/teams/505.png"
      }
    },
    goals: {
      home: 0,
      away: 2
    }
  }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   Fetch live matches from API
//   const fetchMatches = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(API_URL, {
//         headers: {
//           'x-apisports-key': API_KEY,
//         },
//       });
//       if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

//       const json = await res.json();

//       // API returns data in json.response as an array of matches
//       if (json.response) {
//         setMatches(json.response);
//       } else {
//         setMatches([]);
//       }
//       setLoading(false);
//     } catch (err) {
//       setError(err.message || 'Failed to fetch live matches');
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     let isMounted = true;

//     // Fetch initially
//     fetchMatches();

//     // Set interval for auto-refresh every 60 seconds
//     const intervalId = setInterval(() => {
//       if (isMounted) fetchMatches();
//     }, 60000);

//     return () => {
//       isMounted = false;
//       clearInterval(intervalId);
//     };
//   }, []);




  return (
<div className="bg-[#1e1e1e] rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-xl max-w-7xl mx-auto w-full">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
    Live Matches
  </h2>

  {matches.length === 0 ? (
    <p className="text-center text-gray-400 text-base sm:text-lg">No live matches right now.</p>
  ) : (
    <div className="flex flex-col gap-6">
      {matches.map((match) => {
        const {
          fixture: { id: fixtureId, status, date },
          league: { name: leagueName, logo: leagueLogo },
          teams: { home, away },
          goals,
        } = match;

        return (
          <div
            key={fixtureId}
            className="bg-[#2c2c2c] p-4 sm:p-5 md:p-6 rounded-xl shadow-md hover:shadow-orange-500/30 transition-shadow duration-300 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            {/* League Logo + League Name */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <img
                src={leagueLogo}
                alt={leagueName}
                className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 rounded-full"
                loading="lazy"
              />
              <p className="text-sm sm:text-base text-gray-400 font-medium">{leagueName}</p>
            </div>

            {/* Match Info */}
            <div className="text-center md:text-left w-full md:w-auto flex flex-col gap-1">
              <p className=" text-[12px] sm:text-[md] md:text-lg font-semibold whitespace-nowrap truncate">
                {home.name}{' '}
                <span className="text-orange-400">
                  {goals.home !== null ? goals.home : '-'}
                </span>{' '}
                -{' '}
                <span className="text-orange-400">
                  {goals.away !== null ? goals.away : '-'}
                </span>{' '}
                {away.name}
              </p>
              <p className="text-xs text-gray-500">
                {status.long} ({status.elapsed !== null ? `${status.elapsed}'` : status.short})
              </p>
              <p className="text-xs text-gray-500">
                {new Date(date).toLocaleString(undefined, {
                  dateStyle: 'short',
                  timeStyle: 'short',
                })}
              </p>
            </div>

            {/* Team Logos */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-center">
              <div className="flex flex-col items-center">
                <img
                  src={home.logo}
                  alt={home.name}
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full shadow-lg"
                />
                <p className="text-xs sm:text-sm mt-1 text-center max-w-[80px] truncate">{home.name}</p>
              </div>

              <div className="text-lg sm:text-xl font-bold text-white">vs</div>

              <div className="flex flex-col items-center">
                <img
                  src={away.logo}
                  alt={away.name}
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full shadow-lg"
                />
                <p className="text-xs sm:text-sm mt-1 text-center max-w-[80px] truncate">{away.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )}
</div>



  );
};

export default LiveMatches;
