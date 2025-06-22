import React, { useContext } from "react";
import { Context } from "../Context_holder";

// Progress bar for stat comparison
const StatBar = ({ label, leftValue, rightValue }) => {
  const leftNum = parseInt(leftValue) || 0;
  const rightNum = parseInt(rightValue) || 0;
  const maxBarWidth = 70;

  return (
    <div className="flex items-center mb-[2px]">
      {/* Label with alias */}
      <div className="w-20 text-[10px] font-semibold text-gray-400 truncate">
        {
          label === "Shots insidebox" ? "Dangerous Attacks" :
          label === "Total Shots" ? "Attacks" :
          label === "Goalkeeper Saves" ? "Ball Safe" :
          label
        }
      </div>

      {/* Left (home team) bar */}
      <div className="flex items-center flex-1 gap-1">
        <div
          className="bg-red-600 h-2 rounded-sm"
          style={{ width: `${(leftNum / 100) * maxBarWidth + 5}px` }}
          title={`${leftValue || "NA"} - ${label}`}
        />
        <span className="text-[8px] text-right">{leftValue || "NA"}</span>
      </div>

      <div className="w-3" />

      {/* Right (away team) bar */}
      <div className="flex items-center flex-1 gap-1 justify-end">
        <span className="text-[8px] w-4 text-left">{rightValue || "NA"}</span>
        <div
          className="bg-blue-600 h-2 rounded-sm"
          style={{ width: `${(rightNum / 100) * maxBarWidth + 5}px` }}
          title={`${rightValue || "NA"} - ${label}`}
        />
      </div>
    </div>
  );
};

// Main statistics card
export default function MatchStatisticsCard() {
  const { particulerMatch } = useContext(Context);

  const homeTeam = particulerMatch?.statistics?.find(
    (d) => d?.team?.id === particulerMatch?.teams?.home?.id
  );
  const awayTeam = particulerMatch?.statistics?.find(
    (d) => d?.team?.id === particulerMatch?.teams?.away?.id
  );

  
  

  const requiredStats = [
    "Ball Possession",
    "Shots insidebox",
    "Total Shots",
    "Goalkeeper Saves",
  ];

  return (
    <div className="w-full p-2 rounded-lg bg-[#0f0f0f] text-white border border-purple-800 shadow-lg font-sans aspect-[16/6]">
      {/* Header with team logos */}
      <div className="flex items-center justify-between mb-1 px-1">
        <span className="flex items-center gap-4 text-xs font-bold truncate text-center">
          <span>Statistics</span>
          <img
            src={homeTeam?.team?.logo }
            alt={homeTeam?.team?.name || "Home Team"}
            className="w-6 h-6 rounded"
            title={homeTeam?.team?.name || "NA"}
          />
        </span>

        <img
          src={awayTeam?.team?.logo }
          alt={awayTeam?.team?.name || "Away Team"}
          className="w-6 h-6 rounded"
          title={awayTeam?.team?.name || "NA"}
        />
      </div>

      {/* Statistics comparison */}
      <div className="px-1">
        {requiredStats.map((type) => {
          const homeStat = homeTeam?.statistics?.find((s) => s.type === type);
          const awayStat = awayTeam?.statistics?.find((s) => s.type === type);

          return (
            <StatBar
              key={type}
              label={type}
              leftValue={homeStat?.value || "NA"}
              rightValue={awayStat?.value || "NA"}
            />
          );
        })}
      </div>
    </div>
  );
}
