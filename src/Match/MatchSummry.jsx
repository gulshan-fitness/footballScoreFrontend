import React, { useState } from "react";
import MatchEvents from "./MatchEvent";
import MatchCommentary from "./MatchCommentary";

const MatchSummary = () => {
   const [activeTab, setActiveTab] = useState('events');
 const [Tabs] = useState(["events", "commentary", ]);

  
  return (

    <div className="">

      {/* Tabs */}

      <div className="flex mb-2 gap-2 flex-wrap border-b border-purple-800 pb-4">
        {Tabs?.map((tab,index) => (
          <button
            key={index}
            className={`px-2 sm:px-3 py-1 text-xs sm:text-sm  rounded-full border ${
              activeTab === tab
                ? ' bg-purple-700/90'
                : 'text-gray-300 border-purple-800'
            } hover:shadow-[0_0_20px_rgba(128,0,255,0.7)] transition`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {
        activeTab=="events"?<MatchEvents/>: <MatchCommentary/>
      }
  
    </div>



  );
};

export default MatchSummary;
