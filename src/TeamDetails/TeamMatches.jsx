import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context_holder';
import FixtureCard from '../LeagueDetails/FixtureCard';
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function TeamMatches() {

     const{TeamMatches,TeamMatchesFetch,TeamUpcomingMatches}=useContext(Context)

      const [activeTab, setActiveTab] = useState('results');
      
        const [wellStructuredData, setWellStructuredData] = useState([]); 
     const [Tabs] = useState(["results", "fixtures", ])


     const nextmatches  = [
  {
    fixture: {
      id: 1041234,
      referee: "Anthony Taylor",
      timezone: "UTC",
      date: "2025-06-20T19:45:00+00:00",
      timestamp: 1781987100,
      periods: {
        first: null,
        second: null
      },
      venue: {
        id: 555,
        name: "Old Trafford",
        city: "Manchester"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media.api-sports.io/football/leagues/39.png",
      flag: "https://media.api-sports.io/flags/gb.svg",
      season: 2024,
      round: "Regular Season - 38"
    },
    teams: {
      home: {
        id: 33,
        name: "Manchester United",
        logo: "https://media.api-sports.io/football/teams/33.png",
        winner: null
      },
      away: {
        id: 34,
        name: "Newcastle United",
        logo: "https://media.api-sports.io/football/teams/34.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: {
        home: null,
        away: null
      },
      fulltime: {
        home: null,
        away: null
      },
      extratime: {
        home: null,
        away: null
      },
      penalty: {
        home: null,
        away: null
      }
    }
  },
  {
    fixture: {
      id: 1045678,
      referee: "Michael Oliver",
      timezone: "UTC",
      date: "2025-06-27T17:30:00+00:00",
      timestamp: 1782595800,
      venue: {
        id: 600,
        name: "Emirates Stadium",
        city: "London"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      season: 2024,
      round: "FA Cup - Final"
    },
    teams: {
      home: {
        id: 42,
        name: "Arsenal",
        logo: "https://media.api-sports.io/football/teams/42.png",
        winner: null
      },
      away: {
        id: 33,
        name: "Manchester United",
        logo: "https://media.api-sports.io/football/teams/33.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    }
  }
];


 const data = [
    {
      fixture: {
        id: 867954,
        referee: "D. Aytekin",
        date: "2025-06-20T15:30:00+00:00",
        venue: {
          id: 1234,
          name: "Red Bull Arena",
          city: "Leipzig"
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }
      },
      league: {
        id: 78,
        name: "Bundesliga",
        round: "Matchday 1"
      },
      teams: {
        home: {
          id: 686,
          name: "RB Leipzig",
          logo: "https://media.api-sports.io/football/teams/686.png",
          winner: true
        },
        away: {
          id: 165,
          name: "VfB Stuttgart",
          logo: "https://media.api-sports.io/football/teams/165.png",
          winner: false
        }
      },
      goals: {
        home: 5,
        away: 1
      }
    },
    {
      fixture: {
        id: 869021,
        referee: "A. Taylor",
        date: "2025-06-16T20:00:00+00:00",
        venue: {
          id: 892,
          name: "Etihad Stadium",
          city: "Manchester"
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }
      },
      league: {
        id: 2,
        name: "UEFA Champions League",
        round: "Group Stage"
      },
      teams: {
        home: {
          id: 50,
          name: "Manchester City",
          logo: "https://media.api-sports.io/football/teams/50.png",
          winner: false
        },
        away: {
          id: 686,
          name: "RB Leipzig",
          logo: "https://media.api-sports.io/football/teams/686.png",
          winner: false
        }
      },
      goals: {
        home: 2,
        away: 2
      }
    },
    {
      fixture: {
        id: 871205,
        referee: "F. Zwayer",
        date: "2025-06-15T18:30:00+00:00",
        venue: {
          id: 1234,
          name: "Red Bull Arena",
          city: "Leipzig"
        },
        status: {
          long: "Match Finished",
          short: "FT",
          elapsed: 90
        }
      },
      league: {
        id: 81,
        name: "DFB-Pokal",
        round: "Quarter-finals"
      },
      teams: {
        home: {
          id: 686,
          name: "RB Leipzig",
          logo: "https://media.api-sports.io/football/teams/686.png",
          winner: false
        },
        away: {
          id: 157,
          name: "Bayern Munich",
          logo: "https://media.api-sports.io/football/teams/157.png",
          winner: true
        }
      },
      goals: {
        home: 1,
        away: 3
      }
    }
  ];



useEffect(() => {
    const rawData = activeTab === 'results' ? data : nextmatches;
    const structured = [];

    rawData?.forEach((match) => {
      const existingLeague = structured.find(
        (entry) => entry.league?.id === match.league?.id
      );

      const score = match.score || {};

      const fixtureData = {
        fixture: match.fixture,
        teams: match.teams,
        goals: match.goals,
        score: score || null,
        halftime: score.halftime || null,
        fulltime: score.fulltime || null,
        extratime: score.extratime || null,
        penalty: score.penalty || null
      };

      if (existingLeague) {
        existingLeague.fixtures.push(fixtureData);
      } else {
        structured.push({
          league: match.league,
          fixtures: [fixtureData]
        });
      }
    });

    setWellStructuredData(structured); // ✅ update state after processing
  }, [activeTab]);


console.log(wellStructuredData);



   

  return (
    <div className=" mx-auto ">

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

      <div className="space-y-2">


 {    
 wellStructuredData?.map(
(data,index)=> <div key={index}>

     <Link to={`leaguedetails/${data?.league?.id}/${data?.league?.season}/overview`} className="flex justify-between items-center mb-4" onClick={()=>setLeagueDetails(league)}>
        <button className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-sm font-semibold text-purple-400 tracking-wide select-none max-w-[80%]">
          <img
            src={data?.league?.logo}
             loading="lazy"
            alt={`${data?.league?.name} logo`}
              onError={(e) => (e.currentTarget.src = "/fallback-logo.png")}

            className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-purple-600 shadow-sm"
          />
          <span className="drop-shadow-lg flex flex-col sm:flex-row sm:flex-wrap text-left">
            <span className="truncate w-[160px]">{data?.league?.name}</span>
            <span className="text-white font-normal text-[10px] sm:text-sm whitespace-nowrap">({data?.league?.country})</span>
          </span>
        </button>
        <button>
          <FaChevronRight className="text-xs sm:text-sm" />
        </button>
      </Link>
      {
 data?.fixtures?.map((data,index)=>
      <div key={index}>
<FixtureCard  match={data}/>
      </div>
      )
      }




</div>

 
 )
 



  
    }


      </div>
    </div>
  )
}
