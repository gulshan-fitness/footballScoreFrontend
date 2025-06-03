import React from "react";

export default function MatchEndedCard() {
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
      <div className="text-center leading-tight">
        <p className="uppercase tracking-wider text-gray-400 text-[9px] sm:text-[10px] md:text-[11px]">Match ended</p>
        <p className="text-lg font-bold text-white">
          2<span className="mx-1 text-purple-500">:</span>2
        </p>
        <p className="text-gray-500 text-[9px] sm:text-[10px]">Full Time</p>
      </div>

      {/* HT Score */}
      <div className="text-center text-gray-300 text-[9px] sm:text-[10px]">
        HT <span className="font-semibold">1<span className="mx-0.5">:</span>1</span>
      </div>

      {/* Info Section */}
      <div className="border-t border-purple-800 pt-1 mt-1 space-y-[2px] text-[9px] sm:text-[10px]">
        <div className="flex justify-between">
          <span className="text-gray-400">Referee</span>
          <span className="text-white truncate text-right">Nogueira, Miguel</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Manager (Home)</span>
          <span className="text-white truncate text-right">Pereira, Fabio</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Manager (Away)</span>
          <span className="text-white truncate text-right">Jose Mota</span>
        </div>
      </div>
    </div>
  );
}
