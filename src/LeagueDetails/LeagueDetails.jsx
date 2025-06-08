import { useContext, useEffect, useState } from "react";


import {  Outlet, useLocation, useParams } from "react-router-dom";
import LeagueCard from "./LeagueCard";
import LeagueTabs from "./LeagueTabs";
import { Context } from "../Context_holder";


const league = {
  name: "Süper Lig",
  country: "Türkiye",
  logo: "https://media.api-sports.io/football/leagues/203.png",
};


export default function LeagueDetails() {
  const{setLeagueDetailsActivetab,LeagueDetails,setLeagueDetails}=useContext(Context)
  const {id}=useParams()

   const location = useLocation();
  
    useEffect(() => {
          if (location?.pathname) {
       
     
        setLeagueDetailsActivetab(location.pathname.split('/').filter(Boolean).pop());
      }

  
  
    }, [location?.pathname]);


console.log(id);


  return (


    <div className="bg-gradient-to-b from-[#0B0C10] via-[#1F2833] to-[#000000] text-gray-300 min-h-screen  p-4 font-sans space-y-6 w-full selection:bg-purple-700 selection:text-white">


  <LeagueCard league={LeagueDetails} />

    <LeagueTabs  />

      <Outlet/>

    </div>
    


  );
}
