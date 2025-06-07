


import React from "react";

const statsResponse = [
  {
    team: {
      id: 33,
      name: "Manchester United",
      logo: "https://media.api-sports.io/football/teams/33.png",
    },
    statistics: [
      { type: "Shots on Goal", value: 2 },
      { type: "Shots off Goal", value: 3 },
      { type: "Blocked Shots", value: 3 },
      { type: "Ball Possession", value: "41%" },
      { type: "Corner Kicks", value: 6 },
      { type: "Offsides", value: 5 },
      { type: "Fouls", value: 7 },
      { type: "Throw-ins", value: 19 },
      { type: "Yellow Cards", value: 3 },
      { type: "Crosses", value: 3 },
      { type: "Goalkeeper Saves", value: 3 },
      { type: "Goal Kicks", value: 12 },
    ],
  },
  {
    team: {
      id: 34,
      name: "Chelsea",
      logo: "https://media.api-sports.io/football/teams/34.png",
    },
    statistics: [
      { type: "Shots on Goal", value: 12 },
      { type: "Shots off Goal", value: 3 },
      { type: "Blocked Shots", value: 59 },
      { type: "Ball Possession", value: "59%" },
      { type: "Corner Kicks", value: 0 },
      { type: "Offsides", value: 13 },
      { type: "Fouls", value: 12 },
      { type: "Throw-ins", value: 2 },
      { type: "Yellow Cards", value: 6 },
      { type: "Crosses", value: 2 },
      { type: "Goalkeeper Saves", value: 5 },
      { type: "Goal Kicks", value: 5 },
    ],
  },
];

const parseValue=(val) =>{
  if (typeof val === "string" && val.includes("%")) return parseInt(val);
  return isNaN(val) ? 0 : val;
}


export default function MatchStats() {
  const [team1, team2] = statsResponse;
//   GET "https://v3.football.api-sports.io/fixtures/statistics?fixture=123456"

  return (
    <div className="w-full px-4 py-3 mt-6 border border-purple-800/40  rounded-xl text-white  
        hover:shadow-[0_0_40px_rgba(128,0,255,0.4)]
        transition-all duration-500 ease-in-out">
      <div className="grid grid-cols-3 mb-4">

        <div className="flex flex-col  items-center gap-2 text-xs truncate">
          <img src={team1.team.logo} className="w-4 h-4" alt={team1.team.name} />
         
        </div>

        <div className="text-sm text-purple-300 font-semibold text-center">Stats</div>

        <div className="flex items-center flex-col gap-2 text-xs truncate">
            <img src={team2.team.logo} className="w-4 h-4" alt={team2.team.name} />
          
          
        </div>
      </div>

      <div className="space-y-2">
        {team1.statistics.map((stat, i) => {
          const value1 = parseValue(stat.value);
          const value2 = parseValue(team2.statistics[i]?.value);
          const total = value1 + value2 || 1;

          const leftWidth = `${(value1 / total) * 100}%`;
          const rightWidth = `${(value2 / total) * 100}%`;

          return (
            <div key={i} className="text-[11px] sm:text-xs">
              <div className="flex justify-between text-gray-300 px-1">
                <span>{value1}</span>
                <span className="text-white font-medium">{stat.type}</span>
                <span>{value2}</span>
              </div>

              <div className="flex h-2 rounded overflow-hidden bg-gray-800">
                <div
                  className="bg-[orange] transition-all duration-500"
                  style={{ width: leftWidth }}
                ></div>
                <div
                  className="bg-white transition-all duration-500"
                  style={{ width: rightWidth }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
