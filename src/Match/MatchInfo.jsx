import React from "react";
import { LuCalendarDays } from "react-icons/lu";

export default function MatchInfo() {
  const fixture = {
     date: "2025-05-31T18:30:00+00:00",
    referee: "Daniele Orsato",
    venue: {
      name: "Parc des Princes",
      city: "Paris",
    },
    attendance: 48712,
  };
  const { referee, venue ,date} = fixture;



  return (
    <div
      className="
        border border-purple-800/50 backdrop-blur-md mt-6
        rounded-2xl p-4
  
        hover:shadow-[0_0_40px_rgba(128,0,255,0.4)]
        transition-all duration-500 ease-in-out
        w-full 
        text-white space-y-3"
    >
      <h2 className="text-center text-[13px] sm:text-[20px] font-bold tracking-wide text-purple-400 drop-shadow-md">
        Match Info
      </h2>

          <InfoRow
        icon={ <LuCalendarDays className="text-lg" />}
       
        value={new Date(date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
                year: "numeric",
            }) }
      />

      <InfoRow
        icon={ <img src="/image/wishtle.svg" className="w-4" alt="" />}
       
        value={referee}
      />
      <InfoRow
        icon={
 <img src="/image/stadium.svg" className="w-4" alt="" />
        }
        
        value={`${venue?.name}, ${venue?.city}`}
      />
  
    </div>
  );
}

const InfoRow = ({ icon, value }) => (
  <div
    className="flex items-center flex-wrap justify-between  pb-1
      border-b border-white/10 last:border-none transition-all "
  >
    <div className="">
      <div className="w-[22px] sm:w-[26px]">{icon}</div>
     
    </div>
   
    <span className="text-[12px] font-normal   text-right text-gray-100 truncate">
      {value || "N/A"}
    </span>
  </div>
);
