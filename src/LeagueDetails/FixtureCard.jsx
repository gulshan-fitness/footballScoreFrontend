import React from "react";

import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FixtureCard({ match }) {
 

  // Format fixture date to 24-hour time string (change hour12 to true for AM/PM)

  const matchTime24h = (fixtureDateStr) => {
    return new Date(fixtureDateStr).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <Link to={`/matchdetails/${match?.fixture?.id}/info`}

      className="bg-gradient-to-br  my-2 from-[#1c1f28]/70 to-[#0a0c14]/90 rounded-xl px-4 py-3 flex justify-between items-center border border-purple-800 shadow-lg hover:shadow-[0_0_20px_rgba(128,0,255,0.7)]
        transition-shadow duration-500 cursor-pointer"
    >
      <div className="flex items-center gap-1">
        <div className="text-xs text-white">
          <div>
            {new Date(match?.fixture?.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
            })}
          </div>

          {match?.fixture?.status?.short === "NS" && (
            <div className="text-xs font-semibold text-purple-500">
              {matchTime24h(match?.fixture?.date)}
            </div>
          )}

          {match?.fixture?.status?.short === "FT" && (
            <div className="text-sm font-semibold text-purple-500">FT</div>
          )}
          
        </div>

        <div className="flex flex-col flex-grow px-2 text-xs text-purple-300 font-medium space-y-1">
          <div className="flex items-center gap-2">
            <img
              src={match?.teams?.home?.logo}
              alt={match?.teams?.home?.name}
              className="w-5 h-5"
            />
            <span className="truncate">{match?.teams?.home?.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={match?.teams?.away?.logo}
              alt={match?.teams?.away?.name}
              className="w-5 h-5"
            />
            <span className="truncate">{match?.teams?.away?.name}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center text-xs gap-1">
        {(match?.goals?.home !== null && match?.goals?.home !== undefined) && (
          <div className="flex flex-col text-center min-w-[30px]">
            <p>{match.goals.home}</p>
            <p>{match.goals.away}</p>
          </div>
        )}

        <FaRegStar className="text-purple-400 text-sm hover:text-white cursor-pointer" />
      </div>
    </Link>
  );
}
