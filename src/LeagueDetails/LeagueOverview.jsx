import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import FixtureCard from './FixtureCard';
import { Context } from '../Context_holder';

export default function LeagueOverview() {
  const {
    setLeagueDetailsActivetab,
    UpcomingMatches,
    Matches,
    getStandingsByTab,
    LeagueStandings
  } = useContext(Context);


  
  const {id,season}=useParams()

  return (
    <div>
      {/* Fixtures Section */}
      <div className="space-y-3 mb-6">
        <Link
          to={`/leaguedetails/${id}/${season}/fixtures`}
          className="flex justify-between items-center px-2"
          onClick={() => setLeagueDetailsActivetab?.("fixtures")}
        >
          <button className="text-md text-white font-semibold">Fixtures</button>
          <button>
            <FaChevronRight className="text-xs sm:text-sm text-white" />
          </button>
        </Link>

        {UpcomingMatches?.slice(0, 5)?.map((match, index) => (
          <div key={index}>
            <FixtureCard match={match} />
          </div>
        ))}
      </div>

      {/* Results Section */}
      <div className="space-y-3 mb-6">
        <Link
          to={`/leaguedetails/${id}/${season}/results`}
          className="flex justify-between items-center px-2"
          onClick={() => setLeagueDetailsActivetab?.("Results")}
        >
          <button className="text-md text-white font-semibold">Results</button>
          <button>
            <FaChevronRight className="text-xs sm:text-sm text-white" />
          </button>
        </Link>

        {Matches?.slice(0, 5)?.map((match, index) => (
          <div key={index}>
            <FixtureCard match={match} />
          </div>
        ))}
      </div>

      {/* Standings Section */}
      <div className="space-y-3 mb-6">
        <Link
          to={`/leaguedetails/${id}/${season}/standings`}
          className="flex justify-between items-center px-2"
          onClick={() => setLeagueDetailsActivetab?.("standings")}
        >
          <button className="text-md text-white font-semibold">Standings</button>
          <button>
            <FaChevronRight className="text-xs sm:text-sm text-white" />
          </button>
        </Link>

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
              {getStandingsByTab?.(LeagueStandings, "all")?.slice(0, 5)?.map((team, index) => (
                <tr key={index} className="text-sm text-gray-300">
                  <td className="px-4 py-2 font-semibold text-white">{team?.rank}</td>
                  <td className="px-4 py-2">
                    <Link to={`/team/${id}/${season}/overview`} className="flex items-center">
                      <img
                        src={team?.team?.logo}
                        alt={team?.team?.name}
                        className="h-5 w-5 sm:h-6 sm:w-6 mr-2"
                      />
                      <span className="text-xs sm:text-sm font-medium truncate">{team?.team?.name}</span>
                    </Link>
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
                  <td className="px-2 py-2 text-center font-bold text-purple-500">{team?.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link
          to={`/leaguedetails/${id}/${season}/standings`}
          className="block text-center w-full rounded-md border border-purple-500 text-xs py-1 hover:shadow-[0_0_20px_rgba(128,0,255,0.7)] transition"
          onClick={() => setLeagueDetailsActivetab?.("standings")}
        >
          See All
        </Link>
      </div>
    </div>
  );
}
