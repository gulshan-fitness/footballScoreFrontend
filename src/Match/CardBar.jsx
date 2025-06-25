import React from 'react'

export default function CardBar({ yellow1, red1, yellow2, red2,homeTeam,awayTeam }) {
 const total1 = yellow1 + red1;
  const total2 = yellow2 + red2;
  const max = Math.max(total1, total2, 1);
  console.log(yellow1, red1, yellow2, red2);
  

  return (
    <div className="w-full px-2  ">
       <div className="flex justify-between items-center "> 
      <div  className="flex gap-1 items-center text-[10px]">
 <img src={homeTeam?.team?.logo} alt="" className=" rounded-full border-2 h-4 w-4 border-red-500" /> <span className=" w-[50px] truncate">{homeTeam?.team?.name}</span>
      </div>
 <div className="text-[10px] font-semibold  text-center ">Cards</div>

          <div  className="flex gap-1 items-center text-[10px]">
<span className=" w-[50px] truncate">{awayTeam?.team?.name}</span>  <img src={awayTeam?.team?.logo} alt="" className=" rounded-full border-2 h-4 w-4 border-blue-500"/>
      </div>
     
    
     </div>
     
      <div className="flex items-center gap-1 ">
        <div className="flex-1 relative">

          <div className="flex h-2 rounded overflow-hidden ">
            
            <div className="bg-yellow-400" style={{ width: `${(yellow1 / max) * 100}%` }} />
            <div className="bg-red-500" style={{ width: `${(red1 / max) * 100}%` }} />

          </div>
          <div className="text-[9px] absolute left-0 top-1">{total1}</div>
        </div>
        <div className="w-3 text-center text-[10px]">vs</div>
        <div className="flex-1 relative">

          <div className="flex h-2 rounded overflow-hidden ">

            <div className="bg-yellow-400" style={{ width: `${(yellow2 / max) * 100}%` }} />
            <div className="bg-red-500" style={{ width: `${(red2 / max) * 100}%` }} />

          </div>
          <div className="text-[9px] absolute right-0 top-1">{total2}</div>
        </div>
      </div>
    </div>
  );
}
