
import React, { useContext, useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Context } from "../Context_holder";

// ✅ Card Component
const Card = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`rounded-2xl border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// ✅ CardContent Component
const CardContent = ({ className = "", children, ...props }) => {
  return (
    <div className={`p-3 ${className}`} {...props}>
      {children}
    </div>
  );
};

// ✅ Match Card Component
const MatchHistoryCard = ({ match }) => {
  const date = new Date(match.fixture.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const result =
    match.goals.home === match.goals.away
      ? "D"
      : match.goals.home > match.goals.away
      ? "W"
      : "L";

  return (
    <div className="w-full sm:max-w-md mx-auto">
      <Card className=" text-white shadow-xl border border-purple-700  hover:shadow-[0_0_40px_rgba(128,0,255,0.4)]
        transition-all duration-500 ease-in-outm">
        <CardContent>
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-300 ">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="w-4 h-4 text-purple-400" />
              <span>{date}</span>
            </div>
            <span className="uppercase text-purple-400 font-bold">
              {match.fixture.status.short}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col  text-left">
              <span className=" text-xs">
                {match.teams.home.name}
              </span>
              <span className="text-xs">
                {match.teams.away.name}
              </span>
            </div>

            <div className="text-center flex flex-col items-center">
              <span className="text-lg sm:text-2xl font-bold">
                {match.goals.home} - {match.goals.away}
              </span>
              <div
                className={`mt-1 text-xs sm:text-sm font-semibold rounded-full  w-4 h-4 p-3 flex items-center justify-center ${
                  result === "W"
                    ? "bg-green-400"
                    : result === "L"
                    ? "bg-red-400"
                    : "bg-yellow-400"
                }`}
              >
                {result}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// ✅ Parent Component
export default function MatchH2H() {
  const{MatchH2H,MatchH2HFetch,particulerMatch,Match}=useContext(Context)
  const [activeTab, setActiveTab] = useState(particulerMatch?.teams?.home);
  const [Tabs] = useState([particulerMatch?.teams?.home, particulerMatch?.teams?.away]);

  // GET https://v3.football.api-sports.io/fixtures?team=8653&last=3

  const data = [
    {
      fixture: {
        date: "2025-06-03T18:45:00+00:00",
        status: { short: "FT" },
      },
      teams: {
        home: { name: "Wales Women" },
        away: { name: "Italy Women" },
      },
      goals: {
        home: 1,
        away: 4,
      },
    },
    {
      fixture: {
        date: "2025-05-30T17:00:00+00:00",
        status: { short: "FT" },
      },
      teams: {
        home: { name: "Denmark Women" },
        away: { name: "Wales Women" },
      },
      goals: {
        home: 1,
        away: 0,
      },
    },
    {
      fixture: {
        date: "2025-04-08T16:00:00+00:00",
        status: { short: "FT" },
      },
      teams: {
        home: { name: "Sweden Women" },
        away: { name: "Wales Women" },
      },
      goals: {
        home: 1,
        away: 1,
      },
    },
  ];


  useEffect(
    ()=>{

MatchH2HFetch(`?team=${activeTab?._id}&season=${2023}`)

    },[activeTab]
  )
  


  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
       {/* Tabs */}

      <div className="flex gap-2 flex-wrap border-b  border-purple-800 py-4">
        {Tabs?.map((tab,index) => (
          <button
            key={index}
            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm  rounded-full border ${
              activeTab?.name === tab?.name
                ? ' bg-purple-700/90'
                : 'text-gray-300 border-purple-800'
            } hover:shadow-[0_0_20px_rgba(128,0,255,0.7)] transition`}
            onClick={() => setActiveTab(tab)}
          >
            {tab?.name}
          </button>
        ))}
      </div>
      {MatchH2H?.map((match, index) => (
        <MatchHistoryCard key={index} match={match} />
      ))}
    </div>
  );
}
