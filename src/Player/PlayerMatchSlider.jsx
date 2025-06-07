import React, { useState } from "react";

const MatchCard = ({ match }) => {
  const {
    fixture,
    league,
    teams,
    goals,
    score,
  } = match;

  const matchDate = new Date(fixture.date).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-w-full sm:min-w-[400px] bg-[#111] text-white p-5 rounded-xl border border-purple-700 mx-2 shadow-md">
      {/* League Info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img src={league.logo} alt="league" className="w-6 h-6" />
          <p className="text-sm font-medium">{league.name}</p>
        </div>
        <p className="text-xs text-gray-400">{matchDate}</p>
      </div>

      {/* Teams */}
      <div className="flex justify-between items-center text-center py-3 border-y border-gray-700">
        {/* Home */}
        <div className="flex flex-col items-center w-1/3">
          <img src={teams.home.logo} alt="home" className="w-10 h-10 mb-1" />
          <p className="text-sm">{teams.home.name}</p>
        </div>

        {/* Score */}
        <div className="w-1/3 text-center">
          <p className="text-lg font-bold text-purple-400">
            {goals.home} - {goals.away}
          </p>
          <p className="text-xs text-gray-400">{fixture.status.short}</p>
        </div>

        {/* Away */}
        <div className="flex flex-col items-center w-1/3">
          <img src={teams.away.logo} alt="away" className="w-10 h-10 mb-1" />
          <p className="text-sm">{teams.away.name}</p>
        </div>
      </div>

      {/* Score Details */}
      <div className="text-xs mt-3 text-gray-300">
        <p>HT: {score.halftime.home} - {score.halftime.away}</p>
        <p>FT: {score.fulltime.home} - {score.fulltime.away}</p>
        {fixture.referee && <p>Referee: {fixture.referee}</p>}
        <p>Round: {league.round}</p>
      </div>
    </div>
  );
};

const MatchCardSlider = () => {
  const [current, setCurrent] = useState(0);
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


  const total = data.length;

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">

      
      {/* Cards Slider */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {data?.map((match, index) => (
          <MatchCard key={index} match={match} />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4 px-4">
        <button
          onClick={prevSlide}
          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-lg text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MatchCardSlider;
