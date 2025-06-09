


import React, { useContext, useState } from 'react';
import { Context } from '../Context_holder';

export default function LeagueStandings() {
  const{getStandingsByTab,LeagueStandings}=useContext(Context)
  const [activeTab, setActiveTab] = useState('all');
  const [Tabs] = useState(["all", "home", "away", "form"]);

  // GET https://v3.football.api-sports.io/standings?league=203&season=2025

const standings = [
  {
    rank: 1,
    team: {
      id: 135,
      name: "Flamengo",
      logo: "https://media.api-sports.io/football/teams/135.png"
    },
    points: 28,
    goalsDiff: 18,
    group: "Campeonato Brasileiro Série A",
    form: "WWWDW",
    status: "same",
    description: "Promotion - Copa Libertadores (Group Stage)",

    all: {
      played: 12,
      win: 9,
      draw: 1,
      lose: 2,
      goals: { for: 26, against: 8 }
    },
    home: {
      played: 6,
      win: 5,
      draw: 1,
      lose: 0,
      goals: { for: 15, against: 3 }
    },
    away: {
      played: 6,
      win: 4,
      draw: 0,
      lose: 2,
      goals: { for: 11, against: 5 }
    }
  },
  {
    rank: 2,
    team: {
      id: 131,
      name: "Palmeiras",
      logo: "https://media.api-sports.io/football/teams/131.png"
    },
    points: 25,
    goalsDiff: 12,
    group: "Campeonato Brasileiro Série A",
    form: "WLWDW",
    status: "same",
    description: "Promotion - Copa Libertadores (Group Stage)",
    all: {
      played: 12,
      win: 8,
      draw: 1,
      lose: 3,
      goals: { for: 20, against: 8 }
    },
    home: {
      played: 6,
      win: 6,
      draw: 0,
      lose: 0,
      goals: { for: 14, against: 2 }
    },
    away: {
      played: 6,
      win: 2,
      draw: 1,
      lose: 3,
      goals: { for: 6, against: 6 }
    }
  },
  {
    rank: 3,
    team: {
      id: 140,
      name: "Grêmio",
      logo: "https://media.api-sports.io/football/teams/140.png"
    },
    points: 22,
    goalsDiff: 7,
    group: "Campeonato Brasileiro Série A",
    form: "DWLDW",
    status: "up",
    description: "Promotion - Copa Libertadores (Qualification)",
    all: {
      played: 12,
      win: 6,
      draw: 4,
      lose: 2,
      goals: { for: 17, against: 10 }
    },
    home: {
      played: 6,
      win: 4,
      draw: 2,
      lose: 0,
      goals: { for: 11, against: 4 }
    },
    away: {
      played: 6,
      win: 2,
      draw: 2,
      lose: 2,
      goals: { for: 6, against: 6 }
    }
  },
  {
    rank: 4,
    team: {
      id: 138,
      name: "Internacional",
      logo: "https://media.api-sports.io/football/teams/138.png"
    },
    points: 21,
    goalsDiff: 5,
    group: "Campeonato Brasileiro Série A",
    form: "WDLWW",
    status: "up",
    description: "Promotion - Copa Sudamericana (Group Stage)",
    all: {
      played: 12,
      win: 6,
      draw: 3,
      lose: 3,
      goals: { for: 15, against: 10 }
    },
    home: {
      played: 6,
      win: 4,
      draw: 1,
      lose: 1,
      goals: { for: 10, against: 4 }
    },
    away: {
      played: 6,
      win: 2,
      draw: 2,
      lose: 2,
      goals: { for: 5, against: 6 }
    }
  },
  {
    rank: 5,
    team: {
      id: 136,
      name: "Atlético Mineiro",
      logo: "https://media.api-sports.io/football/teams/136.png"
    },
    points: 20,
    goalsDiff: 4,
    group: "Campeonato Brasileiro Série A",
    form: "LWLDD",
    status: "down",
    description: "Promotion - Copa Sudamericana (Group Stage)",
    all: {
      played: 12,
      win: 6,
      draw: 2,
      lose: 4,
      goals: { for: 16, against: 12 }
    },
    home: {
      played: 6,
      win: 4,
      draw: 1,
      lose: 1,
      goals: { for: 10, against: 4 }
    },
    away: {
      played: 6,
      win: 2,
      draw: 1,
      lose: 3,
      goals: { for: 6, against: 8 }
    }
  },
  {
    rank: 16,
    team: {
      id: 134,
      name: "Santos",
      logo: "https://media.api-sports.io/football/teams/134.png"
    },
    points: 10,
    goalsDiff: -9,
    group: "Campeonato Brasileiro Série A",
    form: "LLLDL",
    status: "down",
    description: "Relegation - Campeonato Brasileiro Série B",
    all: {
      played: 12,
      win: 2,
      draw: 4,
      lose: 6,
      goals: { for: 8, against: 17 }
    },
    home: {
      played: 6,
      win: 1,
      draw: 3,
      lose: 2,
      goals: { for: 5, against: 7 }
    },
    away: {
      played: 6,
      win: 1,
      draw: 1,
      lose: 4,
      goals: { for: 3, against: 10 }
    }
  }
];



  return (
    <div className="rounded-lg px-3 py-4 shadow-md bg-gradient-to-b from-[#0B0C10] via-[#1F2833] to-[#000000]">
      {/* Tabs */}
      <div className="flex gap-2 flex-wrap border-b border-purple-800 py-4">
        {Tabs?.map((tab,index) => (
          <button
            key={index}
            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm  rounded-full border ${
              activeTab === tab
                ? ' bg-purple-700/90'
                : 'text-gray-300 border-purple-800'
            } hover:shadow-[0_0_20px_rgba(128,0,255,0.7)] transition`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Table */}

{
   activeTab=="form" ? <div className="overflow-x-auto    thin-scrollbar ">
        <table className="min-w-full divide-y  divide-gray-700">
          <thead>
            <tr className="text-xs sm:text-sm text-white uppercase tracking-wider">
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Team</th>
              <th className="px-2 py-3 text-center">Form</th>
            
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {getStandingsByTab(LeagueStandings, activeTab)?.map((team,index) => (
              <tr key={index} className="text-sm text-gray-300">
                <td className="px-4 py-2 font-semibold text-white">{team.rank}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <img src={team.team.logo} alt={team.team.name} className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                    <span className="text-xs sm:text-sm font-medium truncate">{team.team.name}</span>
                  </div>
                </td>

               
                  
                

<td className="px-2 py-2 justify-center flex gap-1 text-white">
  {team?.form?.split("")?.map((result, idx, arr) => {
    let bgColor = "";

    if (result === "W") bgColor = "bg-green-600";
    else if (result === "L") bgColor = "bg-red-600";
    else if (result === "D") bgColor = "bg-gray-500";

    const isLast = idx === arr.length - 1;
    const borderBottom = isLast ? "border-b-2 border-purple-500" : "";

    return (
        < div  key={idx}>

          <div
    
        className={`flex justify-center items-center w-5 h-5 text-[10px] rounded-full ${bgColor} border border-purple-800 `}
      >
        {result}
      </div>
      <p className={`${borderBottom} w-full mt-[2px]`}> </p>
        </div>

    

    );
  })}
</td>


              </tr>
            ))}
          </tbody>
        </table>
      </div>:

       <div className="overflow-x-auto    thin-scrollbar ">
        <table className="min-w-full divide-y  divide-gray-700">
          <thead>
            <tr className="text-xs sm:text-sm text-white uppercase tracking-wider">
              <th className="px-4 py-3 text-left">#</th>
              <th className="px-4 py-3 text-left">Team</th>
              <th className="px-2 py-3 text-center">P</th>
              <th className="px-2 py-3 text-center">W</th>
              <th className="px-2 py-3 text-center">D</th>
              <th className="px-2 py-3 text-center">L</th>
              <th className="px-2 py-3 text-center">F</th>
              <th className="px-2 py-3 text-center">A</th>
              <th className="px-2 py-3 text-center">GD</th>
              <th className="px-2 py-3 text-center">Pts</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            {getStandingsByTab(LeagueStandings, activeTab)?.map((team,index) => (
              <tr key={index} className="text-sm text-gray-300">
                <td className="px-4 py-2 font-semibold text-white">{team.rank}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <img src={team.team.logo} alt={team.team.name} className="h-5 w-5 sm:h-6 sm:w-6 mr-2" />
                    <span className="text-xs sm:text-sm font-medium truncate">{team.team.name}</span>
                  </div>
                </td>

             
                  <>
                    <td className="px-2 py-2 text-center">{team.played}</td>
                    <td className="px-2 py-2 text-center">{team.win}</td>
                    <td className="px-2 py-2 text-center">{team.draw}</td>
                    <td className="px-2 py-2 text-center">{team.lose}</td>
                    <td className="px-2 py-2 text-center">{team.goals?.for}</td>
                    <td className="px-2 py-2 text-center">{team.goals?.against}</td>
                    <td className="px-2 py-2 text-center">{team.goalsDiff}</td>
                  </>
             

                <td className="px-2 py-2 text-center font-bold text-purple-500">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
}

     


    </div>
  );
}
