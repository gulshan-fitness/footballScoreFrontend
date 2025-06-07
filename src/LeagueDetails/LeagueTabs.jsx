import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Context_holder';


export default function LeagueTabs() {

    const{LeagueDetailsActivetab, setLeagueDetailsActivetab}=useContext(Context)

     
      const tabs = ["overview", "fixtures", "results", "standings"];
  return (
      <div className="flex items-center gap-6 py-1  thin-scrollbar border-purple-600 text-xs font-semibold overflow-x-auto">
        {tabs?.map((tab) => (
          <Link
          to={`${tab}`}
            key={tab}
            onClick={() => setLeagueDetailsActivetab(tab)}
            className={`pb-2 transition-all duration-300 capitalize ${
              LeagueDetailsActivetab === tab
                ? "text-white border-b-2  border-purple-600 font-semibold"
                : "text-gray-400 hover:text-purple-400"
            }`}
          >
            {tab}
          </Link>
        ))}
      </div>
  )
}
