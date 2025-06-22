import React, { useContext, useEffect, useState } from 'react'
import {FaCaretDown } from "react-icons/fa";
import { Context } from '../Context_holder';
import { useParams } from 'react-router-dom';
import LeagueStandings from '../LeagueDetails/LeagueStandings';

export default function TeamTable() {
    const{StandingsFetch}=useContext(Context)
    const {season}=useParams()

    const [wellStructuredData, setWellStructuredData] = useState([]); 
         const [SelectedLeague, setSelectedLeague] = useState(null);
    
            const [LeaguesPopUps, setLeaguesPopUps] = useState(false);

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


useEffect(
    ()=>{
  const structured = [];

    data?.forEach((match) => {
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

    setWellStructuredData(structured);

    },[]
)

useEffect(
    ()=>{

setSelectedLeague({logo: wellStructuredData[0]?.league?.logo,name:wellStructuredData[0]?.league?.name,id:wellStructuredData[0]?.league?.id})

    },[wellStructuredData]
)

useEffect(
    ()=>{
        if(!SelectedLeague)return
    
StandingsFetch(`?league=${SelectedLeague?.id}&season=${2023}`)

    },[SelectedLeague]
)



  return (
    <div>

{/* league selecter */}
<div className='flex items-center gap-[5px] mb-6 text-white cursor-pointer relative '
onClick={()=>setLeaguesPopUps(!LeaguesPopUps)}
>

  <span className=' flex items-center gap-[1px]'>
     <img src= {SelectedLeague?.logo} alt="" className='h-5 w-5' />
    

        <FaCaretDown />
  </span>

  <span className='text-xs capitalize'>
{SelectedLeague?.name}
  </span>


{/* popup */}
{
  LeaguesPopUps&& <div className=' capitalize flex flex-col gap-1 bg-slate-500 p-2 rounded-md absolute z-10 top-6 left-0'>
  {/* Header */}
 

  {/* Mapping through wellStructuredData */}
  {


    wellStructuredData?.map((data, index) => {
      return (
        <div className={`flex gap-1 items-center border py-1 px-1 rounded-md ${SelectedLeague?.name==data?.league?.name?"bg-black":""}`} key={index}
         onClick={()=>setSelectedLeague({logo:data?.league?.logo,name:data?.league?.name,id:data?.league?.id})}
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
  <LeagueStandings/>


    </div>
  )
}
