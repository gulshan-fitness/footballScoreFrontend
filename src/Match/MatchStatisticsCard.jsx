
import React, { useContext } from "react";
import { Context } from "../Context_holder";

const statsData = {
  response: [
    {
      team: {
        id: 33,
        name: "Manchester United",
        logo: "https://media.api-sports.io/football/teams/33.png",
      },
      statistics: [
        { type: "Ball Possession", value: "59%" },
        { type: "Dangerous Attacks", value: "36%" },
        { type: "Attacks", value: "18%" },
        { type: "Ball Safe", value: "46%" },
      ],
    },
    {
      team: {
        id: 50,
        name: "Chelsea",
        logo: "https://media.api-sports.io/football/teams/50.png",
      },
      statistics: [
        { type: "Ball Possession", value: "41%" },
        { type: "Dangerous Attacks", value: "23%" },
        { type: "Attacks", value: "25%" },
        { type: "Ball Safe", value: "52%" },
      ],
    },
  ],
};

const StatBar=({ label, leftValue, rightValue }) =>{
  const leftNum = parseInt(leftValue);
  const rightNum = parseInt(rightValue);
  const maxBarWidth = 70; // smaller width to fit compact size

  return (
    <div className="flex items-center ">

      <div className="w-20 text-[10px] font-semibold text-gray-400 truncate">{
        label=="Shots insidebox"&&"Dangerous Attacks"||  label=="Total Shots"&&"Attacks"||
        label=="Goalkeeper Saves"&&"Ball Safe"||label
        }</div>

      {/* Left team bar */}
      <div className="flex items-center flex-1 gap-1">
        <div
          className="bg-red-600 h-1 rounded"
          style={{ width: `${(leftNum / 100)*maxBarWidth+5}px` }}
          title={`${leftValue} - ${label}`}
        />
        <span className="text-[8px]  text-right">{leftValue}</span>
      </div>

      <div className="w-3"/>

      {/* Right team bar */}
      <div className="flex items-center flex-1 gap-1 justify-end">
        <span className="text-[8px] w-4 text-left">{rightValue}</span>
        <div
          className="bg-blue-600 h-1 rounded"
          style={{ width: `${(rightNum / 100) * maxBarWidth+5}px` }}
          title={`${rightValue} - ${label}`}
        />
      </div>
    </div>
  );
}
// GET https://v3.football.api-sports.io/fixtures/statistics?fixture={MATCH_ID}


export default function MatchStatisticsCard() {
  const{ particulerMatch}=useContext(Context)
  

  
const homeTeam =particulerMatch&&  particulerMatch?.statistics?.find(d=>d?.team?.id== particulerMatch?.teams?.home?.id ) 
    
    

    const awayTeam =particulerMatch&& particulerMatch?.statistics?.find(d=>d?.team?.id== particulerMatch?.teams?.away?.id ) 
  

  return (
    <div
       className="
    w-full  p-2 rounded-lg 
        bg-[#0f0f0f] text-white 
        border border-purple-800 
        shadow-lg 
        font-sans
        aspect-[16/6]"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-1 px-1">
         <span className="flex items-center gap-4 text-xs font-bold truncate  text-center">

         <span>Statistics</span> 
           <img
          src={homeTeam?.team.logo}
          alt={homeTeam?.team.name}
          className="w-6 h-6 rounded"
          title={homeTeam?.team.name}
        />
        </span>
       
       
        <img
          src={awayTeam?.team.logo}
          alt={awayTeam?.team.name}
          className="w-6 h-6 rounded"
          title={awayTeam?.team.name}
        />
      </div>

      {/* Stats */}
      <div className="px-1">
        {homeTeam?.statistics?.map((stat, idx) => {
          // Filter to only 4 required stats
          const requiredStats = [
            "Ball Possession",      // Exact match
  "Shots insidebox",     // Proxy for Dangerous Attacks
  "Total Shots",         // Proxy for Attacks
  "Goalkeeper Saves"     // Proxy for Ball Safe
          ];
          if (!requiredStats?.includes(stat.type)) return null;

          const rightStat = awayTeam?.statistics.find((s) => s.type === stat.type);
          const rightValue = rightStat ? rightStat.value : "0%";

          return (
            <StatBar
              key={stat.type}
              label={ stat.type}
              leftValue={stat.value}
              rightValue={rightValue}
            />
          );
        })}
      </div>

    </div>
  );
}
