


import React, { useContext } from "react";
import { Context } from "../Context_holder";



const parseValue=(val) =>{
  if (typeof val === "string" && val?.includes("%")) return parseInt(val);
  return isNaN(val) ? 0 : val;
}


export default function MatchStats() {
  const{ particulerMatch}=useContext(Context)

  const homeTeam=particulerMatch&&  particulerMatch?.statistics?.find(d=>d?.team?.id== particulerMatch?.teams?.home?.id ) 
  const awayTeam=particulerMatch&&  particulerMatch?.statistics?.find(d=>d?.team?.id== particulerMatch?.teams?.away?.id ) 

//   GET "https://v3.football.api-sports.io/fixtures/statistics?fixture=123456"

  return (
    <div className="w-full px-4 py-3 mt-6 border border-purple-800/40  rounded-xl text-white  
        hover:shadow-[0_0_40px_rgba(128,0,255,0.4)]
        transition-all duration-500 ease-in-out">
      <div className="grid grid-cols-3 mb-4">

        <div className="flex flex-col  items-center gap-2 text-xs truncate">
          <img src={homeTeam?.team?.logo} className="w-4 h-4" alt={homeTeam?.team?.name} />
         
        </div>

        <div className="text-sm text-purple-300 font-semibold text-center">Stats</div>

        <div className="flex items-center flex-col gap-2 text-xs truncate">
            <img src={awayTeam?.team?.logo} className="w-4 h-4" alt={awayTeam?.team?.name} />
          
          
        </div>
      </div>

      <div className="space-y-2">
        {homeTeam?.statistics?.map((stat, i) => {
          const value1 = parseValue(stat?.value);
          const value2 = parseValue(awayTeam?.statistics[i]?.value);
          const total = value1 + value2 || 1;

          const leftWidth = `${(value1 / total) * 100}%`;
          const rightWidth = `${(value2 / total) * 100}%`;

          return (
            <div key={i} className="text-[11px] sm:text-xs">
              <div className="flex justify-between text-gray-300 px-1">
                <span>{value1}</span>
                <span className="text-white font-medium">{stat?.type}</span>
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
