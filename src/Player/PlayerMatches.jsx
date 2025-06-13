import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context_holder';

export default function TeamMatches() {

  const{TeamMatches,TeamMatchesFetch}=useContext(Context)

      const [activeTab, setActiveTab] = useState('results');
      
     const [Tabs] = useState(["results", "fixtures", ]);




//   useEffect(
//     ()=>{
// activeTab=="results"?
//       TeamMatchesFetch(`?team=${686}&season=${2023}`)
//       :
//       TeamMatchesFetch(`?team=${686}&season=${2023}&status=NS`)

//     },[activeTab]
//   )


  return (
    <div className=" mx-auto ">

     {/* Tabs */}

      <div className="flex mb-2 gap-2 flex-wrap border-b border-purple-800 pb-4">
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

      <div className="space-y-2">
        {TeamMatches?.map((match) => {
          const { fixture, league, teams, goals } = match;
          const matchDate = new Date(fixture.date).toLocaleString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });

          return (

            <div
              key={fixture.id}
              className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-lg shadow hover:shadow-[0_0_40px_rgba(128,0,255,0.4)] transition-all duration-500 ease-in-out border-purple-800 border space-y-2 sm:space-y-0"
            >

              <div className="flex items-center space-x-1">
                {/* Home Team */}
                <div className="text-right">
                  <img
                    src={teams.home.logo}
                    alt={teams.home.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
                  />
                  <p className="text-xs sm:text-sm font-semibold">{teams.home.name}</p>
                </div>

                {/* Score */}
                <div className="text-center px-4 text-gray-300">
                  <p className="text-base sm:text-xl font-bold">
                    {goals.home} - {goals.away}
                  </p>
                  <p className="text-[10px] sm:text-xs text-white">{matchDate}</p>
                </div>

                {/* Away Team */}
                <div className="text-left">
                  <img
                    src={teams.away.logo}
                    alt={teams.away.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
                  />
                  <p className="text-xs sm:text-sm font-semibold">{teams.away.name}</p>
                </div>
              </div>

              {/* League Info */}
              <div className="text-right hidden sm:block">
                <img
                  src={league.logo}
                  alt={league.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 inline-block mr-1"
                />
                <p className="text-xs sm:text-sm">{league.name}</p>
                <p className="text-[10px] sm:text-xs text-gray-500">{league.round}</p>
              </div>

              
            </div>
          );
        })}
      </div>
    </div>
  );


}
