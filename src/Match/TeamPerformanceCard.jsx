import React, { useContext } from "react";
import { Context } from "../Context_holder";

const MiniBar = ({ value, max, color, label, showValue = true }) => {
  const width = Math.min((value / max) * 60, 60);
  return (
    <div className="flex items-center w-full max-h-[20px]">
      {showValue && (
        <span className="text-[8px]  text-right mr-0.5">{value}</span>
      )}
      <div className="h-2 bg-gray-700 rounded-sm w-full" >
        <div
          className="h-2 rounded-sm w-[80%]"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="text-[7px] ml-0.5 uppercase">{label}</span>
    </div>
  );
};

const TeamPerformance = ({ team, teamName, color }) => {
  const stats = {
    shotsOn: parseInt(team?.find(s => s.type === "Shots on Goal")?.value) || 0,
    shotsOff: parseInt(team?.find(s => s.type === "Shots off Goal")?.value) || 0,
    possession: parseInt(team?.find(s => s.type === "Ball Possession")?.value) || 0,
    passes: parseInt(team?.find(s => s.type === "Passes accurate")?.value) || 0
  };

  const maxShots = Math.max(stats.shotsOn + stats.shotsOff, 10);
  const maxPass = Math.max(stats.passes, 200);

  return (
    <div className="flex flex-col w-full" >
      <div className="text-[9px] font-bold mb-0.5 max-h-[15px] truncate" style={{ color }}>
        {teamName}
      </div>
      
      {/* Attack Graph */}
      <div className="mb-1">
        <MiniBar value={stats.shotsOn} max={maxShots} color="#4ade80" label="On" />
        <MiniBar value={stats.shotsOff} max={maxShots} color="#fbbf24" label="Off" />
      </div>
      
      {/* Possession Graph */}
      <div>
        <MiniBar 
          value={stats.possession} 
          max={100} 
          color="#60a5fa" 
          label="Poss%" 
          showValue={false}
        />
        <MiniBar 
          value={stats.passes} 
          max={maxPass} 
          color="#a78bfa" 
          label="Pass" 
        />
      </div>
    </div>
  );
};

export default function CompactPerformanceCard() {
  const { particulerMatch } = useContext(Context);
  const homeStats = particulerMatch?.statistics?.[0]?.statistics || [];
  const awayStats = particulerMatch?.statistics?.[1]?.statistics || [];
  const homeTeam = particulerMatch?.teams?.home?.name?.substring(0, 9) || "HOME";
  const awayTeam = particulerMatch?.teams?.away?.name?.substring(0, 9) || "AWAY";

  return (
    <div 
      className="bg-[#111] text-[6px]  text-white rounded-md border border-purple-800 p-1 flex flex-col"
   
    >
      <div className="text-[8px] font-bold text-center max-h-[18px] tracking-tighter"> PERFORMANCE</div>
      
      <div className="flex justify-between px-1">
        <TeamPerformance 
          team={homeStats} 
          teamName={homeTeam} 
          color="#60a5fa" 
        />
        <div className="border-r border-gray-600 mx-0.5"></div>
        <TeamPerformance 
          team={awayStats} 
          teamName={awayTeam} 
          color="#f87171" 
        />
      </div>
    </div>
  );
}