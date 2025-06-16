import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function MatchSubstutions(props) {
  const{season}=useParams()
  const renderTeamSubs = (team) => {

    return (
      <div className="flex-1 max-w-[50%]">
        <div className="py-2 shadow-sm h-full">
          {/* Header */}
          <div className="flex items-center mb-2 sm:mb-3 gap-2">
            <img
              src={team?.team?.logo}
              alt={`${team?.team?.name} logo`}
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
            />
            <h2 className="text-xs text-purple-300 truncate">
              {team?.team?.name} Subs
            </h2>
          </div>

          {/* Coach */}
          <div className="flex items-center mb-3 gap-2">
            <img
              src={team?.coach?.photo}
              alt={team?.coach?.name}
              className="w-5 h-5 sm:w-7 sm:h-7 rounded-full object-cover"
            />
            <div className="overflow-hidden">
              <div className="text-[10px] sm:text-xs text-purple-500">Coach</div>
              <div className="text-white text-xs sm:text-sm truncate">
                {team?.coach?.name}
              </div>
            </div>
          </div>

          {/* Substitutes */}
          <div className="flex flex-col gap-2 custom-scroll">
            {team?.substitutes?.map((sub) => (
              <Link to={`/player/${sub?.player?.id}/${season}/info`}
                key={sub?.player?.id}
                className="flex items-center gap-2 rounded-md hover:shadow-md transition-shadow cursor-pointer"
              >
                <p className="text-[10px] text-white font-semibold rounded-full px-1 border flex justify-center items-center">
                  <span className="min-w-[11.119px] text-center">
                    {sub?.player?.number}
                  </span>
                </p>

                <div className="overflow-hidden">
                  <div
                    className={`text-${team?.team?.colors?.player?.primary}-700 text-[11px] sm:text-xs truncate`}
                  >
                    {sub?.player?.name}
                  </div>
                  <div className="text-[10px] text-gray-400 font-medium">
                    Pos: {sub?.player?.pos}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <p className="uppercase text-xs font-bold text-white my-3">
        Substitute players
      </p>
      <div
        className="flex w-full border rounded-lg hover:shadow-[0_0_40px_rgba(128,0,255,0.4)]
        transition-all duration-500 ease-in-out border-purple-800 max-w-full mx-auto p-2 sm:p-4 gap-2 overflow-hidden"
      >
        {renderTeamSubs(props?.homeTeam)}
        {renderTeamSubs(props?.awayTeam)}
      </div>
    </>
  );
}
