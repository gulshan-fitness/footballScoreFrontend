import React, { useContext } from "react";
import { Context } from "../Context_holder";

export default function MatchEndedCard() {
  const{particulerMatch}=useContext(Context)


 const halftime = particulerMatch?.score?.halftime ?? { home: null, away: null };
    const fulltime = particulerMatch?.score?.fulltime ?? { home: null, away: null };
  const extratime = particulerMatch?.score?.extratime ?? { home: null, away: null };
  const penalty = particulerMatch?.score?.penalty ?? { home: null, away: null };


  
  // Calculate match status
  const hasExtraTime = extratime?.home !== null && extratime?.away !== null;
  const hasPenalties = penalty?.home !== null && penalty?.away !== null;

  // Determine displayed score
  let displayScore = {
    home: fulltime?.home ?? null,
    away: fulltime?.away ?? null
  };
  
  let resultSubtitle = "Full Time";

  if (hasExtraTime) {
    displayScore.home = (fulltime?.home ?? 0) + (extratime?.home ?? 0);
    displayScore.away = (fulltime?.away ?? 0) + (extratime?.away ?? 0);
    resultSubtitle = "After Extra Time";
  }

  if (hasPenalties) {
    resultSubtitle = `Penalties ${penalty?.home ?? 0}-${penalty?.away ?? 0}`;
  }



  return (
    <div
      className="
        w-full  text-gray-100 p-2 rounded-md 
        border border-purple-800 shadow 
        flex flex-col  
        bg-black
        text-[10px] leading-tight
        aspect-[16/6]
        sm:text-[11px] md:text-[12px] lg:text-[13px]
        
      "
    >
      {/* Top Section: Result */}
    <div className="space-y-2">
      {/* Main Result */}
      <div className="text-center leading-tight">
        <p className="uppercase tracking-wider text-gray-400 text-[9px] sm:text-[10px] md:text-[11px]">
          Match ended
        </p>
        <p className="text-lg font-bold text-white">
          {displayScore?.home ?? '-'}
          <span className="mx-1 text-purple-500">:</span>
          {displayScore?.away ?? '-'}
        </p>
        <p className="text-gray-500 text-[9px] sm:text-[10px]">
          {resultSubtitle}
        </p>
      </div>

      {/* Halftime Score */}
      {halftime?.home !== null && halftime?.away !== null && (
        <div className="text-center text-gray-300 text-[9px]  sm:text-[10px]" style={{margin:"0px"}}>
          HT <span className="font-semibold">
            {halftime?.home}<span className="mx-0.5">:</span>{halftime?.away}
          </span>
        </div>
      )}

      {/* Fulltime Score (only if different from displayed score) */}
      {hasExtraTime && (
        <div className="text-center text-gray-300 text-[9px]  m-0  sm:text-[10px]">
          FT <span className="font-semibold">
            {fulltime?.home}<span className="mx-0.5">:</span>{fulltime?.away}
          </span>
        </div>
      )}
    </div>

      {/* Info Section */}
      <div className="border-t border-purple-800 pt-1 mt-1 space-y-[2px] text-[9px] sm:text-[10px]">
        <div className="flex justify-between">
          <span className="text-gray-400">Referee</span>
          <span className="text-white truncate text-right">{particulerMatch?.fixture?.referee}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Manager (Home)</span>
          <span className="text-white truncate text-right">{particulerMatch?.lineups?.find(d=>d.team?.id==particulerMatch?.teams?.home?.id)?.coach?.name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Manager (Away)</span>
          <span className="text-white truncate text-right">{particulerMatch?.lineups?.find(d=>d.team?.id==particulerMatch?.teams?.away?.id)?.coach?.name}</span>
        </div>
      </div>
    </div>
  );
}
