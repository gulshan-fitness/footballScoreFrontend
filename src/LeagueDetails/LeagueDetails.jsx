import { useContext, useEffect, useState } from "react";


import {  Outlet, useLocation } from "react-router-dom";
import LeagueCard from "./LeagueCard";
import LeagueTabs from "./LeagueTabs";
import { Context } from "../Context_holder";


const league = {
  name: "Süper Lig",
  country: "Türkiye",
  logo: "https://media.api-sports.io/football/leagues/203.png",
};





export default function LeagueDetails() {
  const{setLeagueDetailsActivetab}=useContext(Context)

   const location = useLocation();
  
    useEffect(() => {
          if (location?.pathname) {
       
     
        setLeagueDetailsActivetab(location.pathname.split('/').filter(Boolean).pop());
      }

  
      // if (location?.pathname === "/leaguedetails/overview") {
       
     
      //   ("overview");
      // }

      //    if (location?.pathname === "/leaguedetails/fixtures") {
       
     
      //   setLeagueDetailsActivetab("fixtures");
      // }

      //      if (location?.pathname === "/leaguedetails/results") {
       
     
      //   setLeagueDetailsActivetab("results");
      // }

      
      //      if (location?.pathname === "/leaguedetails/standings") {
       
     
      //   setLeagueDetailsActivetab("standings");
      // }
  
  
  
    }, [location?.pathname]);



  return (


    <div className="bg-gradient-to-b from-[#0B0C10] via-[#1F2833] to-[#000000] text-gray-300 min-h-screen  p-4 font-sans space-y-6 w-full selection:bg-purple-700 selection:text-white">


  <LeagueCard league={league} />

    <LeagueTabs  />

      <Outlet/>





     

    </div>
    


  );
}
