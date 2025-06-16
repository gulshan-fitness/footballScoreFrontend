import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function PlayerstatsCard({ player }) {
const{ season}=useParams()

  return (
    <div
      key={player?.rank}
      className="flex items-center justify-between p-3 rounded-lg"
    >
      

      {/* Player Info */}
      <div className=" flex flex-col gap-1">

        <Link to={`/player/${player?.player_id}/${season}/info`}   className='flex items-center gap-2 '>
{/* Rank */}
      <div className="w-6 text-center font-bold text-white text-sm sm:text-base">
        {player?.rank}
      </div>
              <img
          src={player?.photo}
          alt={player?.name}
          className="w-6 h-6 rounded-full object-cover"
        />
        <div className="font-semibold text-[10px] w-full truncate sm:text-sm md:text-base">
          {player?.name}
        </div>

        </Link>
      
        
 {/* Team Logo & Name */}
      <Link to={`/team/${player?.team_id}/${season}/overview`} className="flex  gap-2 items-center ml-6 ">
        <img
          src={player?.teamLogo}
          alt={player?.team}
          className="w-5 h-5 object-contain"
        />
        <p className="text-center text-[9px] sm:text-[10px] md:text-xs  w-full">
          {player?.team}
        </p>
      </Link>

      </div>

     

      {/* Scored Stat */}
      <div className="text-xs sm:text-sm md:text-base font-medium text-right w-20">
        {player?.scored}
      </div>
    </div>
  );
}
