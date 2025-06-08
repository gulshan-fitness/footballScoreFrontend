import React, { useContext } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Context } from '../Context_holder';

export default function FootballMatchCard({ league, fixtures }) {
    const{setLeagueDetails}=useContext(Context)

  return (
    <section className="px-2 sm:px-4">
      {/* League Header */}
      <Link to={`leaguedetails/${league?.id}/overview`} className="flex justify-between items-center mb-4" onClick={()=>setLeagueDetails(league)}>
        <button className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-sm font-semibold text-purple-400 tracking-wide select-none max-w-[80%]">
          <img
            src={league?.logo}
             loading="lazy"
            alt={`${league?.name} logo`}
              onError={(e) => (e.currentTarget.src = "/fallback-logo.png")}

            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-purple-600 shadow-sm"
          />
          <span className="drop-shadow-lg flex flex-col sm:flex-row sm:flex-wrap text-left">
            <span className="truncate w-[160px]">{league?.name}</span>
            <span className="text-white font-normal text-[10px] sm:text-sm whitespace-nowrap">({league?.country})</span>
          </span>
        </button>
        <button>
          <FaChevronRight className="text-xs sm:text-sm" />
        </button>
      </Link>

      {/* Fixtures */}
      <div className="space-y-2 sm:space-y-3">
        {fixtures?.map(({ fixture, teams, goals }, index) => {
          const isFinished = fixture?.status?.short === "FT";
          const isUpcoming = fixture?.status?.short === "NS";
          const matchDate = new Date(fixture?.date);

          return (
            <article
              key={fixture?.id || index}
              className="flex justify-between items-center bg-gradient-to-tr from-[#1c1f28]/70 to-[#0a0c14]/90
              backdrop-blur-md border border-purple-800 rounded-xl py-2 px-3 sm:py-3 sm:px-4 shadow-md hover:shadow-[0_0_12px_rgba(128,0,255,0.6)]
              transition-shadow duration-500 cursor-pointer select-none"
              tabIndex={0}
              aria-label={`${teams?.home?.name} vs ${teams?.away?.name} on ${matchDate.toLocaleDateString()}`}
            >
              {/* Teams */}
              <div className='flex items-center gap-2 sm:gap-4 w-[70%]'>
                <div className=" text-[10px] text-center font-medium text-purple-300">
                  {isFinished ? fixture?.status?.short : matchDate.toLocaleTimeString("en-GB", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1 sm:gap-2 max-w-full">
                    <img
                      src={teams?.home?.logo}
                       loading="lazy"
                      alt={teams?.home?.name}
                        onError={(e) => (e.currentTarget.src = "/fallback-logo.png")}

                      className="w-5 h-5 rounded-full border border-purple-600 shadow-sm"
                    />
                    <span className="text-purple-300 font-medium text-[11px] truncate max-w-[130px] sm:max-w-[160px]">
                      {teams?.home?.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 max-w-full">
                    <img
                      src={teams?.away?.logo}
                       loading="lazy"
                      alt={teams?.away?.name}
                        onError={(e) => (e.currentTarget.src = "/fallback-logo.png")}

                      className="w-5 h-5 rounded-full border border-purple-600 shadow-sm"
                    />
                    <span className="text-purple-300 font-medium text-[11px] truncate max-w-[130px] sm:max-w-[160px]">
                      {teams?.away?.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Match Status */}
              <div className="text-right flex items-center gap-1 sm:gap-2">
                <div className="text-purple-500 text-[12px] font-bold flex flex-col items-center">
                  <div>{goals?.home}</div>
                  <div>{goals?.away}</div>
                </div>
                <FaRegStar className={`${isUpcoming ? "text-white" : "text-purple-400"} text-sm cursor-pointer`} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
