import React, { useContext } from 'react'
import { Context } from '../Context_holder';
import { Link } from 'react-router-dom';

export default function TeamTabs() {
 
    const{TeamDetailsActivetab, setTeamDetailsActivetab}=useContext(Context)

    

     
      const tabs = ["overview", "matches", "tables", "playerstats"];
  return (
      <div className="flex items-center gap-6 py-1  thin-scrollbar border-purple-600 text-xs font-semibold overflow-x-auto">
        {tabs?.map((tab) => (
          <Link
          to={`${tab}`}
            key={tab}
            onClick={() => setTeamDetailsActivetab(tab)}
            className={`pb-2 transition-all whitespace-nowrap duration-300 capitalize ${
              TeamDetailsActivetab === tab
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
