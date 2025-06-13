import React from 'react'

export default function MatchCard() {
  return (
     <div
            key={fixture?.id}
            className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-lg shadow hover:shadow-[0_0_40px_rgba(128,0,255,0.4)] transition-all duration-500 ease-in-out border-purple-800 border space-y-2 sm:space-y-0"
          >
            <div className="flex items-center space-x-1">
              {/* Home Team */}
              <div className="text-right">
                <img
                  src={teams?.home?.logo}
                  alt={teams?.home?.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
                />
                <p className="text-xs sm:text-sm font-semibold">{teams?.home?.name}</p>
              </div>

              {/* Score */}
              <div className="text-center px-4 text-gray-300">
                <p className="text-base sm:text-xl font-bold">
                  {goals?.home} - {goals?.away}
                </p>
                <p className="text-[10px] sm:text-xs text-white">{matchDate}</p>
              </div>

              {/* Away Team */}
              <div className="text-left">
                <img
                  src={teams?.away?.logo}
                  alt={teams?.away?.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 mx-auto"
                />
                <p className="text-xs sm:text-sm font-semibold">{teams?.away?.name}</p>
              </div>
            </div>

          
          </div>
  )
}
