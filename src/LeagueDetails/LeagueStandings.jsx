import React, { useContext, useState } from 'react';
import { Context } from '../Context_holder';

export default function LeagueStandings() {
  const { getStandingsByTab, LeagueStandings } = useContext(Context);
  const [activeTab, setActiveTab] = useState('all');
  const [Tabs] = useState(["all", "home", "away", "form"]);

  return (
    <div className="rounded-lg px-3 py-4 shadow-md bg-gradient-to-b from-[#0B0C10] via-[#1F2833] to-[#000000]">
      {/* Tabs */}
      <div className="flex gap-2 flex-wrap border-b border-purple-800 py-4">
        {Tabs?.map((tab, index) => (
          <button
            key={index}
            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border ${
              activeTab === tab
                ? 'bg-purple-700/90'
                : 'text-gray-300 border-purple-800'
            } hover:shadow-[0_0_20px_rgba(128,0,255,0.7)] transition`}
            onClick={() => setActiveTab(tab)}
          >
            {tab?.charAt(0)?.toUpperCase() + tab?.slice(1)}
          </button>
        ))}
      </div>

      {/* Table */}
      {activeTab === "form" ? (
        <div className="overflow-x-auto thin-scrollbar">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr className="text-xs sm:text-sm text-white uppercase tracking-wider">
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Team</th>
                <th className="px-2 py-3 text-center">Form</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              {getStandingsByTab?.(LeagueStandings, activeTab)?.map((team, index) => (
                <tr key={index} className="text-sm text-gray-300">
                  <td className="px-4 py-2 font-semibold text-white">{team?.rank}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <img
                        src={team?.team?.logo}
                        alt={team?.team?.name}
                        className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
                      />
                      <span className="text-xs sm:text-sm font-medium truncate">
                        {team?.team?.name}
                      </span>
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
                        <div key={idx}>
                          <div
                            className={`flex justify-center items-center w-5 h-5 text-[10px] rounded-full ${bgColor} border border-purple-800`}
                          >
                            {result}
                          </div>
                          <p className={`${borderBottom} w-full mt-[2px]`}></p>
                        </div>
                      );
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto thin-scrollbar">
          <table className="min-w-full divide-y divide-gray-700">
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
              {getStandingsByTab?.(LeagueStandings, activeTab)?.map((team, index) => (
                <tr key={index} className="text-sm text-gray-300">
                  <td className="px-4 py-2 font-semibold text-white">{team?.rank}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center">
                      <img
                        src={team?.team?.logo}
                        alt={team?.team?.name}
                        className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
                      />
                      <span className="text-xs sm:text-sm font-medium truncate">
                        {team?.team?.name}
                      </span>
                    </div>
                  </td>

                  <>
                    <td className="px-2 py-2 text-center">{team?.played}</td>
                    <td className="px-2 py-2 text-center">{team?.win}</td>
                    <td className="px-2 py-2 text-center">{team?.draw}</td>
                    <td className="px-2 py-2 text-center">{team?.lose}</td>
                    <td className="px-2 py-2 text-center">{team?.goals?.for}</td>
                    <td className="px-2 py-2 text-center">{team?.goals?.against}</td>
                    <td className="px-2 py-2 text-center">{team?.goalsDiff}</td>
                  </>

                  <td className="px-2 py-2 text-center font-bold text-purple-500">
                    {team?.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
