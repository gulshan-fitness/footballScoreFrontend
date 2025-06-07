import React, { useState } from 'react'

export default function PlayerMatches() {
      const [activeTab, setActiveTab] = useState('results');
     const [Tabs] = useState(["results", "fixtures", ]);

     const data =  [
    {
      fixture: {
        id: 1410623,
        referee: "John Smith",
        timezone: "UTC",
        date: "2023-12-05T19:00:00+00:00",
        timestamp: 1701802800,
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }
      },
      league: {
        id: 36,
        name: "UEFA Nations League Women",
        country: "World",
        logo: "https://media.api-sports.io/football/leagues/36.png",
        flag: null,
        season: 2023,
        round: "Group Stage - 6"
      },
      teams: {
        home: {
          id: 693,
          name: "Wales W",
          logo: "https://media.api-sports.io/football/teams/693.png",
          winner: false
        },
        away: {
          id: 686,
          name: "Germany W",
          logo: "https://media.api-sports.io/football/teams/686.png",
          winner: true
        }
      },
      goals: {
        home: 0,
        away: 5
      },
      score: {
        halftime: {
          home: 0,
          away: 2
        },
        fulltime: {
          home: 0,
          away: 5
        },
        extratime: {
          home: null,
          away: null
        },
        penalty: {
          home: null,
          away: null
        }
      }
    },
    {
      fixture: {
        id: 1410624,
        referee: "Anna Green",
        timezone: "UTC",
        date: "2023-11-28T18:45:00+00:00",
        timestamp: 1701197100,
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }
      },
      league: {
        id: 36,
        name: "UEFA Nations League Women",
        country: "World",
        logo: "https://media.api-sports.io/football/leagues/36.png",
        flag: null,
        season: 2023,
        round: "Group Stage - 5"
      },
      teams: {
        home: {
          id: 686,
          name: "Germany W",
          logo: "https://media.api-sports.io/football/teams/686.png",
          winner: true
        },
        away: {
          id: 690,
          name: "Iceland W",
          logo: "https://media.api-sports.io/football/teams/690.png",
          winner: false
        }
      },
      goals: {
        home: 3,
        away: 1
      },
      score: {
        halftime: {
          home: 2,
          away: 1
        },
        fulltime: {
          home: 3,
          away: 1
        },
        extratime: {
          home: null,
          away: null
        },
        penalty: {
          home: null,
          away: null
        }
      }
    },
    {
      fixture: {
        id: 1410625,
        referee: "Laura White",
        timezone: "UTC",
        date: "2023-11-15T17:00:00+00:00",
        timestamp: 1700058000,
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }
      },
      league: {
        id: 36,
        name: "UEFA Nations League Women",
        country: "World",
        logo: "https://media.api-sports.io/football/leagues/36.png",
        flag: null,
        season: 2023,
        round: "Group Stage - 4"
      },
      teams: {
        home: {
          id: 686,
          name: "Germany W",
          logo: "https://media.api-sports.io/football/teams/686.png",
          winner: false
        },
        away: {
          id: 694,
          name: "France W",
          logo: "https://media.api-sports.io/football/teams/694.png",
          winner: true
        }
      },
      goals: {
        home: 1,
        away: 2
      },
      score: {
        halftime: {
          home: 0,
          away: 1
        },
        fulltime: {
          home: 1,
          away: 2
        },
        extratime: {
          home: null,
          away: null
        },
        penalty: {
          home: null,
          away: null
        }
      }
    },
    {
      fixture: {
        id: 1410626,
        referee: "Emily Brown",
        timezone: "UTC",
        date: "2023-10-20T19:00:00+00:00",
        timestamp: 1697828400,
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }
      },
      league: {
        id: 36,
        name: "UEFA Nations League Women",
        country: "World",
        logo: "https://media.api-sports.io/football/leagues/36.png",
        flag: null,
        season: 2023,
        round: "Group Stage - 3"
      },
      teams: {
        home: {
          id: 692,
          name: "Norway W",
          logo: "https://media.api-sports.io/football/teams/692.png",
          winner: false
        },
        away: {
          id: 686,
          name: "Germany W",
          logo: "https://media.api-sports.io/football/teams/686.png",
          winner: true
        }
      },
      goals: {
        home: 0,
        away: 2
      },
      score: {
        halftime: {
          home: 0,
          away: 1
        },
        fulltime: {
          home: 0,
          away: 2
        },
        extratime: {
          home: null,
          away: null
        },
        penalty: {
          home: null,
          away: null
        }
      }
    },
    {
      fixture: {
        id: 1410627,
        referee: "Natalie Black",
        timezone: "UTC",
        date: "2023-10-10T18:00:00+00:00",
        timestamp: 1696960800,
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }
      },
      league: {
        id: 36,
        name: "UEFA Nations League Women",
        country: "World",
        logo: "https://media.api-sports.io/football/leagues/36.png",
        flag: null,
        season: 2023,
        round: "Group Stage - 2"
      },
      teams: {
        home: {
          id: 686,
          name: "Germany W",
          logo: "https://media.api-sports.io/football/teams/686.png",
          winner: false
        },
        away: {
          id: 695,
          name: "Spain W",
          logo: "https://media.api-sports.io/football/teams/695.png",
          winner: false
        }
      },
      goals: {
        home: 2,
        away: 2
      },
      score: {
        halftime: {
          home: 1,
          away: 1
        },
        fulltime: {
          home: 2,
          away: 2
        },
        extratime: {
          home: null,
          away: null
        },
        penalty: {
          home: null,
          away: null
        }
      }
    }
  ]


  return (
    <div className=" mx-auto ">

     {/* Tabs */}

      <div className="flex mb-2 gap-2 flex-wrap border-b border-purple-800 pb-4">
        {Tabs?.map((tab,index) => (
          <button
            key={index}
            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm  rounded-full border ${
              activeTab === tab
                ? ' bg-purple-700/90'
                : 'text-gray-300 border-purple-800'
            } hover:shadow-[0_0_20px_rgba(128,0,255,0.7)] transition`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {data?.map((match) => {
          const { fixture, league, teams, goals } = match;
          const matchDate = new Date(fixture.date).toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <div
              key={fixture.id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-lg shadow hover:shadow-[0_0_40px_rgba(128,0,255,0.4)] transition-all duration-500 ease-in-out border-purple-800 border space-y-2 sm:space-y-0"
            >
              <div className="flex items-center space-x-1">
                {/* Home Team */}
                <div className="text-right">
                  <img
                    src={teams.home.logo}
                    alt={teams.home.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
                  />
                  <p className="text-xs sm:text-sm font-semibold">{teams.home.name}</p>
                </div>

                {/* Score */}
                <div className="text-center px-4 text-gray-300">
                  <p className="text-base sm:text-xl font-bold">
                    {goals.home} - {goals.away}
                  </p>
                  <p className="text-[10px] sm:text-xs text-white">{matchDate}</p>
                </div>

                {/* Away Team */}
                <div className="text-left">
                  <img
                    src={teams.away.logo}
                    alt={teams.away.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
                  />
                  <p className="text-xs sm:text-sm font-semibold">{teams.away.name}</p>
                </div>
              </div>

              {/* League Info */}
              <div className="text-right hidden sm:block">
                <img
                  src={league.logo}
                  alt={league.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 inline-block mr-1"
                />
                <p className="text-xs sm:text-sm">{league.name}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">{league.round}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );


}
