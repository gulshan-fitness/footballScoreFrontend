import { useContext, useEffect, useState } from "react";


import {  Outlet, useLocation, useParams } from "react-router-dom";
import LeagueCard from "./LeagueCard";
import LeagueTabs from "./LeagueTabs";
import { Context } from "../Context_holder";






export default function LeagueDetails() {

  const{setLeagueDetailsActivetab, Matches,MatchesFetch,StandingsFetch}=useContext(Context)



  const {id,season}=useParams()

   const location = useLocation();

   useEffect(
    ()=>{
      if(!id||!season) return

MatchesFetch(`?league=${id}&season=${season}`)
MatchesFetch(`?league=${id}&season=${season}&next=${100}`)
StandingsFetch(`?league=${id}&season=${season}`)

    },[id,season]
   )
  
    useEffect(() => {
          if (location?.pathname) {
       
     
        setLeagueDetailsActivetab(location.pathname.split('/').filter(Boolean).pop());
      }

  
  
    }, [location?.pathname]);


    const leagueInfo=Matches?.length!=0 && Matches[0]?.league





  return (


    <div className="bg-gradient-to-b from-[#0B0C10] via-[#1F2833] to-[#000000] text-gray-300 min-h-screen  p-4 font-sans space-y-6 w-full selection:bg-purple-700 selection:text-white">


  <LeagueCard league={leagueInfo} />

    <LeagueTabs />

      <Outlet/>

    </div>
    


  );
}
