import React, { useContext } from "react";
import { Context } from "../Context_holder";
import Loader from "../Loader";


const parseValue = (val) => {
  if (!val) return 0; // handles null, undefined, 0, ''
  if (typeof val === "string" && val.includes('%')) return parseInt(val);
  const num = Number(val);
  return isNaN(num) ? 0 : num;
};


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
        {label=="Corner Kicks"&&"Corner"||label=="Shots on Goal"&&"on target"||label=="Goalkeeper Saves"&&"Saves" ||label=="Shots off Goal"&&"off target"||
        label=="Total Shots"&&"Attempts"|| label=="Blocked Shots"&&"Blocked" }
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
    <div className="flex flex-col col-span-3 text-[10px] px-1 text-gray-300 mt-1 mb-3">
      <div className="flex justify-between font-semibold leading-none">
        <span className="text-red-500">{leftValue.toFixed(0)}</span>
        <span className="text-white text-[10px] font-normal">{label}</span>
        <span className="text-blue-500">{rightValue}</span>
      </div>
      <div className="flex justify-between gap-1">
        <div
          className="bg-red-600 h-[4px] rounded-sm"
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

  const{particulerMatch}=useContext(Context)

const homeTeam =particulerMatch&&  particulerMatch?.statistics?.find(d=>d?.team?.id== particulerMatch?.teams?.home?.id ) 
    
    

    const awayTeam =particulerMatch&& particulerMatch?.statistics?.find(d=>d?.team?.id== particulerMatch?.teams?.away?.id ) 






  return (
    <div className="bg-[#0f0f0f] w-full   text-white rounded-md p-[4px] border border-purple-800 shadow font-sans overflow-hidden">
     
  
             <HorizontalStat
             
                key={""}
                label={"Conversion Rate"}

                leftValue={(particulerMatch?.goals?.home/homeTeam?.statistics?.find(d=>d?.type=="Shots on Goal")?.value)*100}

                rightValue={(particulerMatch?.goals?.away/awayTeam?.statistics?.find(d=>d?.type=="Shots on Goal")?.value)*100}

              />
         

      {/* Stats Grid */}
      <div className="grid grid-cols-3 flex-wrap justify-between px-[2px] gap-2">

{
  homeTeam?.statistics?.length!=0?<div>
     {homeTeam?.statistics?.map((stat) => {
          const right = awayTeam?.statistics?.find((s) => s.type === stat.type);
        
const requiredStats = [
            "Corner Kicks",      
  "Shots on Goal",     
  "Goalkeeper Saves"  ,      
  "Shots off Goal"   ,
  "Total Shots" ,
  "Blocked Shots" 
          ];
          if (!requiredStats?.includes(stat.type)) return null;

          return (
            <VerticalBar
              key={stat?.type}
              label={stat?.type}
              leftValue={stat?.value}
              rightValue={right?.value || "0"}
            />
          );
        })}
  </div>:
  <Loader/>
}
       

      </div>
    </div>
  );
}
