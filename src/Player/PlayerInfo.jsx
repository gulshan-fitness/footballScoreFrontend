import React, { useContext } from 'react';
import {
  FaFutbol,
  FaRegClock,
  FaMapMarkerAlt,
  FaUserShield,
  FaArrowsAltH,
  FaTachometerAlt,
  FaBullseye,
  FaRunning,
  FaHandshake,
  FaPenNib,
} from "react-icons/fa";
import { Context } from '../Context_holder';
import { Link, useParams } from 'react-router-dom';

export default function PlayerInfo() {
  const { PlayerDetails } = useContext(Context);
  const stats = PlayerDetails?.statistics?.[0];
  const{season}=useParams()

  return (
    <>
      {/* Team and League */}
      <div className="mt-3 text-white border rounded-xl p-3 sm:p-4 hover:shadow-[0_0_40px_rgba(128,0,255,0.4)] transition-all duration-500 ease-in-out border-purple-800">
        <div className="flex items-center flex-wrap gap-2 justify-between">
          
          <Link to={`/team/${stats?.team?.id}/${season}/overview`} className="flex items-center gap-2 sm:gap-3">
            <img
              src={stats?.team?.logo}
              alt="Team"
              className="w-7 h-7 sm:w-9 sm:h-9"
            />
            <h3 className="font-semibold text-sm sm:text-base md:text-lg">
              {stats?.team?.name}
            </h3>
          </Link>
          <Link   to={`/leaguedetails/${stats?.league?.id}/${season}/overview`} className="flex items-center gap-1 sm:gap-2">
            <img
              src={stats?.league?.logo}
              alt="League"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <p className="text-[11px] sm:text-sm text-gray-300 truncate max-w-[150px] sm:max-w-none">
              {stats?.league?.name} ({stats?.league?.season})
            </p>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mt-3 w-full">
        <StatBox icon={<FaFutbol />} label="Appearances" value={stats?.games?.appearences ?? '–'} />
        <StatBox icon={<FaUserShield />} label="Position" value={stats?.games?.position ?? '–'} />
        <StatBox icon={<FaRegClock />} label="Minutes" value={stats?.games?.minutes ?? '–'} />
        <StatBox icon={<FaBullseye />} label="Goals" value={stats?.goals?.total ?? '–'} />
        <StatBox icon={<FaRunning />} label="Assists" value={stats?.goals?.assists ?? '–'} />
        <StatBox icon={<FaArrowsAltH />} label="Dribbles" value={`${stats?.dribbles?.success ?? '–'}/${stats?.dribbles?.attempts ?? '–'}`} />
        <StatBox icon={<FaTachometerAlt />} label="Rating" value={stats?.games?.rating ?? '–'} />
        <StatBox icon={<FaHandshake />} label="Duels Won" value={`${stats?.duels?.won ?? '–'}/${stats?.duels?.total ?? '–'}`} />
        <StatBox icon={<FaPenNib />} label="Penalties Scored" value={stats?.penalty?.scored ?? '–'} />
      </div>
    </>
  );
}

// Responsive StatBox
const StatBox = ({ icon, label, value }) => (
  <div className="flex items-center gap-2 w-full p-2 sm:p-3 text-white border hover:shadow-[0_0_40px_rgba(128,0,255,0.4)] transition-all duration-500 ease-in-out border-purple-800 rounded-xl">
    <div className="text-purple-400 text-base sm:text-lg">{icon}</div>
    <div className="w-full overflow-hidden">
      <p className="text-[10px] sm:text-xs text-gray-400 truncate">{label}</p>
      <p className="text-[12px] sm:text-sm md:text-base font-semibold">{value}</p>
    </div>
  </div>
);
