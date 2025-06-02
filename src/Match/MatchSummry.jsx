import React from "react";

const MatchSummary = () => {
  const match = {
    fixture: {
      id: 123456,
      date: "2025-05-22T16:00:00+00:00",
      status: {
        long: "Second Half",
        short: "2H",
        elapsed: 65,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
    },
    teams: {
      home: {
        id: 33,
        name: "Manchester United",
        logo: "https://media.api-sports.io/football/teams/33.png",
        winner: false,
      },
      away: {
        id: 34,
        name: "Arsenal",
        logo: "https://media.api-sports.io/football/teams/34.png",
        winner: true,
      },
    },
    goals: {
      home: 1,
      away: 2,
    },
    events: [
      {
        time: { elapsed: 12 },
        team: { id: 33, name: "Manchester United" },
        player: { id: 101, name: "Marcus Rashford" },
        assist: { id: 102, name: "Bruno Fernandes" },
        type: "Goal",
        detail: "Normal Goal",
        comments: "A great shot from inside the box",
      },
      {
        time: { elapsed: 34 },
        team: { id: 34, name: "Arsenal" },
        player: { id: 201, name: "Bukayo Saka" },
        assist: null,
        type: "Goal",
        detail: "Penalty",
        comments: "Scored from the penalty spot",
      },
      {
        time: { elapsed: 52 },
        team: { id: 33, name: "Manchester United" },
        player: { id: 103, name: "Harry Maguire" },
        type: "Card",
        detail: "Yellow Card",
        comments: "Foul on Bukayo Saka",
      },
      {
        time: { elapsed: 60 },
        team: { id: 34, name: "Arsenal" },
        player: { id: 202, name: "Gabriel Martinelli" },
        type: "Substitution",
        detail: "Substitution 1",
        comments: "Replaced Emile Smith Rowe",
      },
    ],
  };

  const matchDate = new Date(match.fixture.date).toLocaleString(undefined, {
    dateStyle: "long",
    timeStyle: "short",
  });

  const eventIcon = (type) => {
    switch (type) {
      case "Goal":
        return "⚽";
      case "Card":
        return "🟨";
      case "Substitution":
        return "🔄";
      default:
        return "ℹ️";
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-[#1e1e1e] text-white rounded-xl p-4 sm:p-6 shadow-lg my-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 border-b border-gray-700 pb-4">
        <div className="flex items-center gap-3 mb-3 sm:mb-0">
          <img src={match.league.logo} alt={match.league.name} className="h-8 w-8 object-contain" />
          <div>
            <h2 className="text-lg sm:text-xl font-semibold">{match.league.name}</h2>
            <p className="text-xs sm:text-sm text-gray-400">{match.league.country}</p>
            <p className="text-xs text-gray-500">{matchDate}</p>
          </div>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-2xl sm:text-3xl font-bold text-orange-400">
            {match.goals.home} - {match.goals.away}
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            {match.fixture.status.long} ({match.fixture.status.elapsed}')
          </p>
        </div>
      </div>

      {/* Teams */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col items-center">
          <img src={match.teams.home.logo} alt={match.teams.home.name} className="h-12 sm:h-14 w-12 sm:w-14 object-contain" />
          <p className="mt-2 text-sm sm:text-base font-medium text-center">{match.teams.home.name}</p>
        </div>

        <div className="text-gray-500 italic text-xs sm:text-sm">vs</div>

        <div className="flex flex-col items-center">
          <img src={match.teams.away.logo} alt={match.teams.away.name} className="h-12 sm:h-14 w-12 sm:w-14 object-contain" />
          <p className="mt-2 text-sm sm:text-base font-medium text-center">{match.teams.away.name}</p>
        </div>
      </div>

      {/* Events */}
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-3 border-b border-gray-700 pb-2">Match Events</h3>
        <ul className="space-y-4 max-h-96 overflow-y-auto">
          {match.events.map((event, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-[#2c2c2c] rounded-md p-3"
              title={event.comments}
            >
              <div className="text-xl sm:text-2xl flex-shrink-0">{eventIcon(event.type)}</div>
              <div className="flex-grow">
                <p className="text-xs sm:text-sm text-gray-400">
                  <span className="font-semibold">{event.time.elapsed}'</span> - {event.type} ({event.detail})
                </p>
                <p className="text-sm sm:text-base font-semibold">{event.player.name}</p>
                {event.assist && (
                  <p className="text-xs sm:text-sm text-gray-400">
                    Assist: <span className="italic">{event.assist.name}</span>
                  </p>
                )}
                <p className="text-xs sm:text-sm text-gray-300 mt-1">{event.comments}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">Team: {event.team.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MatchSummary;
