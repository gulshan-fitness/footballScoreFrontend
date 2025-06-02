import React from "react";



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

const WeatherIcon = ({ size = 64, color = '#FFA500' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sun Core */}
    <circle cx="32" cy="32" r="12" fill={color} />

    {/* Sun Rays */}
    <line x1="32" y1="6" x2="32" y2="16" stroke={color} strokeWidth="4" />
    <line x1="32" y1="48" x2="32" y2="58" stroke={color} strokeWidth="4" />
    <line x1="6" y1="32" x2="16" y2="32" stroke={color} strokeWidth="4" />
    <line x1="48" y1="32" x2="58" y2="32" stroke={color} strokeWidth="4" />
    <line x1="14" y1="14" x2="22" y2="22" stroke={color} strokeWidth="4" />
    <line x1="42" y1="42" x2="50" y2="50" stroke={color} strokeWidth="4" />
    <line x1="14" y1="50" x2="22" y2="42" stroke={color} strokeWidth="4" />
    <line x1="42" y1="22" x2="50" y2="14" stroke={color} strokeWidth="4" />
  </svg>)

const AttendanceIcon = ({ size = 64, color = '#444' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Head */}
    <circle cx="32" cy="20" r="12" fill={color} stroke={color} strokeWidth="3" />

    {/* Body */}
    <path d="M12 52 C12 38 52 38 52 52 Z" fill={color} stroke={color} strokeWidth="3" />
  </svg>
);


const LocationIcon = ({ size = 64, color = '#1976D2' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left pin */}
    <path
      d="M16 12C11.6 12 8 15.6 8 20C8 28 16 36 16 36C16 36 24 28 24 20C24 15.6 20.4 12 16 12Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <circle cx="16" cy="20" r="3" fill={color} />

    {/* Right pin */}
    <path
      d="M48 36C43.6 36 40 39.6 40 44C40 52 48 60 48 60C48 60 56 52 56 44C56 39.6 52.4 36 48 36Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <circle cx="48" cy="44" r="3" fill={color} />

    {/* Dotted path */}
    <path
      d="M19 26 C28 32, 36 38, 45 44"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="4,4"
      fill="none"
    />
  </svg>);


// GET https://v3.football.api-sports.io/fixtures?id={MATCH_ID}
// Fields:

// fixture.venue.name → e.g. "Allianz Arena"

// fixture.venue.city → e.g. "Munich"

// GET https://v3.football.api-sports.io/teams?id={TEAM_ID}
// Then use team.venue.latitude and team.venue.longitude.



export default function VenueDetailsCard() {
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
      {/* Header */}
      <div className="flex items-center justify-center gap-1 mb-1 text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px]">
     
        <p className="font-semibold text-white truncate max-w-[100px]">
          Allianz Arena
        </p>
        <span className="text-gray-400 truncate ml-1">Munich</span>
      </div>

  
      <div className=" flex flex-col gap-1 ">

        {/* Weather */}

        <div className="flex justify-between items-center">
  <div className="flex items-center gap-1">

          <WeatherIcon size={18} color="orange" />
          <span className="text-gray-400 truncate">Weather</span>
        </div>
        <span className="col-span-1 text-right text-white truncate">Moderate</span>
        </div>
      

        {/* Attendance */}
   <div className="flex justify-between items-center">
    
        <div className="flex items-center gap-1">
          <AttendanceIcon size={18} color="white" />
          <span className="text-gray-400 truncate">Attendance</span>
        </div>
        <span className="col-span-2 text-right text-white truncate">64,327</span>

   </div>

        {/* Pitch */}
 <div className="flex justify-between items-center">
 <div className="flex items-center gap-1">
           <FootballPitchIcon size={18} color="green" />
          <span className="text-gray-400 truncate">Pitch</span>
        </div>
        <span className="col-span-2 text-right text-white truncate">Good</span>

 </div>

       
      </div>

      {/* Footer */}
      <div className="border-t border-purple-800 pt-1 mt-1 flex items-center justify-between text-[9px] sm:text-[10px] md:text-[11px]">
        <LocationIcon size={20} color="blue" />
        <span className="text-gray-400 truncate">Distance</span>
        <span className="text-white truncate">641 km</span>
      </div>
    </div>
  );
}
