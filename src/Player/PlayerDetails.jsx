


import React, { useContext, useEffect } from "react";

import PlayerMatchSlider from "./PlayerMatchSlider";
import PlayerMatches from "./PlayerMatches";
import { Outlet, useLocation } from "react-router-dom";
import { Context } from "../Context_holder";
import PlayerTabs from "./PlayerTabs";



export default function PlayerDetails() {
  const {setPlayerDetailsActivetab}=useContext(Context)


    // GET https://v3.football.api-sports.io/players?id=276&season=2023   

        const data= [
    {
      player: {
        id: 276,
        name: "Cristiano Ronaldo",
        firstname: "Cristiano Ronaldo",
        lastname: "dos Santos Aveiro",
        age: 38,
        birth: {
          date: "1985-02-05",
          place: "Funchal",
          country: "Portugal"
        },
        nationality: "Portugal",
        height: "187 cm",
        weight: "83 kg",
        injured: false,
        photo: "https://media.api-sports.io/football/players/276.png"
      },
      statistics: [
        {
          team: {
            id: 159,
            name: "Al Nassr",
            logo: "https://media.api-sports.io/football/teams/159.png"
          },
          league: {
            id: 307,
            name: "Saudi Professional League",
            country: "Saudi Arabia",
            logo: "https://media.api-sports.io/football/leagues/307.png",
            flag: "https://media.api-sports.io/flags/sa.svg",
            season: 2023
          },
          games: {
            appearences: 27,
            lineups: 27,
            minutes: 2430,
            number: null,
            position: "Attacker",
            rating: "7.9",
            captain: true
          },
          substitutes: {
            in: 0,
            out: 3,
            bench: 0
          },
          shots: {
            total: 110,
            on: 65
          },
          goals: {
            total: 30,
            conceded: 0,
            assists: 5,
            saves: null
          },
          passes: {
            total: 950,
            key: 45,
            accuracy: "85%"
          },
          tackles: {
            total: 10,
            blocks: 2,
            interceptions: 5
          },
          duels: {
            total: 150,
            won: 90
          },
          dribbles: {
            attempts: 60,
            success: 40,
            past: null
          },
          fouls: {
            drawn: 20,
            committed: 10
          },
          cards: {
            yellow: 3,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: 2,
            commited: 1,
            scored: 5,
            missed: 1,
            saved: null
          }
        }
      ]
    }
  ]
  const player = data[0].player;
  const stats = data[0].statistics[0];


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
          src={player.photo}
          alt={player.name}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-purple-600"
        />
        <div className="text-center sm:text-left sm:ml-6 mt-4 sm:mt-0 space-y-1">
          <h2 className="text-lg sm:text-2xl font-bold">{player.name}</h2>
          <p className="text-xs sm:text-sm opacity-70">{player.birth.date} ({player.age} yrs)</p>
          <p className="text-xs sm:text-sm opacity-70">
            {player.birth.place}, {player.birth.country}
          </p>
          <p className="text-xs sm:text-sm">Height: {player.height} | Weight: {player.weight}</p>
          <p className="text-xs sm:text-sm">Nationality: {player.nationality}</p>
          <p className="text-xs sm:text-sm font-medium text-green-400">
            {player.injured ? "Injured" : "Fit"}
          </p>
        </div>
      </div>

   


     <PlayerTabs/>

     <Outlet/>


   



    </div>
  </div>
);}


