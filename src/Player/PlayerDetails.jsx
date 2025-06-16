


import React, { useContext, useEffect } from "react";

import PlayerMatchSlider from "./PlayerMatchSlider";
import PlayerMatches from "./PlayerMatches";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Context } from "../Context_holder";
import PlayerTabs from "./PlayerTabs";



export default function PlayerDetails() {
  const {setPlayerDetailsActivetab,PlayerFetch,PlayerDetails}=useContext(Context)


 


  const{id,season}=useParams()


  useEffect(
    ()=>{
      if (id &&season) 

      PlayerFetch(`?id=${id}&season=${season}`)

      
    },
    []
  )



  const player = PlayerDetails?.player&& PlayerDetails?.player;
  


      const location = useLocation();

  
;
     
    useEffect(() => {
  
      if (location?.pathname) { 
        setPlayerDetailsActivetab(location.pathname.split('/').filter(Boolean).pop());
      }

  
  
  
  
    }, [location?.pathname])


return (
  <div className="bg-gradient-to-b from-[#0B0C10] via-[#1F2833] to-[#000000] text-gray-300 px-4">
    <div>
      {/* Player Profile */}
      <div className="flex flex-col sm:flex-row items-center hover:shadow-[0_0_40px_rgba(128,0,255,0.4)] transition-all duration-500 ease-in-out border-purple-800 rounded-2xl px-4 py-2 border">
        <img
          src={player?.photo}
          alt={player?.name}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-purple-600"
        />
        <div className="text-center sm:text-left sm:ml-6 mt-4 sm:mt-0 space-y-1">
          <h2 className="text-lg sm:text-2xl font-bold">{player?.name}</h2>
          <p className="text-xs sm:text-sm opacity-70">{player?.birth.date} ({player?.age} yrs)</p>
          <p className="text-xs sm:text-sm opacity-70">
            {player?.birth.place}, {player?.birth.country}
          </p>
          <p className="text-xs sm:text-sm">Height: {player?.height} | Weight: {player?.weight}</p>
          <p className="text-xs sm:text-sm">Nationality: {player?.nationality}</p>
          <p className="text-xs sm:text-sm font-medium text-green-400">
            {player?.injured ? "Injured" : "Fit"}
          </p>
        </div>
      </div>

   


     <PlayerTabs/>

     <Outlet/>


   



    </div>
  </div>
);}


