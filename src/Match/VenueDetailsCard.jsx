import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context_holder";
import axios from "axios";



const FootballPitchIcon =  ({ size = 100, color = "#a855f7" }) => (
    <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Field outline */}
    <rect x="4" y="4" width="56" height="56" rx="4" stroke={color} strokeWidth="3" />

    {/* Midline */}
    <line x1="32" y1="4" x2="32" y2="60" stroke={color} strokeWidth="2" />

    {/* Center circle */}
    <circle cx="32" cy="32" r="8" stroke={color} strokeWidth="2" />

    {/* Center dot */}
    <circle cx="32" cy="32" r="1.5" fill={color} />

    {/* Left goal box */}
    <rect x="4" y="20" width="8" height="24" stroke={color} strokeWidth="2" />

    {/* Right goal box */}
    <rect x="52" y="20" width="8" height="24" stroke={color} strokeWidth="2" />
  </svg>
  );



// GET https://v3.football.api-sports.io/fixtures?id={MATCH_ID}
// Fields:

// fixture.venue.name → e.g. "Allianz Arena"

// fixture.venue.city → e.g. "Munich"

// GET https://v3.football.api-sports.io/teams?id={TEAM_ID}
// Then use team.venue.latitude and team.venue.longitude.




export default function VenueDetailsCard() {

    const{particulerMatch}=useContext(Context)
    const[vanueDetails,setvanueDetails]=useState(null)

    useEffect(
      ()=>{

axios.get(`https://v3.football.api-sports.io/venues?id=${particulerMatch?.fixture?.venue?.id}`,
 { headers:{
              "x-apisports-key": import.meta.env.VITE_FOOTBALL_API_KEY,
            }}

).then(
  (success)=>{
    success?.data?.response?.length!=0 && setvanueDetails(success?.data?.response[0])

  }
)
.catch(
  (error)=>{
console.log(error);

  }
)
      },[particulerMatch]
    )

  return (
    <div
      className="
        w-full 
        bg-[#0f0f0f] text-gray-100 p-2 rounded-md 
        border border-purple-800 shadow-md 
        flex flex-col 
        text-[10px] leading-tight
aspect-[16/6]
        sm:text-[11px]
        md:text-[12px]
        lg:text-[13px]  
      "
      
    >


    

<section>
    {/* Header */}
      <div className="flex items-center justify-center gap-1 mb-3 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]">
     
        <p className="font-semibold text-white truncate max-w-[100px]">
          {particulerMatch?.fixture?.venue?.name??"NA"}
        </p>
        <span className="text-gray-400 truncate ml-1">{particulerMatch?.fixture?.venue?.city??"NA"}</span>
      </div>

  
      <div className=" flex flex-col gap-3 ">


        {/* Attendance */}
   <div className="flex justify-between items-center">
    
        <div className="flex items-center gap-2">
          <img src="/image/stadium.svg" className="w-4" alt="" />
          <span className="text-gray-400 truncate">capacity</span>
        </div>
        <span className="col-span-2 text-right text-white truncate">{vanueDetails?.capacity??"NA"}</span>

   </div>

        {/* Pitch */}
 <div className="flex justify-between items-center">
 <div className="flex items-center gap-2">
           <FootballPitchIcon size={18} color="white" />
          <span className="text-gray-400 truncate">Pitch</span>
        </div>
        <span className="col-span-2 text-right text-white truncate">{vanueDetails?.surface??"NA"}</span>

 </div>

       
      </div>

</section>

    

   
    </div>
  );
}
