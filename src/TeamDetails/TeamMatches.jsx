import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context_holder';
import FixtureCard from '../LeagueDetails/FixtureCard';
import { FaChevronRight,FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { IoIosGlobe } from "react-icons/io";


export default function TeamMatches() {

     const{TeamMatches,TeamMatchesFetch,TeamUpcomingMatches}=useContext(Context)

      const [activeTab, setActiveTab] = useState('results');
      
        const [wellStructuredData, setWellStructuredData] = useState([]); 

     const [Tabs] = useState(["results", "fixtures", ])

       const [SelectedLeague, setSelectedLeague] = useState({ logo:<IoIosGlobe  className='text-xl'/>, name:"all competitions"});

        const [LeaguesPopUps, setLeaguesPopUps] = useState(false);


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

// 'https://v3.football.api-sports.io/fixtures?team=33&status=NS'

const data = [
  {
    fixture: {
      id: 1150673,
      referee: "John Brooks",
      timezone: "UTC",
      date: "2025-07-15T19:00:00+00:00",
      timestamp: 1752606000,
      venue: {
        id: 555,
        name: "Allianz Arena",
        city: "Munich"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id: 78,
      name: "Bundesliga",
      country: "Germany",
      logo: "https://media.api-sports.io/football/leagues/78.png",
      flag: "https://media.api-sports.io/flags/de.svg",
      season: 2025,
      round: "Regular Season - 1"
    },
    teams: {
      home: {
        id: 157,
        name: "Bayern Munich",
        logo: "https://media.api-sports.io/football/teams/157.png",
        winner: null
      },
      away: {
        id: 686,
        name: "FC Heidenheim",
        logo: "https://media.api-sports.io/football/teams/686.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    }
  },
  {
    fixture: {
      id: 2150673,
      referee: "Michael Oliver",
      timezone: "UTC",
      date: "2025-07-20T16:00:00+00:00",
      timestamp: 1753056000,
      venue: {
        id: 600,
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
      season: 2025,
      round: "Regular Season - 1"
    },
    teams: {
      home: {
        id: 33,
        name: "Manchester United",
        logo: "https://media.api-sports.io/football/teams/33.png",
        winner: null
      },
      away: {
        id: 49,
        name: "Chelsea",
        logo: "https://media.api-sports.io/football/teams/49.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    }
  },
  {
    fixture: {
      id: 3150673,
      referee: "Daniele Orsato",
      timezone: "UTC",
      date: "2025-08-01T18:30:00+00:00",
      timestamp: 1754044200,
      venue: {
        id: 123,
        name: "San Siro",
        city: "Milan"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id: 135,
      name: "Serie A",
      country: "Italy",
      logo: "https://media.api-sports.io/football/leagues/135.png",
      flag: "https://media.api-sports.io/flags/it.svg",
      season: 2025,
      round: "Regular Season - 1"
    },
    teams: {
      home: {
        id: 489,
        name: "AC Milan",
        logo: "https://media.api-sports.io/football/teams/489.png",
        winner: null
      },
      away: {
        id: 496,
        name: "Juventus",
        logo: "https://media.api-sports.io/football/teams/496.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    }
  },
  {
    fixture: {
      id: 4150673,
      referee: "José Sánchez",
      timezone: "UTC",
      date: "2025-08-05T20:00:00+00:00",
      timestamp: 1754395200,
      venue: {
        id: 232,
        name: "Camp Nou",
        city: "Barcelona"
      },
      status: {
        long: "Not Started",
        short: "NS",
        elapsed: null
      }
    },
    league: {
      id: 140,
      name: "La Liga",
      country: "Spain",
      logo: "https://media.api-sports.io/football/leagues/140.png",
      flag: "https://media.api-sports.io/flags/es.svg",
      season: 2025,
      round: "Regular Season - 1"
    },
    teams: {
      home: {
        id: 529,
        name: "Barcelona",
        logo: "https://media.api-sports.io/football/teams/529.png",
        winner: null
      },
      away: {
        id: 541,
        name: "Real Madrid",
        logo: "https://media.api-sports.io/football/teams/541.png",
        winner: null
      }
    },
    goals: {
      home: null,
      away: null
    },
    score: {
      halftime: { home: null, away: null },
      fulltime: { home: null, away: null },
      extratime: { home: null, away: null },
      penalty: { home: null, away: null }
    }
  }
];


  // GET https://v3.football.api-sports.io/fixtures?team=686&season=2025



useEffect(() => {
    const rawData = activeTab === 'results' ? data : nextmatches;
    const structured = [];

    rawData?.forEach((match) => {
      const existingLeague = structured.find(
        (entry) => entry.league?.id === match.league?.id
      );

      const score = match.score||{};

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
setSelectedLeague({ logo:<IoIosGlobe  className='text-xl'/>, name:"all competitions"})

  }, [activeTab]);






   

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

{/* league selecter */}
<div className='flex items-center gap-[5px] mb-6 text-white cursor-pointer relative '
onClick={()=>setLeaguesPopUps(!LeaguesPopUps)}
>

  <span className=' flex items-center gap-[1px]'>
     {SelectedLeague?.logo}
        <FaCaretDown />
  </span>

  <span className='text-xs capitalize'>
{SelectedLeague?.name}
  </span>


{/* popup */}
{
  LeaguesPopUps&& <div className=' capitalize flex flex-col gap-1 bg-slate-500 p-2 rounded-md absolute z-10 top-6 left-0'>
  {/* Header */}
  <span className={`flex gap-1 items-center border py-1 px-1 rounded-md ${SelectedLeague?.name=="all competitions"?"bg-black":""}`}
  onClick={()=>setSelectedLeague({logo:<IoIosGlobe  className='text-xl'/>,name:"all competitions"})}
  >
    <IoIosGlobe className='text-xl' />
    <span className='text-xs'>all competitions</span>
  </span>

  {/* Mapping through wellStructuredData */}
  {


    wellStructuredData?.map((data, index) => {
      return (
        <div className={`flex gap-1 items-center border py-1 px-1 rounded-md ${SelectedLeague?.name==data?.league?.name?"bg-black":""}`} key={index}
         onClick={()=>setSelectedLeague({logo:<img src={data?.league?.logo} alt="" className='h-5 w-5' />,name:data?.league?.name})}
        >
          <img src={data?.league?.logo} alt="" className='h-5 w-5' />
          <span className='text-xs'>
            <span>{data?.league?.name}</span>
          </span>
        </div>
      );
    })
  }
</div>

}




  </div>    

      <div className="space-y-2">


 {    (SelectedLeague?.name=="all competitions"?
  wellStructuredData:
 wellStructuredData?.filter(
      data=> data?.league?.name==SelectedLeague?.name
    )
  )?.map(
(data,index)=> <div key={index}>

     <Link to={`/leaguedetails/${data?.league?.id}/${data?.league?.season}/overview`} className="flex justify-between items-center mb-4" onClick={()=>setLeagueDetails(league)}>
        <button className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-sm font-semibold text-purple-400 tracking-wide select-none max-w-[80%]">
          <img
            src={data?.league?.logo}
             loading="lazy"
            alt={`${data?.league?.name} logo`}
             

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
