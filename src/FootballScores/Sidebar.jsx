import React from "react";
import { FaSearch, FaChevronRight, FaFutbol } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      {/* Search */}
      <div className="mb-4">
        <div className="flex items-center bg-neutral-800 p-2 rounded">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Region */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-400 uppercase mb-2">
          <span>Region</span>
          <FaChevronRight size={12} />
        </div>

        <div className="space-y-2">
          <SidebarItem emoji="🏴" label="England" />
          <SidebarItem icon={<FaFutbol />} label="Champions League" />
          <SidebarItem emoji="🇪🇸" label="Spain" />
          <SidebarItem emoji="🇮🇹" label="Italy" />
          <SidebarItem emoji="🇩🇪" label="Germany" />
        </div>
      </div>

      {/* Teams */}
      <div>
        <div className="flex items-center justify-between text-sm text-gray-400 uppercase mb-2">
          <span>Teams</span>
          <FaChevronRight size={12} />
        </div>

        <div className="space-y-2">
          <TeamItem
            logo="https://media.api-sports.io/football/teams/33.png"
            name="Manchester United Football Club"
            country="England"
          />
          <TeamItem
            logo="https://media.api-sports.io/football/teams/40.png"
            name="Liverpool"
            country="England"
          />
          <TeamItem
            logo="https://media.api-sports.io/football/teams/42.png"
            name="Arsenal"
            country="England"
          />
          <TeamItem
            logo="https://media.api-sports.io/football/teams/50.png"
            name="Manchester City"
            country="England"
          />
          <TeamItem
            logo="https://media.api-sports.io/football/teams/541.png"
            name="Real Madrid Club de Fútbol"
            country="Spain"
          />
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ emoji, icon, label }) => (
  <div className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded flex items-center gap-2 cursor-pointer text-sm">
    {emoji && <span>{emoji}</span>}
    {icon && <span>{icon}</span>}
    <span className="truncate w-full">{label}</span>
  </div>
);

const TeamItem = ({ logo, name, country }) => (
  <div className="bg-neutral-800 hover:bg-neutral-700 p-2 rounded flex items-center gap-3 cursor-pointer">
    <img src={logo} alt={name} className="w-6 h-6 object-contain" />
    <div className="min-w-0">
      <div className="text-sm font-medium truncate">{name}</div>
      <div className="text-xs text-gray-400 truncate">{country}</div>
    </div>
  </div>
);

export default Sidebar;
