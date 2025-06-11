import React, { useContext } from "react";
import { Context } from "../Context_holder";

const TeamPerformanceGraph = ({ team, teamName, color }) => {
  // Extract relevant stats
  const shotsOnGoal = team?.find(stat => stat.type === "Shots on Goal")?.value || 0;
  const shotsOffGoal = team?.find(stat => stat.type === "Shots off Goal")?.value || 0;
  const possession = parseInt(team?.find(stat => stat.type === "Ball Possession")?.value) || 0;
  const passesAccuracy = parseInt(team?.find(stat => stat.type === "Passes %")?.value) || 0;

  return (
    <div className="flex flex-col p-2 border border-gray-700 rounded-lg mb-2">
      <h3 className="text-center font-bold mb-2" style={{ color }}>{teamName}</h3>
      
      <div className="grid gap-3">
        {/* Attack Effectiveness */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span>Attack Effectiveness</span>
            <span>{shotsOnGoal} / {shotsOffGoal}</span>
          </div>
          <div className="flex h-4 bg-gray-700 rounded overflow-hidden">
            <div 
              className="bg-green-500" 
              style={{ width: `${(shotsOnGoal / (shotsOnGoal + shotsOffGoal)) * 100}%` }}
            />
            <div 
              className="bg-yellow-500" 
              style={{ width: `${(shotsOffGoal / (shotsOnGoal + shotsOffGoal)) * 100}%` }}
            />
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span>On Target</span>
            <span>Off Target</span>
          </div>
        </div>

        {/* Possession & Passing */}
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span>Possession & Passing</span>
            <span>{possession}% / {passesAccuracy}%</span>
          </div>
          <div className="flex h-4 bg-gray-700 rounded overflow-hidden">
            <div 
              className="bg-blue-500" 
              style={{ width: `${possession}%` }}
            />
            <div 
              className="bg-purple-500" 
              style={{ width: `${passesAccuracy - possession}%` }}
            />
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span>Possession</span>
            <span>Pass Accuracy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CompactPerformanceCard() {
  const { particulerMatch } = useContext(Context);

  // Extract statistics for both teams
  const homeStats = particulerMatch?.statistics?.[0]?.statistics || [];
  const awayStats = particulerMatch?.statistics?.[1]?.statistics || [];
  const homeTeam = particulerMatch?.teams?.home?.name || "Home";
  const awayTeam = particulerMatch?.teams?.away?.name || "Away";

  return (
    <div className="bg-[#111] text-white rounded-lg border border-purple-800 p-3">
      <h2 className="text-center font-bold mb-3">Team Performance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TeamPerformanceGraph 
          team={homeStats} 
          teamName={homeTeam} 
          color="#3b82f6" 
        />
        <TeamPerformanceGraph 
          team={awayStats} 
          teamName={awayTeam} 
          color="#ef4444" 
        />
      </div>
    </div>
  );
}