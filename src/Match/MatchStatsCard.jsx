import React from "react";

const statsData = [
  {
    team: {
      id: 33,
      name: "Manchester United",
      logo: "https://media.api-sports.io/football/teams/33.png",
    },
    statistics: [
      { type: "Conversion Rate", value: "25%" },
      { type: "Corner", value: "4" },
      { type: "on target", value: "8" },
      { type: "Saves", value: "2" },
      { type: "off target", value: "20" },
      { type: "Attempts", value: "12" },
      { type: "Blocked", value: "3" },
    ],
  },
  {
    team: {
      id: 50,
      name: "Chelsea",
      logo: "https://media.api-sports.io/football/teams/50.png",
    },
    statistics: [
      { type: "Conversion Rate", value: "0%" },
      { type: "Corner", value: "6" },
      { type: "on target", value: "2" },
      { type: "Saves", value: "3" },
      { type: "off target", value: "5" },
      { type: "Attempts", value: "3" },
      { type: "Blocked", value: "3" },
    ],
  },
];

const parseValue = (val) => (val.includes('%') ? parseInt(val) : Number(val));

const VerticalBar = ({ label, leftValue, rightValue }) => {
  const left = parseValue(leftValue);
  const right = parseValue(rightValue);
  const max = Math.max(left, right, 1);
  const barMaxHeight = 24;

  return (
    <div className="flex flex-col w-[70px] items-center">
      <div className="flex items-end justify-center ">
        {/* Left bar */}
        <div className="relative flex flex-col items-center">
          <div
            className="w-[12px] bg-red-600"
            style={{ height: `${(left / max) * barMaxHeight}px` }}
          />
          <span className="absolute bottom-full text-[8px] text-red-400 leading-none">
            {leftValue}
          </span>
        </div>

        {/* Right bar */}
        <div className="relative flex flex-col items-center">
          <div
            className="w-[12px] bg-blue-600"
            style={{ height: `${(right / max) * barMaxHeight}px` }}
          />
          <span className="absolute bottom-full text-[8px] text-blue-400 leading-none">
            {rightValue}
          </span>
        </div>
      </div>

      <div className="text-[10px] text-center w-full uppercase text-gray-300 truncate leading-tight">
        {label}
      </div>
    </div>
  );
};



const HorizontalStat = ({ label, leftValue, rightValue }) => {
  const left = parseValue(leftValue);
  const right = parseValue(rightValue);
  const max = Math.max(left, right, 1);
  const barMaxWidth = 50;

  return (
    <div className="flex flex-col col-span-3 text-[10px] px-1 text-gray-300 mb-[2px]">
      <div className="flex justify-between font-semibold leading-none">
        <span className="text-red-500">{leftValue}</span>
        <span className="text-white text-[10px] font-normal">{label}</span>
        <span className="text-blue-500">{rightValue}</span>
      </div>
      <div className="flex items-center gap-1">
        <div
          className="bg-red-600 h-[8px] rounded-sm"
          style={{ width: `${(left / max) * barMaxWidth}px` }}
        />
        <div
          className="bg-blue-600 h-[4px] rounded-sm"
          style={{ width: `${(right / max) * barMaxWidth}px` }}
        />
      </div>
    </div>
  );
};

export default function MatchStatsCard() {
  const [team1, team2] = statsData;

  return (
    <div className="bg-[#0f0f0f] w-full aspect-[16/9]  text-white rounded-md p-[4px] border border-purple-800 shadow font-sans overflow-hidden">
      {/* Header */}
      {/* <div className="flex justify-between items-center mb-[2px] px-1">
        <img src={team1.team.logo} alt="T1" className="w-4 h-4" />
        <span className="text-[9px] font-bold">Match Stats</span>
        <img src={team2.team.logo} alt="T2" className="w-4 h-4" />
      </div> */}

      {/* Stats Grid */}
      <div className="grid grid-cols-3 flex-wrap justify-between px-[2px] gap-2">
        {team1.statistics.map((stat) => {
          const right = team2.statistics.find((s) => s.type === stat.type);
          if (stat.type === "Conversion Rate") {
            return (
              <HorizontalStat
                key={stat.type}
                label={stat.type}
                leftValue={stat.value}
                rightValue={right?.value || "0"}
              />
            );
          }

          return (
            <VerticalBar
              key={stat.type}
              label={stat.type}
              leftValue={stat.value}
              rightValue={right?.value || "0"}
            />
          );
        })}
      </div>
    </div>
  );
}
