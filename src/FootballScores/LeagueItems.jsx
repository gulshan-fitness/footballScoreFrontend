import React from 'react'
import { Link } from 'react-router-dom'

export default function LeagueItems({ logo, name, country, id }) {
  return (
      <Link  to={`/leaguedetails/${id}/${new Date().getFullYear()}/overview`} className="bg-neutral-800/70 hover:bg-neutral-700/70 shadow-gray-50 p-1 px-3 rounded-sm flex items-center gap-3 cursor-pointer shadow-sm transition-all hover:scale-[1.02]">
      <img
        src={logo}
        alt={name}
        className="w-5 h-5 object-contain rounded-full shadow-md"
      />
      <div className="min-w-0">
        <div className="text-[10px] font-medium truncate text-white">
          {name}
        </div>
        <div className="text-[10px] text-gray-400 truncate">{country}</div>
      </div>
    </Link>
  )
}
