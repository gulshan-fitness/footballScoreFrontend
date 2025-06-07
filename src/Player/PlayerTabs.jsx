





import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../Context_holder';


export default function PlayerTabs() {

    const{PlayerDetailsActivetab, setPlayerDetailsActivetab,}=useContext(Context)

     
      const tabs = ["info", "Matches", "stats",];
  return (
      <div className="flex items-center gap-6 py-1 mb-6   thin-scrollbar border-purple-600 text-xs font-semibold overflow-x-auto">
        {tabs?.map((tab) => (
          <Link
          to={`${tab}`}
            key={tab}
            onClick={() => setPlayerDetailsActivetab(tab)}
            className={`pb-2 transition-all duration-300 capitalize whitespace-nowrap ${
              PlayerDetailsActivetab === tab
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
