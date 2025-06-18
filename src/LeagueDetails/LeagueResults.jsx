import React, { useContext, useState } from 'react'
import FixtureCard from './FixtureCard';
import { Context } from '../Context_holder';
import Loader from '../Loader';

export default function LeagueResults() {

  const{ Matches }=useContext(Context)

  const PAGE_SIZE=10
const [page, setPage] = useState(1);

  const visibleMatches=  Matches?.slice(0,PAGE_SIZE*page)
    
       // GET https://v3.football.api-sports.io/fixtures?league=203&season=2025&past=100

const pastFixtures = [
  {
    fixture: {
      id: 1048572,
      referee: "Wilton Sampaio",
      timezone: "UTC",
      date: "2025-05-28T19:00:00+00:00",
      timestamp: 1748545200,
      periods: {
        first: 1748545200,
        second: 1748548800,
      },
      venue: {
        id: 284,
        name: "Allianz Parque",
        city: "São Paulo",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 203,
      name: "Campeonato Brasileiro Série A",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/71.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2025,
      round: "Regular Season - 12",
    },
    teams: {
      home: {
        id: 131,
        name: "Palmeiras",
        logo: "https://media.api-sports.io/football/teams/131.png",
        winner: true,
      },
      away: {
        id: 134,
        name: "Santos",
        logo: "https://media.api-sports.io/football/teams/134.png",
        winner: false,
      },
    },
    goals: {
      home: 2,
      away: 0,
    },
    score: {
      halftime: {
        home: 1,
        away: 0,
      },
      fulltime: {
        home: 2,
        away: 0,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1048573,
      referee: "Raphael Claus",
      timezone: "UTC",
      date: "2025-05-25T21:30:00+00:00",
      timestamp: 1748295000,
      periods: {
        first: 1748295000,
        second: 1748298600,
      },
      venue: {
        id: 262,
        name: "Maracanã",
        city: "Rio de Janeiro",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 203,
      name: "Campeonato Brasileiro Série A",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/71.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2025,
      round: "Regular Season - 11",
    },
    teams: {
      home: {
        id: 135,
        name: "Flamengo",
        logo: "https://media.api-sports.io/football/teams/135.png",
        winner: true,
      },
      away: {
        id: 136,
        name: "Atlético Mineiro",
        logo: "https://media.api-sports.io/football/teams/136.png",
        winner: false,
      },
    },
    goals: {
      home: 3,
      away: 1,
    },
    score: {
      halftime: {
        home: 1,
        away: 1,
      },
      fulltime: {
        home: 3,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1048574,
      referee: "Anderson Daronco",
      timezone: "UTC",
      date: "2025-05-23T00:30:00+00:00",
      timestamp: 1748104200,
      periods: {
        first: 1748104200,
        second: 1748107800,
      },
      venue: {
        id: 273,
        name: "Arena da Baixada",
        city: "Curitiba",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 203,
      name: "Campeonato Brasileiro Série A",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/71.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2025,
      round: "Regular Season - 11",
    },
    teams: {
      home: {
        id: 137,
        name: "Athletico Paranaense",
        logo: "https://media.api-sports.io/football/teams/137.png",
        winner: false,
      },
      away: {
        id: 138,
        name: "Internacional",
        logo: "https://media.api-sports.io/football/teams/138.png",
        winner: true,
      },
    },
    goals: {
      home: 0,
      away: 1,
    },
    score: {
      halftime: {
        home: 0,
        away: 0,
      },
      fulltime: {
        home: 0,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1048575,
      referee: "Bruno Arleu",
      timezone: "UTC",
      date: "2025-05-20T22:00:00+00:00",
      timestamp: 1747857600,
      periods: {
        first: 1747857600,
        second: 1747861200,
      },
      venue: {
        id: 275,
        name: "Arena Corinthians",
        city: "São Paulo",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 203,
      name: "Campeonato Brasileiro Série A",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/71.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2025,
      round: "Regular Season - 10",
    },
    teams: {
      home: {
        id: 133,
        name: "Corinthians",
        logo: "https://media.api-sports.io/football/teams/133.png",
        winner: null,
      },
      away: {
        id: 139,
        name: "São Paulo",
        logo: "https://media.api-sports.io/football/teams/139.png",
        winner: null,
      },
    },
    goals: {
      home: 1,
      away: 1,
    },
    score: {
      halftime: {
        home: 0,
        away: 1,
      },
      fulltime: {
        home: 1,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
  {
    fixture: {
      id: 1048576,
      referee: "Flavio Rodrigues",
      timezone: "UTC",
      date: "2025-05-18T19:00:00+00:00",
      timestamp: 1747676400,
      periods: {
        first: 1747676400,
        second: 1747680000,
      },
      venue: {
        id: 277,
        name: "Estádio Beira-Rio",
        city: "Porto Alegre",
      },
      status: {
        long: "Match Finished",
        short: "FT",
        elapsed: 90,
      },
    },
    league: {
      id: 203,
      name: "Campeonato Brasileiro Série A",
      country: "Brazil",
      logo: "https://media.api-sports.io/football/leagues/71.png",
      flag: "https://media.api-sports.io/flags/br.svg",
      season: 2025,
      round: "Regular Season - 10",
    },
    teams: {
      home: {
        id: 140,
        name: "Grêmio",
        logo: "https://media.api-sports.io/football/teams/140.png",
        winner: true,
      },
      away: {
        id: 141,
        name: "Fluminense",
        logo: "https://media.api-sports.io/football/teams/141.png",
        winner: false,
      },
    },
    goals: {
      home: 2,
      away: 1,
    },
    score: {
      halftime: {
        home: 1,
        away: 0,
      },
      fulltime: {
        home: 2,
        away: 1,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
]

   return (
    <>
    {visibleMatches?.length!=0?
       <div>
      {
         visibleMatches?.map(
             (data,index)=><div key={index} className='my-2'>

<FixtureCard  match={data}/>

             </div>
             
             
            
         )
      
         
         }
         
                              {visibleMatches?.length < Matches?.length && (
      <button
        onClick={() => setPage(page + 1)}
        className="my-4 px-4 block  text-sm mx-auto py-1 shadow-md backdrop-blur-md hover:shadow-[0_0_12px_rgba(128,0,255,0.6)]
              transition-shadow duration-500  border  rounded-md text-white"
      >
        Load More...
      </button>
    )}
         </div>:
         
        <Loader/>
    }
    </>
    
   )
}
