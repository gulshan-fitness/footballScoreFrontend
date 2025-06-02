import React from 'react';

const MatchInfo = () => {
  const matchData = [
    {
      fixture: {
        id: 215662,
        referee: "John Doe",
        timezone: "UTC",
        date: "2025-05-22T16:00:00+00:00",
        timestamp: 1748236800,
        periods: {
          first: 1748236800,
          second: 1748240400
        },
        venue: {
          id: 556,
          name: "Old Trafford",
          city: "Manchester"
        },
        status: {
          long: "First Half",
          short: "1H",
          elapsed: 32
        }
      },
      league: {
        id: 39,
        name: "Premier League",
        country: "England",
        logo: "https://media.api-sports.io/football/leagues/39.png",
        flag: "https://media.api-sports.io/flags/gb.svg",
        season: 2025,
        round: "Regular Season - 12"
      },
      teams: {
        home: {
          id: 33,
          name: "Manchester United",
          logo: "https://media.api-sports.io/football/teams/33.png",
          winner: false
        },
        away: {
          id: 34,
          name: "Arsenal",
          logo: "https://media.api-sports.io/football/teams/34.png",
          winner: true
        }
      },
      goals: {
        home: 1,
        away: 2
      },
      score: {
        halftime: {
          home: 1,
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
    }
  ];

  const { fixture, league, teams, goals, score } = matchData[0];

  const matchDate = new Date(fixture.date).toLocaleString(undefined, {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  return (
    <div className="bg-[#1e1e1e] text-white rounded-xl p-4 md:p-6 shadow-xl max-w-4xl mx-auto my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-700 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <img src={league.logo} alt={league.name} className="h-8 w-8 object-contain" />
          <div>
            <h2 className="text-lg md:text-xl font-semibold">{league.name}</h2>
            <p className="text-xs text-gray-400">{league.country}</p>
          </div>
        </div>
        <div className="text-sm text-right mt-3 sm:mt-0">
          <p className="text-gray-400">Referee: {fixture.referee || 'N/A'}</p>
          <p className="text-gray-500">{matchDate}</p>
        </div>
      </div>

      {/* Teams & Score */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6">
        {/* Home Team */}
        <div className="flex flex-col items-center text-center gap-2">
          <img src={teams.home.logo} alt={teams.home.name} className="h-12 w-12 object-contain" />
          <p className="text-md font-medium">{teams.home.name}</p>
        </div>

        {/* Score */}
        <div className="text-center">
          <p className="text-4xl font-bold text-orange-400">
            {goals.home} - {goals.away}
          </p>
          <p className="text-sm text-gray-400 mt-1">
            {fixture.status.long} ({fixture.status.elapsed}' elapsed)
          </p>
        </div>

        {/* Away Team */}
        <div className="flex flex-col items-center text-center gap-2">
          <img src={teams.away.logo} alt={teams.away.name} className="h-12 w-12 object-contain" />
          <p className="text-md font-medium">{teams.away.name}</p>
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-300">
        <div>
          <p className="text-xs text-gray-500">Halftime</p>
          <p>{score.halftime.home} - {score.halftime.away}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Fulltime</p>
          <p>{score.fulltime.home} - {score.fulltime.away}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Extratime</p>
          <p>{score.extratime.home ?? '-'} - {score.extratime.away ?? '-'}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Penalties</p>
          <p>{score.penalty.home ?? '-'} - {score.penalty.away ?? '-'}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchInfo;
