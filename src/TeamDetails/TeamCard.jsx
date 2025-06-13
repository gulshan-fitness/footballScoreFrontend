import React from 'react'
import { FaRegStar } from "react-icons/fa";

export default function TeamCard({team}) {
    console.log(team);
    
  return (
    <div className="bg-gradient-to-br from-[#1c1f28]/70 to-[#0a0c14]/90 rounded-2xl p-4 flex items-center justify-between  border  border-purple-800   shadow-[0_0_20px_rgba(128,0,255,0.7)]
                       transition-shadow duration-500 ">
           <div className="flex items-center gap-4">
             <img src={team?.logo} alt={team?.name} className="w-10 h-10 rounded-full" />
             <div>
               <div className="text-sm font-semibold text-white">{team?.name}</div>
               
             </div>
           </div>
           <FaRegStar className="text-purple-400 text-xl " />
         </div>
  )
}
