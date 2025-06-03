import React from "react";

const statsData = [
  {
    team: {
      id: 33,
      name: "Manchester United",
      logo: "https://media.api-sports.io/football/teams/33.png",
    },
    statistics: [
      { type: "Yellow Cards", value: 2 },
      { type: "Red Cards", value: 1 },
      { type: "Fouls", value: 13 },
      { type: "Offsides", value: 5 },
      { type: "Free Kicks", value: 12 },
    ],
  },
  {
    team: {
      id: 50,
      name: "Chelsea",
      logo: "https://media.api-sports.io/football/teams/50.png",
    },
    statistics: [
      { type: "Yellow Cards", value: 3 },
      { type: "Red Cards", value: 0 },
      { type: "Fouls", value: 12 },
      { type: "Offsides", value: 3 },
      { type: "Free Kicks", value: 9 },
    ],
  },
];

// https://v3.football.api-sports.io/fixtures/statistics?fixture={fixture_id}



const Donut = ({ label, val1, val2, color1, color2 }) => {
  const radius = 14;
  const stroke = 4;
  const size = radius * 2 + stroke * 2;
  const circ = 2 * Math.PI * radius;
  const max = Math.max(val1, val2, 1);

  const arc = (v) => `${(v / max) * circ} ${circ}`;

  return (
    <div className="flex flex-col items-center w-[60px] text-[9px]">
      <div className="relative w-[60px] h-[60px] ">
        <svg viewBox={`0 0 ${size} ${size}`} className="absolute">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#333"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color1}
            strokeWidth={stroke}
            strokeDasharray={arc(val1)}
            strokeDashoffset={0}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <svg viewBox={`0 0 ${size} ${size}`} className="absolute">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="transparent"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color2}
            strokeWidth={stroke - 1}
            strokeDasharray={arc(val2)}
            strokeDashoffset={0}
            transform={`rotate(90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-[11px] font-semibold leading-tight">
          <span className="text-red-400 ">{val1}</span>
          <span className="text-blue-400 ">{val2}</span>
        </div>
      </div>
      <div className="text-center text-[10px] uppercase">{label}</div>
    </div>
  );
};

const CardBar = ({ yellow1, red1, yellow2, red2 }) => {
  const total1 = yellow1 + red1;
  const total2 = yellow2 + red2;
  const max = Math.max(total1, total2, 1);

  return (
    <div className="w-full px-2  ">
      <div className="text-[10px] font-semibold  text-center ">Cards</div>
      <div className="flex items-center gap-1 ">
        <div className="flex-1 relative">
          <div className="flex h-2 rounded overflow-hidden bg-gray-700">
            <div className="bg-yellow-400" style={{ width: `${(yellow1 / max) * 100}%` }} />
            <div className="bg-red-500" style={{ width: `${(red1 / max) * 100}%` }} />
          </div>
          <div className="text-[9px] absolute left-0 top-1">{total1}</div>
        </div>
        <div className="w-3 text-center text-[10px]">vs</div>
        <div className="flex-1 relative">
          <div className="flex h-2 rounded overflow-hidden bg-gray-700">
            <div className="bg-yellow-400" style={{ width: `${(yellow2 / max) * 100}%` }} />
            <div className="bg-red-500" style={{ width: `${(red2 / max) * 100}%` }} />
          </div>
          <div className="text-[9px] absolute right-0 top-1">{total2}</div>
        </div>
      </div>
    </div>
  );
};

export default function MatchDisciplineStats() {
  const [team1, team2] = statsData;
  const getStat = (team, type) => team.statistics.find((s) => s.type === type)?.value || 0;

  return (
    <div className="w-full   aspect-[16/6] bg-[#0f0f0f] text-white border border-purple-800 rounded-lg p-1 flex flex-col ">
      

      <CardBar
        yellow1={getStat(team1, "Yellow Cards")}
        red1={getStat(team1, "Red Cards")}
        yellow2={getStat(team2, "Yellow Cards")}
        red2={getStat(team2, "Red Cards")}
      />

      <div className="flex justify-around  flex-wrap gap-1">
        <Donut
          label="Fouls"
          val1={getStat(team1, "Fouls")}
          val2={getStat(team2, "Fouls")}
          color1="red"
          color2="blue"
        />
        <Donut
          label="Free Kicks"
          val1={getStat(team1, "Free Kicks")}
          val2={getStat(team2, "Free Kicks")}
          color1="red"
          color2="blue"
        />
        <Donut
          label="Offsides"
          val1={getStat(team1, "Offsides")}
          val2={getStat(team2, "Offsides")}
          color1="red"
          color2="blue"
        />
      </div>
    </div>
  );
}
