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


export default function PlayerInfo() {
  const { PlayerDetails } = useContext(Context);
  const stats = PlayerDetails?.statistics?.[0];

  return (
    <>
      {/* Team and League */}
      <div className="mt-3 text-white border rounded-xl p-4 hover:shadow-[0_0_40px_rgba(128,0,255,0.4)] transition-all duration-500 ease-in-out border-purple-800">
        <div className="flex items-center flex-wrap gap-2 justify-between">
          <div className="flex items-center gap-3">
            <img
              src={stats?.team?.logo}
              alt="Team"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <h3 className="font-semibold text-base sm:text-lg">
              {stats?.team?.name}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={stats?.league?.logo}
              alt="League"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <p className="text-xs sm:text-sm text-gray-300">
              {stats?.league?.name} ({stats?.league?.season})
            </p>
          </div>
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

// StatBox with smaller responsive text
const StatBox = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 w-full p-3 sm:p-4 text-white border hover:shadow-[0_0_40px_rgba(128,0,255,0.4)] transition-all duration-500 ease-in-out border-purple-800 rounded-xl">
    <div className="text-purple-400 text-lg sm:text-xl">{icon}</div>
    <div>
      <p className="text-xs sm:text-sm text-gray-400 truncate w-full overflow-hidden whitespace-nowrap">{label}</p>
      <p className="text-sm sm:text-base font-semibold">{value}</p>
    </div>
  </div>
);
