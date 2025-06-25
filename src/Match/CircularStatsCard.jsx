import React, { useContext } from "react";
import { Context } from "../Context_holder";
import Donut from "./Donut";
import CardBar from "./CardBar";







// const Donut = ({ label, val1, val2, color1, color2 }) => {
//   const radius = 14;
//   const stroke = 4;
//   const size = radius * 2 + stroke * 2;
//   const circ = 2 * Math.PI * radius;

//   const total = Math.max(val1 + val2, 1); // Prevent divide by 0
//   const arc1 = (val1 / total) * circ;
//   const arc2 = (val2 / total) * circ;

//   return (
//     <div className="flex flex-col items-center w-[60px] text-[9px]">
//       <div className="relative w-[60px] h-[60px]">
//         <svg viewBox={`0 0 ${size} ${size}`} className="absolute">
//           {/* Background Circle */}
//           <circle
//             cx={size / 2}
//             cy={size / 2}
//             r={radius}
//             fill="none"
//             stroke="#333"
//             strokeWidth={stroke}
//           />
//           {/* Red Arc */}
//           <circle
//             cx={size / 2}
//             cy={size / 2}
//             r={radius}
//             fill="none"
//             stroke={color1}
//             strokeWidth={stroke}
//             strokeDasharray={`${arc1} ${circ - arc1}`}
//             strokeDashoffset={0}
//             transform={`rotate(-90 ${size / 2} ${size / 2})`}
//           />
//           {/* Blue Arc */}
//           <circle
//             cx={size / 2}
//             cy={size / 2}
//             r={radius}
//             fill="none"
//             stroke={color2}
//             strokeWidth={stroke}
//             strokeDasharray={`${arc2} ${circ - arc2}`}
//             strokeDashoffset={-arc1}
//             transform={`rotate(-90 ${size / 2} ${size / 2})`}
//           />
//         </svg>
//         {/* Values inside */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-[11px] font-semibold leading-tight">
//           <span className="text-red-400">{val1}</span>
//           <span className="text-blue-400">{val2}</span>
//         </div>
//       </div>
//       <div className="text-center text-[10px] uppercase">{label}</div>
//     </div>
//   );
// };


// const CardBar = ({ yellow1, red1, yellow2, red2 }) => {
//   const total1 = yellow1 + red1;
//   const total2 = yellow2 + red2;
//   const max = Math.max(total1, total2, 1);
//   console.log(yellow1, red1, yellow2, red2);
  

//   return (
//     <div className="w-full px-2  ">
//        <div className="flex justify-between items-center "> 
//       <div  className="flex gap-1 items-center text-[10px]">
//  <img src={homeTeam?.team?.logo} alt="" className=" rounded-full border-2 h-4 w-4 border-red-500" /> <span className=" w-[50px] truncate">{homeTeam?.team?.name}</span>
//       </div>
//  <div className="text-[10px] font-semibold  text-center ">Cards</div>

//           <div  className="flex gap-1 items-center text-[10px]">
// <span className=" w-[50px] truncate">{awayTeam?.team?.name}</span>  <img src={awayTeam?.team?.logo} alt="" className=" rounded-full border-2 h-4 w-4 border-blue-500"/>
//       </div>
     
    
//      </div>
     
//       <div className="flex items-center gap-1 ">
//         <div className="flex-1 relative">

//           <div className="flex h-2 rounded overflow-hidden ">
            
//             <div className="bg-yellow-400" style={{ width: `${(yellow1 / max) * 100}%` }} />
//             <div className="bg-red-500" style={{ width: `${(red1 / max) * 100}%` }} />

//           </div>
//           <div className="text-[9px] absolute left-0 top-1">{total1}</div>
//         </div>
//         <div className="w-3 text-center text-[10px]">vs</div>
//         <div className="flex-1 relative">

//           <div className="flex h-2 rounded overflow-hidden ">

//             <div className="bg-yellow-400" style={{ width: `${(yellow2 / max) * 100}%` }} />
//             <div className="bg-red-500" style={{ width: `${(red2 / max) * 100}%` }} />

//           </div>
//           <div className="text-[9px] absolute right-0 top-1">{total2}</div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default function MatchDisciplineStats() {
  const{particulerMatch}=useContext(Context)

const homeTeam =particulerMatch&&  particulerMatch?.statistics?.find(d=>d?.team?.id== particulerMatch?.teams?.home?.id ) 
    
    

    const awayTeam =particulerMatch&& particulerMatch?.statistics?.find(d=>d?.team?.id== particulerMatch?.teams?.away?.id ) 

  
console.log(homeTeam,awayTeam);

  const getStat = (team, type) => {
  if (!team) return 0;

  if (type === "Free Kicks") {

    const fouls = team?.statistics?.find((s) => s.type === "Fouls")?.value || 0;
    const offsides = team?.statistics?.find((s) => s.type === "Offsides")?.value || 0;
    return fouls + offsides;
    
  }

  return team?.statistics?.find((s) => s.type === type)?.value || 0;
};

  return (
    <div className="w-full   aspect-[16/6] bg-[#0f0f0f] text-white border border-purple-800 rounded-lg p-1 flex flex-col ">
      

      <CardBar
        yellow1={getStat(homeTeam, "Yellow Cards")}
        red1={getStat(homeTeam, "Red Cards")}

        yellow2={getStat(awayTeam, "Yellow Cards")}
        red2={getStat(awayTeam, "Red Cards")}

        homeTeam={homeTeam}
        awayTeam={awayTeam}
      />

      <div className="flex justify-around  flex-wrap gap-1">
        <Donut
          label="Fouls"
          val1={getStat(homeTeam, "Fouls")}
          val2={getStat(awayTeam, "Fouls")}
          color1="red"
          color2="blue"
        />
        <Donut
          label="Free Kicks"
          val1={getStat(homeTeam, "Free Kicks")}
          val2={getStat(awayTeam, "Free Kicks")}
          color1="red"
          color2="blue"
        />
        <Donut
          label="Offsides"
          val1={getStat(homeTeam, "Offsides")}
          val2={getStat(awayTeam, "Offsides")}
          color1="red"
          color2="blue"
        />
      </div>
    </div>
  );
}
